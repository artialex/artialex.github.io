---
tags: [fe, wip]
---

# Frontend performance checklist

## Planning and metrics

- Establish a performance culture
- Be 20% faster than your fastest competitor
- Choose the right metrics
	- Time to interactive
	- First input delay
	- Hero rendering times
	- Largest Contentful Paint
	- Total BlockingTime 
	- Cumulative Layout Shift
- Set up "clean" and "customr" profiles for testing
- Share the checklist with your colleagues

## Setting realistic goals

- 100-ms response time, 60 FPS
- LCP < 2.5s, FID < 100ms, CLS < 0.1, TTI < 5s on 3G
- Critical file size budget < 170 kb

## Defining the environment

- Choose and set up your build tools
	- Do we nee yarn?
	- Do we need Webpack? Parcel?
- Use progressive enchancement as a default
	- Does the website work fast on old browser? On poor network?
- Choose a strong performance baseline
	- 
- Evaluate each framework and each dependency
	- Do we need Next.js? Gatsby? Redux? React?
- Optimize the performace of your API
	- Is the API a bottleneck? Do we need GraphQL?
- Will you be using AMP or Instant Articles?
- Choose your CDN wisely

## [[Assets optimizations]]

## [[Build optimizations]]

## Delivery

## Networking and HTTP/2

## Testing and Monitoring

- Monitor mixed-content warnings
- Use testing tools:
	- WebPageTest
	- Lighthouse
	- Perf Diagnostic CSS

---
