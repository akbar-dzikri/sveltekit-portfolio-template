---
title: Getting Started with SvelteKit
description: Learn how to build modern web applications with SvelteKit.
date: 2024-01-15
thumbnail: https://placehold.co/800x400/png
featured: true
---

# Getting Started with SvelteKit

SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing.

## Why SvelteKit?

SvelteKit is built on Svelte, a UI framework that compiles your components to highly optimized vanilla JavaScript. Here are some key features:

- **Zero-config TypeScript support**
- **Server-side rendering (SSR)**
- **Static site generation (SSG)**
- **API routes**
- **File-based routing**
- **Hot module replacement (HMR)**

## Setting Up Your First Project

To create a new SvelteKit project, run:

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

## Project Structure

A typical SvelteKit project looks like this:

```
my-app/
├── src/
│   ├── lib/
│   ├── routes/
│   ├── app.html
│   └── app.css
├── static/
├── tests/
├── package.json
└── svelte.config.js
```

## Building Your First Page

Create a new file at `src/routes/+page.svelte`:

```svelte
<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<h1>Welcome to SvelteKit!</h1>
<button on:click={increment}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<style>
  h1 {
    color: #ff3e00;
  }
</style>
```

## Next Steps

Now that you have a basic understanding of SvelteKit, you can:

1. Learn more about [routing](https://kit.svelte.dev/docs/routing)
2. Explore [server-side rendering](https://kit.svelte.dev/docs/ssr)
3. Add [static assets](https://kit.svelte.dev/docs/assets)
4. Set up [API endpoints](https://kit.svelte.dev/docs/routing#server)

Happy coding!
