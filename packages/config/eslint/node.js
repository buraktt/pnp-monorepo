const rules = require('./rules')

module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    describe: 'readonly',
    it: 'readonly',
    test: 'readonly',
    beforeAll: 'readonly',
    afterAll: 'readonly',
    expect: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'newline-before-return': 'error',
    ...rules
  }
}
