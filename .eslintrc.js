const { defineEslintConfig } = require('@ttou/define-config')

module.exports = defineEslintConfig({
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'no-undef': 'off',
    'no-empty': 'off',
    'no-useless-escape': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': 'error',
    'vue/attribute-hyphenation': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-unused-components': 'warn',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  }
})
