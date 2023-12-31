module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
  overrides: [
    {
      files: ['jest.config.js'], // Adjust if you've renamed your Jest config file
      env: {
        node: true,
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
