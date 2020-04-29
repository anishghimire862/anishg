var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anishg/'
    : '/'
  ,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin(
        // Absolute path to compiled SPA
        path.join(__dirname, '.'),
        // List of routes to prerender
        ['/', '/blog', '/education', '/projects']
      )
    ]
  }
  // plugins: [
  //   new PrerenderSpaPlugin(
  //     // Absolute path to compiled SPA
  //     path.join(__dirname, '.'),
  //     // List of routes to prerender
  //     ['/', '/blog', '/education', '/projects']
  //   )
  // ]
}

