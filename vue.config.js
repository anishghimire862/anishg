var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')
// var PuppeteerRenderer = require('puppeter');
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anishg/'
    : '/'
  ,
  pluginOptions: {
    PrerenderSpaPlugin: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about'
      ],
      useRenderEvent: true,
      onlyProduction: true,
 
      headless: false, // <- this could also be inside the customRendererConfig
      customRendererConfig:
      {
        args: ["--auto-open-devtools-for-tabs"]
      }
    }
  }
}

