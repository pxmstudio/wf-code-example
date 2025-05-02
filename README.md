# Example Workflow Setup

A Turborepo monorepo with Vite frontend and Cloudflare Workers API for custom Webflow development.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps

- `web`: A [Vite](https://vitejs.dev/) TypeScript app that gets injected into Webflow
- `api`: A [Cloudflare Workers](https://workers.cloudflare.com/) API using [Hono](https://hono.dev/)

### Packages

- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Webflow Integration

This setup allows you to write custom code for Webflow projects. The Vite app builds custom JavaScript that gets injected into your Webflow site.

### Required Webflow Setup

Add the following script to your Webflow project settings before the closing `</body>` tag:

```html
<script>
  (function () {
    const LOCALHOST_URL = [
      'http://localhost:5173/@vite/client',
      'http://localhost:5173/src/main.ts',
    ]
    const PROD_URL = ['https://video-wf-structure.pages.dev/main.js'] // replace this with your production url

    function createScripts(arr, isDevMode) {
      return arr.map(function (url) {
        const s = document.createElement('script')
        s.src = url

        if (isDevMode) {
          s.type = 'module'
        }

        return s
      })
    }

    function insertScript(scriptArr) {
      scriptArr.forEach(function (script) {
        document.body.appendChild(script)
      })
    }

    const localhostScripts = createScripts(LOCALHOST_URL, true)
    const prodScripts = createScripts(PROD_URL, false)

    let choosedScripts = null

    fetch(LOCALHOST_URL[0], {})
      .then(() => {
        choosedScripts = localhostScripts
      })
      .catch((e) => {
        choosedScripts = prodScripts
        console.error(e)
      })
      .finally(() => {
        if (choosedScripts) {
          insertScript(choosedScripts)

          return
        }

        console.error('something went wrong, no scripts loaded')
      })
  })()
</script>
```

This script dynamically loads either your local development code (when you're running `pnpm dev`) or the production code from Cloudflare Pages. It attempts to load from localhost first, and if that fails, it falls back to the production URL.

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Turborepo](https://turborepo.com) for monorepo management and caching

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) >= 9.0.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd example-wf-setup

# Install dependencies
pnpm install
```

## Development

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

This will start the development servers for both the Vite frontend and the Cloudflare Workers API. Your Webflow site will load the code from localhost when you visit it.

## Building

To build all apps and packages, run:

```bash
pnpm build
```

After building, deploy your code to Cloudflare Pages or another hosting service. Make sure to update the `PROD_URL` in the Webflow script to point to your deployment URL.

## Type Checking

To run type checking across all packages:

```bash
pnpm check-types
```

## Linting

To run linting across all packages:

```bash
pnpm lint
```

## Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines.

By default, Turborepo will cache locally. To enable Remote Caching:

```bash
npx turbo login
npx turbo link
```

## Useful Links

Learn more about the technologies used in this project:

- [Turborepo Documentation](https://turborepo.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Hono Documentation](https://hono.dev/)
- [Webflow Developer Documentation](https://developers.webflow.com/)
