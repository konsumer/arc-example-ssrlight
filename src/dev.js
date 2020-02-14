// this is the dev-server entry-point

import Bundler from 'parcel-bundler'
import express from 'express'
import sandbox from '@architect/sandbox'
import proxy from 'http-proxy-middleware'
import chalk from 'chalk'

const app = express()
const { PORT = 8080 } = process.env
const bundler = new Bundler(`${__dirname}/frontend/index.html`)

// parcel does this too, but this ensures that other HTML files work correctly
app.use(express.static(`${__dirname}/frontend/static`))
app.use(bundler.middleware())
app.use(proxy({ target: `http://0.0.0.0:${PORT + 1}`, changeOrigin: true, logLevel: 'silent' }))

console.log(`\nDev server listening on ${chalk.blue(`http://0.0.0.0:${PORT}`)}\n\n`)
sandbox.start({ port: PORT + 1, quiet: true })
app.listen(PORT)
