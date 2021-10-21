# Next.js

Next.js uses the concept of **pages**. Each page is a **React component**

**Client-side rendering** implies that HTML is generated _inside the browser_

**Pre-rendering** means that HTML is generated _in advance_.

- When page is loaded JavaScript code _hydrates_ the page with necessary data
- Next.js has two forms of page pre-rendering:
  - **Static generation**
    - HTML is _generated once_, at **build** time and reused on each request
    - This is _recommended_, for performance reasons
  - With **Server-side rendering** HTML is _generated on each request_
