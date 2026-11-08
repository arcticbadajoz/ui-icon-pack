#!/bin/sh
set -eu

script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

version=$(node - "$script_dir/package.json" <<'NODE'
const fs = require("node:fs");
const file = process.argv[2];

let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync(file, "utf8"));
} catch (error) {
  console.error(`publish.sh: unable to read a valid package.json: ${error.message}`);
  process.exit(1);
}

if (typeof packageJson.version !== "string" ||
    !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(packageJson.version)) {
  console.error("publish.sh: package.json version must be in MAJOR.MINOR.PATCH format.");
  process.exit(1);
}

process.stdout.write(packageJson.version);
NODE
)

tag="v$version"
cd "$script_dir"
git tag "$tag"
git push origin "$tag"
printf 'Created and pushed tag %s\n' "$tag"
