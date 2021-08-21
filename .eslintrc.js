/*
 * @Date: 2021-06-20 18:30:42
 * @LastEditors: <limeng.a@mininglamp.com>
 * @Description: Eslint Config
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
    'eslint-plugin-react-hooks'
  ],
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  rules: {
    // 'react-hooks/rules-of-hooks': 'warn',
    // 'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    complexity: ['error', 60],
    'max-params': ['error', 7],
    'max-classes-per-file': ['error', 2], // https://cn.eslint.org/docs/rules/max-classes-per-file
    'max-nested-callbacks': ['error', 5],
    'no-debugger': 0,
    'no-undef': 'off',
    'no-lone-blocks': 0,
    'no-unused-vars': 'off',
    'no-extend-native': 'off',
    'no-underscore-dangle': 0,
    'no-unused-expressions': 'off',
    'no-template-curly-in-string': 0,
    'no-console': ['warn', { allow: ['error'] }],
    'prettier/prettier': 'error',
    'prefer-regex-literals': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error'
  }
};