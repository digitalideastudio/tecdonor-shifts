module.exports = {
    'extends': 'airbnb',
    'plugins': [
        'react',
        'react-native',
    ],
    'env': {
        'react-native/react-native': true,
        'jest': true
    },
    rules: {

        'comma-dangle': ['error', 'only-multiline'],
        'consistent-return': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 0,
        'indent': ['error', 4],
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        // React Rules
        'react/jsx-indent': ['error', 4],
        'react/jsx-filename-extension': 0,

        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,


        // 'react/jsx-filename-extension': 0,
        // 'no-underscore-dangle': 0,
        // 'no-case-declarations': 0,
        // 'default-case': 0,
        // 'global-require': 0,
        // 'no-restricted-syntax': 0,
        // 'no-plusplus': 0,
        // 'guard-for-in': 0,
        // 'max-len': [
        //     2,
        //     120
        // ],
        // 'no-console': 0,
        // 'function-paren-newline': 0,
        // 'no-undef': 0,
        // 'function-paren-newline': 0,
        // 'comma-dangle': 0,
        // 'import/no-extraneous-dependencies': 0,
        // 'import/no-unresolved': 0,
        // 'import/extensions': 0
    },
};