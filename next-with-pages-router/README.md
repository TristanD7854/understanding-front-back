# Getting started

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


# Documentation Tristan




## Next = Front + Back together

Next is front (with /pages) + back (with /api) on the go ...


## CSR / SSR / SSG / ISR

Code from : https://github.com/samfromaway/next-data-fetching (https://youtu.be/mWytwmxLKmo)

To test it, look at the csr.tsx, csr.tsx, csr.tsx, csr.tsx files.
Change the cities in the /express-server app, and see the impact.
Run the app with ```npm run start``` because "In development (next dev), getStaticProps will be called on every request".

### CSR - client side rendering

Calling http://localhost:3000/csr from Postman doesn't display proper html, because it is the client's job to load the page, then use js to retrieve the data from the backend.
We get in Postman the same file than here : ![CSR Sources](documentation-images/CSR_Sources.png)
but without the left display (Postman can't do js).

### SSR - server side rendering

Calling http://localhost:3000/ssr from Postman displays proper html.
We get in Postman the same file than here : ![SSR Sources](documentation-images/SSR_Sources.png)
but without the left display (Postman can't do that).

Advantage : fastest response than CSR for initial load page apparently

### SSG - static site generation

Same as SSR, but getStaticProps() is build at runtime (when running npm run build).
So changing the return of the express server and refreshing the next page = no update
Good for a thing that don't update.

Advantage : really fast response because not calling (and waiting) for API, because they are called at build time.

### ISR - incremental static regeneration

Same as SSG but builds the getStaticProps() on the server every chosen interval of time.
Good for a thing that don't update that often. 

Advantage : same as SSG
