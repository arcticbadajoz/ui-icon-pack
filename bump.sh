#!/bin/sh
set -eu

script_name=publish.sh
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$script_dir"

if [ -z "$(git branch --show-current)" ]; then
  echo "$script_name: cannot publish from a detached HEAD." >&2
  exit 1
fi

next_version=$(node -e '
const fs = require("node:fs");
const file = "package.json";

let contents;
try {
  contents = fs.readFileSync(file, "utf8");
} catch (error) {
  console.error(`publish.sh: unable to read ${file}: ${error.message}`);
  process.exit(1);
}

let packageJson;
try {
  packageJson = JSON.parse(contents);
} catch (error) {
  console.error(`publish.sh: invalid package.json: ${error.message}`);
  process.exit(1);
}

const match = typeof packageJson.version === "string" &&
  packageJson.version.match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);
if (!match) {
  console.error("publish.sh: package.json version must be in MAJOR.MINOR.PATCH format.");
  process.exit(1);
}

process.stdout.write(`${match[1]}.${match[2]}.${Number(match[3]) + 1}`);
')

if git show-ref --verify --quiet "refs/heads/$next_version"; then
  echo "$script_name: branch '$next_version' already exists." >&2
  exit 1
fi

tag="v$next_version"
if git show-ref --verify --quiet "refs/tags/$tag"; then
  echo "$script_name: tag '$tag' already exists." >&2
  exit 1
fi

git switch --create "$next_version"

node -e '
const fs = require("node:fs");
const file = "package.json";
const nextVersion = process.argv[1];
const contents = fs.readFileSync(file, "utf8");
const versionLine = /^(\s*"version"\s*:\s*)"[^"]+"/m;
if (!versionLine.test(contents)) {
  console.error("publish.sh: unable to locate the top-level version in package.json.");
  process.exit(1);
}
fs.writeFileSync(file, contents.replace(versionLine, `$1"${nextVersion}"`));
' "$next_version"

git add --all
git commit -m "chore: bump version to $next_version"
git push --set-upstream origin "$next_version"

git tag "$tag"
git push origin "$tag"
printf 'Version bumped and pushed on branch %s with tag %s\n' "$next_version" "$tag"
