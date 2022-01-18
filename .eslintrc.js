require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  plugins: ['simple-import-sort'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    indent: 'off',
    'no-new': 'off',
    'no-undef': 'off',
    'multiline-ternary': 'off',
    'no-useless-escape': 'off',
    'no-return-await': 'off',
    'no-prototype-builtins': 'off',
    'no-throw-literal': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'space-before-function-paren': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
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
}