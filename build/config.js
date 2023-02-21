// const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  name: 'muniz-tpl-react-pc',
  copyrightDesc: 'Copyright Description - Statement',
  dev: {
    port: 9092,
    ip: '127.0.0.1',
    apiUrl: 'http://yourserver.com/',
  },
  publish: {
    publicPath: '/',
  },
  theme: {
    'primary-color': '#1DA57A',
    // ...getThemeVariables({
    //   dark: true,
    // }),
  },
};
