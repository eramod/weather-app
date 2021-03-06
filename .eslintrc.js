'use strict';

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      ],
    },
  },
  plugins: ['ember'],
  extends: ['eslint:recommended', 'plugin:ember/recommended', 'prettier'],
  env: {
    browser: true,
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
      },
    },
    // TypeScript
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
      ],
      rules: {
        'prefer-const': 0,
        semi: 0,
        '@typescript-eslint/array-type': [2, { default: 'array-simple' }],
        '@typescript-eslint/ban-ts-comment': [
          2,
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
          },
        ],
        '@typescript-eslint/consistent-type-assertions': 2,
        '@typescript-eslint/explicit-member-accessibility': [
          2,
          { accessibility: 'no-public' },
        ],
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/no-base-to-string': 2,
        '@typescript-eslint/no-confusing-non-null-assertion': 2,
        '@typescript-eslint/no-dynamic-delete': 2,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-extra-semi': 2,
        '@typescript-eslint/no-extraneous-class': 2,
        '@typescript-eslint/no-implicit-any-catch': 2,
        '@typescript-eslint/no-invalid-void-type': 2,
        '@typescript-eslint/no-require-imports': 2,
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
        '@typescript-eslint/no-unnecessary-qualifier': 2,
        '@typescript-eslint/no-unnecessary-type-arguments': 2,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-use-before-define': [2, { functions: false }],
        '@typescript-eslint/prefer-enum-initializers': 2,
        '@typescript-eslint/prefer-for-of': 2,
        '@typescript-eslint/prefer-includes': 2,
        '@typescript-eslint/prefer-literal-enum-member': 2,
        '@typescript-eslint/prefer-string-starts-ends-with': 2,
        '@typescript-eslint/require-array-sort-compare': 2,
        '@typescript-eslint/semi': 2,
        '@typescript-eslint/switch-exhaustiveness-check': 2,
        '@typescript-eslint/type-annotation-spacing': 2,
        '@typescript-eslint/unbound-method': 0, // We use unbound methods regularly in Ember
        '@typescript-eslint/unified-signatures': 2,
        'no-use-before-define': 0,
      },
    },
    {
      // Test files:
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
      rules: {
        'qunit/require-expect': 0,
      },
    },
  ],
};
