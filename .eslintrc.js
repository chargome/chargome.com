module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  globals: {
    React: 'writable',
  }
};