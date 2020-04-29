const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/anishg/'
    : '/'
}

