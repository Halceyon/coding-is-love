const { mergeSassVariables } = require('@vuetify/cli-plugin-utils');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/coding-is-love/' : '/',
  lintOnSave: false,
  transpileDependencies: ['vuetify'],
  chainWebpack: config => {
    const modules = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    modules.forEach(match => {
      config.module
        .rule('sass')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt => mergeSassVariables(opt, "'@/styles/variables.scss'"));
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap(opt => mergeSassVariables(opt, "'@/styles/variables.scss';"));
    });
    config.plugin('happypack')
      .use(require('happypack'), [{
        id: 'js',
        threads: 8,
        loaders: ['babel-loader'],
      }, {
        id: 'css',
        threads: 8,
        loaders: ['css-loader'],
      }, {
        id: 'scss',
        threads: 8,
        loaders: ['css-loader', 'sass-loader'],
      }, {
        id: 'sass',
        threads: 8,
        loaders: ['css-loader', 'sass-loader?indentedSyntax'],
      }, {
        id: 'ts',
        threads: 8,
        loaders: ['ts-loader'],
      }]);
  },
};
