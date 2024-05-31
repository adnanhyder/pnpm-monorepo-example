module.exports = {
    extends: ['@boost/eslint-config-boost'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    ignorePatterns: ['.eslintrc.js'],
};