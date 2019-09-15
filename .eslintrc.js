module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'markdown'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jest/all',
  ],
  rules: {
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/no-test-return-statement': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
  },
}
