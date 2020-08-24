module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  globals: {
    GLOBAL_TEST: 'readonly',
    _: 'readonly',
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'import/extensions': [1, { extensions: ['.tsx', '.ts', '.js'] }],
    'import/no-unresolved': 0,
  },
};
