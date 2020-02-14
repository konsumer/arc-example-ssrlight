// this tells parcel what static pages to pre-render, based on files in ./src/frontend/pages

import pages from './src/frontend/pages/**/*.js'

const routes = Object.keys(pages).filter(p => p !== 'index' && p !== '404').map(p => `/${p}`)
routes.push('/')

export const prerender = {
  routes
}
