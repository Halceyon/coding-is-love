module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off',

    // recommended by Vetur
    'vue/html-self-closing': 'off',

    // Disable max-len
    'max-len': 'off',
    'vue/max-len': 'off',
    'vue/multi-word-component-names': 'off',

    'arrow-parens': ['error', 'as-needed'],

    // add new line above comment
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    'linebreak-style': 'off',

    // add new line above comment
    'newline-before-return': 'error',

    // add new line below import
    'import/newline-after-import': ['error', { count: 1 }],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    semi: ['error', 'always'],

    'global-require': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/alt-text': 'off',
    'vue/no-template-target-blank': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
  },
};
