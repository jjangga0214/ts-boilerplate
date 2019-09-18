# ts-boilerplate

Example of typescript boilerplate.

[![license](https://img.shields.io/badge/license-MIT-ff4081.svg?style=flat-square&labelColor=black)](./LICENSE)
[![test](https://img.shields.io/badge/test-jest-7c4dff.svg?style=flat-square&labelColor=black)](./jest.config.js)
[![code style:airbnb](https://img.shields.io/badge/code_style-airbnb-448aff.svg?style=flat-square&labelColor=black)](https://github.com/airbnb/javascript)
[![code style:prettier](https://img.shields.io/badge/code_style-prettier-18ffff.svg?style=flat-square&labelColor=black)](https://prettier.io/)
[![.nvmrc](https://img.shields.io/badge/.nvmrc-12-00e676.svg?style=flat-square&labelColor=black)](./.nvmrc)
[![yarn:required](https://img.shields.io/badge/yarn-required-aeea00.svg?style=flat-square&labelColor=black)](https://yarnpkg.com/en/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-ffab00.svg?style=flat-square&labelColor=black)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/Commitizen-cz_conventional_changelog-dd2c00.svg?style=flat-square&labelColor=black)](http://commitizen.github.io/cz-cli/)
[![pr welcome](https://img.shields.io/badge/PRs-welcome-09FF33.svg?style=flat-square&labelColor=black)]

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjjangga0214%2Fts-boilerplate.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjjangga0214%2Fts-boilerplate?ref=badge_shield)

## Note

Please read [NOTE.md](./docs/NOTE.md), before getting started.

## Getting started

Install dependencies.

```bash
yarn install
```

On development, run

```bash
yarn dev # restarts a process when file change is detected.
```

On productions, run

```bash
yarn build # compiles ts to js
yarn start # runs compiled js
```

## Yarn scripts

```bash
yarn test # runs all tests (runs `jest` against "*.test.js")
yarn test:unit # runs unit tests
yarn test:integration # runs integration tests
yarn test:coverage # runs all tests and measures coverage
yarn test:unit:coverage # runs unit tests and measures coverage
yarn test:integration:coverage # runs integration tests and measures coverage

yarn lint # lint
yarn format # format(fix)

yarn release # release using standard-version
```

## License

[MIT License](license). Copyright &copy; 2019, @jjangga0214 <[bnbcmindnpass@gmail.com](mailto:bnbcmindnpass@gmail.com)>

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjjangga0214%2Fts-boilerplate.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjjangga0214%2Fts-boilerplate?ref=badge_large)
