// this is the frontend entry-point

import React from 'react'
import { render } from 'react-dom'
import { useRoutes, A } from 'hookrouter'

import './style.css'
import pages from './pages/**/*.js'
const IndexPage = pages.index.default
const NotFoundPage = pages['404'].default

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
        <A href='/'>home</A>
        <A href='/about'>about</A>
      </nav>
    </header>
    <Router />
    <footer>
      Made with &hearts; by <a href='https://github.com/konsumer'>konsumer</a> to show off how awesome <a href='https://arc.codes/'>arc</a> is.
    </footer>
  </>
)

render(<App />, document.getElementById('root'))
