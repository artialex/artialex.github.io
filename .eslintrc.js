module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: ['eslint:recommended', 'plugin:import/recommended'],
    settings: {
        'import/resolver': 'typescript',
    },

    rules: {
        'prefer-const': 'error',
    },
}
