var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
// var PuppeteerRenderer = require('puppeter');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anishg/'
    : '/'
  ,
  configureWebpack: {
    plugins: process.env.NODE_ENV === 'production' ? [
      new PrerenderSpaPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/education', '/projects', '/blog'],
        renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
          renderAfterDocumentEvent: 'render-event',
          headless: false,
        }),
      })
    ] : []
  }
}

