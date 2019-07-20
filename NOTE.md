# Note

## node

This project is tested only with node version specified in [.nvmrc](.nvmrc), though a mininum requirement version specified in package.json might differs. If not using node with the version of .nvmrc, you are taking your own risk.

## yarn

Only yarn is officially considered. Therefore this project only maintains _yarn.lock_, which **yarn** generates. Do not commit _package-lock.json_, which **npm** generates.

## module aliases

`#` is `${projectRoot}/src`, and `~` is `${projectRoot}`. [`link-module-alias`](https://github.com/Rush/link-module-alias) is used for creating aliases (by creating symlink). Refer `_moduleAliases` field in package.json. `#` is used instead of `@` due to [an issue](https://github.com/Rush/link-module-alias/issues/3) of `link-module-alias`.

## test

[**jest**](https://jestjs.io/) is used for test.
