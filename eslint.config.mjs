import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPrettier from 'eslint-plugin-prettier'
import eslintPrettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { ignores: ['node_modules/', 'dist/'] },
  {
    rules: {
      eqeqeq: 'warn',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
  eslintPrettierConfig, // ✅ Disables conflicting ESLint rules
  eslintPrettier.configs.recommended,
]
