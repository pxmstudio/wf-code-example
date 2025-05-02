# Example Workflow Setup

This is a monorepo setup using Turborepo for managing multiple applications and shared packages.

## Project Structure

This monorepo includes the following packages and applications:

### Applications
- `apps/web`: A Next.js web application
- `apps/api`: A backend API service

### Shared Packages
- `packages/eslint-config`: Shared ESLint configurations
- `packages/typescript-config`: Shared TypeScript configurations

## Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

## Getting Started

1. Install dependencies:
```sh
pnpm install
```

2. Start development:
```sh
pnpm dev
```

## Available Scripts

- `pnpm build`: Build all packages and applications
- `pnpm dev`: Start development servers for all applications
- `pnpm lint`: Run linting across all packages and applications
- `pnpm format`: Format code using Prettier
- `pnpm check-types`: Run type checking across all packages and applications

## Development

The project uses:
- [Turborepo](https://turborepo.org/) for monorepo management
- [TypeScript](https://www.typescriptlang.org/) for type safety
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Remote Caching

This project is configured to use Turborepo's remote caching feature. To enable it:

1. Create a Vercel account if you don't have one
2. Authenticate with Turborepo:
```sh
npx turbo login
```
3. Link your repository to remote caching:
```sh
npx turbo link
```

## Learn More

- [Turborepo Documentation](https://turborepo.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
