const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          // disable module scope enforcement
          const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
            ({ constructor }) =>
              constructor && constructor.name === 'ModuleScopePlugin'
          )
          webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)

          // enable jsx support for imports
          const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf)
          if (oneOfRule) {
            const jsxRule = oneOfRule.oneOf.find(
              rule => rule.test && rule.test.toString().includes('jsx')
            )
            const newIncludePaths = [path.resolve(__dirname, '../')]
            if (jsxRule) {
              if (Array.isArray(jsxRule.include)) {
                jsxRule.include = [...jsxRule.include, ...newIncludePaths]
              } else {
                jsxRule.include = [jsxRule.include, ...newIncludePaths]
              }
            }
          }
          return webpackConfig
        }
      }
    }
  ]
}
