const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: 'kelle'
  },
  publicRuntimeConfig: {
    staticFolder: '/static'
  },
  i18n
}
