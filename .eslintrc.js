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
      rules: {
        // 为做演示，暂时允许可推断类型标明类型，实际开发中去掉
        '@typescript-eslint/no-inferrable-types': 0,
      },
    },
  ],
  rules: {
    // 使用require时不报错
    'import/no-extraneous-dependencies': 0,
    // 不写扩展名的时候不报错
    'import/extensions': [0, { extensions: ['.tsx', '.ts', '.js'] }],
    // 防止不写扩展名的时候，找不到模块报错
    'import/no-unresolved': 0,
    // 箭头函数不用强制写括号
    'arrow-parens': 0,
    // 可以使用console
    'no-console': 0,
    // 取消每行限制长度
    'max-len': 0,
    // 取消prop-types校验
    'react/prop-types': 0,
  },
};
