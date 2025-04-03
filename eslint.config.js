import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import prettierConfig from 'eslint-config-prettier';
import alias from 'eslint-import-resolver-alias';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  prettierConfig,
  {
    // Add this section to tell ESLint to resolve imports using the Vite alias
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['~', './src'], // map `~` to `src` as per your Vite config
          ],
          extensions: ['.ts', '.js', '.vue', '.json'],
        },
      },
    },
  },
]);
