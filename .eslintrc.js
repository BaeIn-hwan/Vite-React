module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		"prettier",
		"prettier/react",
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: module
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',		
	}
};
