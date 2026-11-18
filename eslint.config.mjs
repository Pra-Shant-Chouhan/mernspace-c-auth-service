// @ts-check

import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig(
    {
        // config with just ignores is the replacement for `.eslintignore`
        ignores: [
            '**/build/**',
            '**/coverage/**',
            '**/dist/**',
            'src/some/file/to/ignore.ts',
            'jest.config.js',
        ],
    },
    {
        files: ['**/*.{js,ts}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommendedTypeChecked,
        ],

        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: [
                        'app.spec.ts',
                        'tests/users/register.spec.ts',
                    ],
                },
            },
        },

        rules: {
            // 'no-unused-vars': 'off',
            // '@typescript-eslint/no-unused-vars': ['error'],
            '@typescript-eslint/no-unused-vars': 'off',
            // 'no-console': 'error',
            // 'dot-notation': 'error',
        },
    },
)
