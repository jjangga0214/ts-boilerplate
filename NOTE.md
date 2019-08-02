# Note

## Node

This project is tested only with node version specified in [.nvmrc](./.nvmrc), though a mininum requirement version specified in package.json might differs. If not using node with the version of .nvmrc, you are taking your own risk.

## Yarn

Only yarn is officially considered.

### Lock file

Therefore this project only maintains _yarn.lock_, which **yarn** generates. Do not commit _package-lock.json_, which **npm** generates.

### Version

The version of yarn should satisfy the condition specified on package.json's `engines.yarn` field.

## Module aliases

`#` is `${projectRoot}/src`, and `~` is `${projectRoot}`. [`link-module-alias`](https://github.com/Rush/link-module-alias) is used for creating aliases (by creating symlink). Refer `_moduleAliases` field in package.json. `#` is used instead of `@` due to [an issue](https://github.com/Rush/link-module-alias/issues/3) of `link-module-alias`.

## Test

[**jest**](https://jestjs.io/) is used as test runner.
