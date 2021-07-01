    // eslint-config-htmlacademy - это в package



      "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }, - это после scripts








ниже создать файл .eslintrc.yml

  env:
  es6: true
  browser: true
  commonjs: true
  jest: true

extends: ['htmlacademy/es6', 'plugin:react/recommended']

parserOptions:
  ecmaFeatures:
    jsx: true
  ecmaVersion: 6
  sourceType: module

plugins: ['react']

settings:
  react:
    version: '16'

rules:
  camelcase: 'off'
