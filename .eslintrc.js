/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'airbnb-base'],
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    '@next/next/no-img-element': 0,
  },
  globals: {
    JSX: true,
  },
};
