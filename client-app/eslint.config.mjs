import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-internal-modules': 'off',
      'prettier/prettier': 'off',
      'import/order': 'off',
      'no-var': 'warn',
      'prefer-const': 'warn',
      'react/no-unstable-nested-components': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  }),
];

export default eslintConfig;
