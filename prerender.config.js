// this tells pre-render what files to static-render

const glob = require('glob').sync
const pages = glob(`${__dirname}/src/frontend/pages/**/*.js`).map(f => f.replace(`${__dirname}/src/frontend/pages/`, '').replace('.js', ''))
const routes = pages.filter(p => p !== 'index' && p !== '404').map(p => `/${p}`)
routes.push('/')

module.exports = {
  routes
}
