# Research

## Our requirements

- we need SSR / SEO optimizations
- We can full reload pages, no need in SPA 

## [[GraphQL]]

- [Apollo](https://www.apollographql.com/docs/)
	- GQL only, Normalized caching
- [urql](https://formidable.com/open-source/urql/docs/)
	- GQL only, Normalized caching
	- https://github.com/FormidableLabs/urql/issues/1454
- [relay](https://relay.dev/docs/)
- ? [graphql-mesh](https://www.graphql-mesh.com/docs/introduction)
- ? [quellql](http://www.quellql.io/)
- [@ CSS Tricks](https://css-tricks.com/tag/graphql)
- [@ Smashing Magazine](https://www.smashingmagazine.com/category/graphql)

## Queries

- [react-query](https://react-query.tanstack.com/overview)
	- GQL/REST/Promise, No normalized caching
- [SWR](https://swr.vercel.app/docs/getting-started)
	- GQL/REST/Promise, No normalized caching
- [rtk-query](https://redux-toolkit.js.org/rtk-query/overview)


## Next.js

- [Next.js docs](https://nextjs.org/docs/getting-started)
- [Next.js blog](https://nextjs.org/blog)
- [@ CSS Tricks](https://css-tricks.com/tag/next-js/)
- [@ Smashing Magazine](https://www.smashingmagazine.com/category/next.js)

## SSR

- TODO

## Blogs without tags

- https://wundergraph.com/blog


## Caching

Terms

*(HTTP) Cache* is used to cache requests and responses

*Shared caches* can exist between server and client (Proxy, CDN). Personalized content should not be cached in them

*Private cache* exists inside the client. Also called a *local cache* or *browser cache*

*Invalidation* means checking if the content *stale* or not. On the web the term *revalidation* is most used. Usually it's done with a network request

### Browser headers
and different *caching policies*

- Cache-Control
	- `no-store`: means "don't store any files at all"
	- `no-cache`: **doesn't mean** "don't cache", it means revalidate before using cached resource
	- `must-revalidate`: **doesn't mean** "always revalidate", it means "use cached resource if `max-age` is not expired, otherwise revalidate"
	- `public`: can be cached by browsers and proxies
	- `private`: can be cached only by the browser, i.e user related data
	- `max-age`: Amount of time a resource is considered fresh
	- `no-transform`: disables transformation of the resource (e.g., compression)
	- `immutable`: ???, cache-busting
	- `stale-while-revalidate`: literally means "use the stale resource while revalidating"
	- `stale-if-error`: literally means "use the stale resource if request returned error"
- ETag
	- Means "Entity Tag". Used to identify a resource. Every time the resource is changed, a new ETag is generated
- Expires
	- Date-time before which a resource is considered fresh
- Last-Modified
	- Provides date-time information about last modification of the resource
- Pragma
	- outdated

#### Examples

`Cache-Control: no-cache`: Mutable resource with always server-revalidated. Cached resource is present but browser does not believe it and always validates with server to check if it is fresh. Always involves a network call

`Cache-Control: must-revalidate, max-age=600`: Mutable resources with max-age


- https://codeburst.io/demystifying-http-caching-7457c1e4eded


### Normalized caching

Pros (?) of Normalized Caching

- Less requests
	- But any new added field will require a refetch

Cons of normalized caching

- NC is complex to build and maintain
	- Keeping the cache correct logic can become hairy
	- Need to implement custom cache eviction rules
- NC is running in Javascript VM, and less efficient than the browser cache

We have full reload now, why do we need normalized caching