// this is the frontend entry-point

import React from 'react'
import { render } from 'react-dom'
import { useRoutes } from 'hookrouter'

import './style.css'
import pages from './pages/**/*.js'
import NotFoundPage from './pages/404'
import IndexPage from './pages/index'

// this builds the router from files in pages/*.js
const Router = () => {
  const routes = { '/': () => <IndexPage /> }
  Object.keys(pages).forEach(p => {
    if (p !== 'index' && p !== '404') {
      const Page = pages[p].default
      routes[`/${p}`] = (params) => <Page {...params} />
    }
  })
  const result = useRoutes(routes)
  return result || <NotFoundPage />
}

// this is the frame of the frontend
const App = () => (
  <>
    <header>
      <h1>Arc SSR Light</h1>
      <nav>
        <a href='/'>home</a>
        <a href='/about'>about</a>
      </nav>
    </header>
    <Router />
    <footer>
      Made with &hearts; by <a href='https://github.com/konsumer'>konsumer</a> to show off how awesome <a href='https://arc.codes/'>arc</a> is.
    </footer>
  </>
)

render(<App />, document.getElementById('root'))
