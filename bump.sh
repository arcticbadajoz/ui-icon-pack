#!/bin/sh
set -eu

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$script_dir"

if [ -z "$(git branch --show-current)" ]; then
  echo "bump.sh: cannot push from a detached HEAD." >&2
  exit 1
fi

next_version=$(node -e '
const packageJson = require("./package.json");
const version = packageJson.version;
const match = typeof version === "string" && version.match(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);
if (!match) {
  console.error("bump.sh: package.json version must be in MAJOR.MINOR.PATCH format.");
  process.exit(1);
}

process.stdout.write(`${match[1]}.${match[2]}.${Number(match[3]) + 1}`);
')

if git show-ref --verify --quiet "refs/heads/$next_version"; then
  echo "bump.sh: branch '$next_version' already exists." >&2
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
  console.error("bump.sh: unable to locate the top-level version in package.json.");
  process.exit(1);
}
fs.writeFileSync(file, contents.replace(versionLine, `$1"${nextVersion}"`));
' "$next_version"

git add --all
git commit -m "chore: bump version to $next_version"
git push --set-upstream origin "$next_version"
printf 'Version bumped and pushed on branch %s\n' "$next_version"
