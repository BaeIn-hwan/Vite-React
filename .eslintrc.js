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
    // 'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    // 'prettier',
  ],
  /*
    eslint 설정 시 off(0), warn(1), error(2) 문자열로 작성한다.
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['<', '>', '{', '}'],
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        ignoreRestArgs: false,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     arrowParens: 'always',
    //     bracketSpacing: true,
    //     insertPragma: false,
    //     jsxBracketSameLine: false,
    //     jsxBrackets: false,
    //     jsxSingleQuote: false,
    //     printWidth: 80,
    //     singleQuote: true,
    //     semi: true,
    //     useTabs: false,
    //     tabWidth: 2,
    //     trailingComma: 'all',
    //   },
    // ],
  },
};
