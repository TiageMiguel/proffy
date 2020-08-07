module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    'prettier',
  ],
  plugins: ['react', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  rules: {
    'import/order': ['error'],
  },
};
