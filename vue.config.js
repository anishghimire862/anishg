var path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anishg/'
    : '/'
  ,
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin({
        staticDir: path.resolve(__dirname, './dist'),
        routes: [ '/', '/blog', '/education', '/projects'],
        postProcess(context) {
          let titles = {
            '/': 'My home page',
            '/blog': 'My awesome about page',
            '/education': 'Contact me',
            '/projects': 'Contact me'
          };
          context.html = context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${titles[context.route]}</title>`
          )
          return context
        }
      })
    ]
  }
}

