module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ecmaFeatures: {
    jsx: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'next'],
  settings: {
    'import/resolver': 'typescript',
  },
  rules: {
    'prefer-const': 'error',
  },
}
