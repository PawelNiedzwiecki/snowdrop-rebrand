import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import graphqlPlugin from '@graphql-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import parser from '@graphql-eslint/eslint-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '**/*.config.js',
      '**/*.d.ts',
      '**/graphql.config.js',
      'src/gatsby-types.d.ts',
      '**/.cache',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      react,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'react/no-find-dom-node': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/no-string-refs': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {},
      parser: tsParser,
    },
  },
  {
    files: ['**/*.graphql'],
    plugins: {
      '@graphql-eslint': graphqlPlugin,
    },
    languageOptions: {
      parser: parser,
    },
    rules: {
      '@graphql-eslint/no-anonymous-operations': 'error',
      '@graphql-eslint/naming-convention': [
        'error',
        {
          OperationDefinition: {
            style: 'PascalCase',
            forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
            forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
          },
        },
      ],
    },
  },
];
