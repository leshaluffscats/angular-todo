module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  globals: {
    window: true,
    module: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/*.html'],
  rules: {
    'no-empty-function': 'error',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
};
