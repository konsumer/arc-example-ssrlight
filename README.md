# arc-example-ssrlight

This is a react example that uses [parcel](https://parceljs.org/) for development & building of the frontend.

It has a simple graphql server & playground (http://0.0.0.0:8080/graphql), and does HMR for local dev.

* You can add any other backend endpoints you like, using `.arc` and they will be generated in `src/http` when you run `arc init`
* You can add frontend routable-endpoints by putting a react component in `src/frontend/pages`
* Put your static files in `src/frontend/static`.

```
npm i          # install local tools
npm start      # start a hot-reloading local development server
npm run deploy # dpeloy on lambda
```

It's not true SSR, in that it pre-renders the HTML from JSX, but in many cases this is fine, and it's much faster & lighter, and has most of the same SEO benefits.

I am using [hookrouter](https://www.npmjs.com/package/hookrouter), but you can use any react-router you like, if you modify `frontend/index.js`.