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

Module Aliases should be consistent between node, typescript, and jest.

<!-- markdownlint-disable MD024 -->

### Node

<!-- markdownlint-enable MD024 -->

[`link-module-alias`](https://github.com/Rush/link-module-alias) is used for creating module aliases (by creating symlink in node_modules) for node. Refer `_moduleAliases` field in package.json.

### Typescript

For typescript, corresponding configurations are done by `baseUrl` and `paths` fields in tsconfig.json.

### Jest

See `moduleNameMapper` for corresponding configuration.

For example,

```json
// A map from regular expressions to module names that allow to stub out resources with a single module
moduleNameMapper: {
  '^#/(.*)$': '<rootDir>/src/$1',
}
```

means **#/** will be matched to **<rootDir>/src/**.

<!-- markdownlint-disable MD024 -->

### Note

<!-- markdownlint-enable MD024 -->

Note that `#` is used instead of somewhat conventional `@` due to [an issue](https://github.com/Rush/link-module-alias/issues/3) of `link-module-alias`.

### Caution

Some commands handling node_modules like `yarn remove` or `yarn upgrade` can cause deletion of symlinks (but not the original source codes). When this happens, simply executing `npx link-module-alias`, `yarn link-module-alias`, or `yarn install`(postinstall config calling `link-module-alias`) would make symlinks again.

## Test

[**jest**](https://jestjs.io/) is used as test runner.

## Dev

`yarn dev` uses [ts-node-dev](https://github.com/whitecolor/ts-node-dev), and ts-node-dev is devDependency. It's not used in `yarn start`, which is for production.

## Git hooks

There are git hooks, you can see in package.json under 'husky' field. To ignore hooks registered by husky, run `HUSKY_SKIP_HOOKS=1 <command-you-want>` or `yarn husky-skip <command-you-want>`. Note that shell specific configuration(e.g. aliases) is only applicable with the former one, as `yarn` can use a different shell from the user's.

### Lint-staged

[`lint-staged`](https://github.com/okonet/lint-staged) formats staged files, and stage them again.

### Commitizen

This repo is [**"commitizen-friendly"**](https://github.com/commitizen/cz-cli#if-your-repo-is-commitizen-friendly). Commitizen is executed when `git commit`(`prepare-commit-msg` hook)

### Commitlint

[Commitlint](https://github.com/conventional-changelog/commitlint) lints commit message. [commitlint.config.js](commitlint.config.js) is its configuration file.
