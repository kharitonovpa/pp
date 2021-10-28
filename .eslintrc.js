module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:prettier/recommended', 'plugin:nuxt/recommended', 'prettier/prettier'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 120,
        trailingComma: 'all',
        semi: true,
        doubleQuote: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        bracketSpacing: true,
      },
    ],
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/valid-template-root': 'off',
    'vue/require-component-is': 'off',
    'no-unexpected-multiline': 'off',
    'no-undef': 'off',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'index', 'parent', 'sibling'] }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 50,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
