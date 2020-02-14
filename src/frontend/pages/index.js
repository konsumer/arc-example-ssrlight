import React from 'react'

import SayHello from '../components/SayHello'

export default () => (
  <main>
    <h2>Home</h2>
    <p>This is the home page.</p>
    <p>Be sure to also checkout the <a href='/graphql'>Graphql Playground</a>, which is created with a static file in <code>src/frontend/static/graphql</code> and a backend in <code>src/http/post-graphql</code>.</p>
    <p>Here is a demo that use <a href='https://formidable.com/open-source/urql/'>urql</a> to hit the Graphql Backend:</p>
    <SayHello />
  </main>
)
