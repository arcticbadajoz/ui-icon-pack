import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['lib/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/icon/**/*.tsx'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-duplicate-imports': [
        'error',
        { allowSeparateTypeImports: true },
      ],
    },
  },
  {
    rules: {
      'no-multi-spaces': 'error',
    },
  },
);
