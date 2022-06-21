module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    // 'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  /*
    eslint 설정 시 off(0), warn(1), error(2) 문자열로 작성한다.
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': [
      'warn', {
        'ignoreRestArgs': false
      }
    ],
    // 'prettier/prettier': [
    //   'error', {
    //     'arrowParens': 'avoid',
    //     'bracketSpacing': true,
    //     'insertPragma': false,
    //     'jsxBracketSameLine': false,
    //     'jsxSingleQuote': true,
    //     'printWidth': 80,
    //     'singleQuote': false,
    //     'semi': true,
    //     'useTabs': false,
    //     'tabWidth': 2,
    //     'trailingComma': 'all'
    //   }
    // ]
  },
};
