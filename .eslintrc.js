module.exports = {
  root: true,
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    '@typescript-eslint/parser',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
  },
  parserOptions: {
    sourceType: 'module',
  },
};
