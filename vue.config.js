const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anishg/'
    : '/'
  ,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin(
        path.join(__dirname, '/dist'),
        [ '/', '/about', '/education' ],
        {
          postProcessHtml: function (context) {
            var titles = {
              '/': 'Home',
              '/about': 'Our Story',
              '/education': 'Contact Us'
            }
            return context.html.replace(
              /<title>[^<]*<\/title>/i,
              '<title>' + titles[context.route] + '</title>'
            )
          }
        }
      )
    ]
  }
}

