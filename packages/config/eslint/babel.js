const rules = require('./rules')

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    'jest/globals': true,
    browser: true
  },
  globals: {
    localStorage: true,
    fetch: true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/babel',
    'prettier/react',
    'prettier/standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018
  },
  plugins: ['babel', 'jest', 'react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    ...rules
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
