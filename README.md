# Create v1

<p align="center">
  <img src="image.png" alt="Create v1 Hero" width="100%"/>
</p>

<p align="center">
  <a href="https://github.com/midday-ai/v1/actions"><img src="https://github.com/midday-ai/v1/workflows/CI/badge.svg" alt="Build Status"></a>
  <a href="https://github.com/midday-ai/v1/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://github.com/midday-ai/v1/releases"><img src="https://img.shields.io/github/v/release/midday-ai/v1.svg" alt="Latest Release"></a>
  <a href="https://github.com/midday-ai/v1/stargazers"><img src="https://img.shields.io/github/stars/midday-ai/v1.svg?style=social" alt="GitHub stars"></a>
</p>

<p align="center">
  <b>The ultimate open-source starter kit for building production-ready SaaS applications</b>
</p>

Create v1 is a comprehensive, opinionated stack based on learnings from building [Midday](https://midday.ai). It provides everything developers need to go from idea to launch quickly and efficiently, whether you're a solo developer or part of a team building scalable SaaS products.

## Table of Contents

- [Features and Benefits](#features-and-benefits)
- [Directory Structure](#directory-structure)
- [Quick Start](#quick-start)
- [What's Included](#whats-included)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [License](#license)

## Features and Benefits

- 🚀 **Production-Ready**: Built with best practices and optimized for performance
- 📦 **Scalable Architecture**: Monorepo setup for easy code sharing and maintenance
- 🛠 **Full-Stack Solution**: Includes frontend, backend, and DevOps tooling
- 🔧 **Modern Tech Stack**: Utilizes the latest and most powerful web technologies
- 💻 **Developer Experience**: Optimized workflow with linting, formatting, and type safety
- 🎨 **Customizable**: Easy to extend and adapt to your specific needs
- 🌐 **Internationalization**: Built-in support for multiple languages
- 📧 **Email Integration**: Ready-to-use email templates and delivery system
- 🔒 **Security First**: Implements best practices for authentication and data protection
- 📊 **Analytics and Monitoring**: Integrated tools for tracking performance and user behavior

## Directory Structure

```
.
├── apps                         # App workspace
│    ├── api                     # Supabase (API, Auth, Storage, Realtime, Edge Functions)
│    ├── app                     # App - your product
│    ├── web                     # Marketing site
│    └── ...
├── packages                     # Shared packages between apps
│    ├── analytics               # OpenPanel analytics
│    ├── email                   # React email library
│    ├── jobs                    # Trigger.dev background jobs
│    ├── kv                      # Upstash rate-limited key-value storage
│    ├── logger                  # Logger library
│    ├── supabase                # Supabase - Queries, Mutations, Clients
│    └── ui                      # Shared UI components (Shadcn)
├── tooling                      # are the shared configuration that are used by the apps and packages
│    └── typescript              # Shared TypeScript configuration
├── .cursorrules                 # Cursor rules specific to this project
├── biome.json                   # Biome configuration
├── turbo.json                   # Turbo configuration
├── LICENSE
└── README.md
```

## Quick Start

Get up and running in minutes:

```bash
bunx degit midday-ai/v1 my-saas-app
cd my-saas-app
bun i
bun dev
```

Visit `http://localhost:3000` to see your app in action.

## What's Included

### Core Framework
- **[Next.js](https://nextjs.org/)**: React framework for production-grade apps.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds static typing for improved developer experience and code quality.

### Styling and UI
- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Shadcn](https://ui.shadcn.com/)**: Customizable UI components built on top of Radix UI.

### Backend and Database
- **[Supabase](https://supabase.com/)**: Open-source Firebase alternative for authentication, database, and storage.
- **[Upstash](https://upstash.com/)**: Serverless Redis for caching and rate limiting.

### DevOps and Tooling
- **[Turborepo](https://turbo.build)**: Monorepo build system for optimal DX and performance.
- **[Biome](https://biomejs.dev)**: Fast linter and formatter for consistent code style.

### Email and Communications
- **[React Email](https://react.email/)**: Customizable email templates.
- **[Resend](https://resend.com/)**: Reliable email delivery service.

### Internationalization
- **[i18n](https://next-international.vercel.app/)**: Easy-to-use internationalization library.

### Monitoring and Analytics
- **[Sentry](https://sentry.io/)**: Error tracking and performance monitoring.
- **[OpenPanel](https://openpanel.dev/)**: Privacy-friendly analytics platform.

### Additional Tools
- **[Dub](https://dub.sh/)**: Custom URL shortener and link management.
- **[Trigger.dev](https://trigger.dev/)**: Powerful workflow automation platform.
- **[Polar](https://polar.sh)**: Integrated billing solution (coming soon).

## Prerequisites

Before you begin, ensure you have the following installed:

- **[Bun](https://bun.sh/)**: Fast all-in-one JavaScript runtime
- **[Docker](https://www.docker.com/)**: Containerization platform for easy deployment
- **[Git](https://git-scm.com/)**: Version control system

You'll also need accounts for the following services:

- [Upstash](https://upstash.com/)
- [Dub](https://dub.sh/)
- [Trigger.dev](https://trigger.dev/)
- [Resend](https://resend.com/)
- [Supabase](https://supabase.com/)
- [Sentry](https://sentry.io/)
- [OpenPanel](https://openpanel.dev/)

## Getting Started

1. Clone the repository:
   ```bash
   bunx degit midday-ai/v1 my-saas-app
   cd my-saas-app
   ```

2. Install dependencies:
   ```bash
   bun i
   ```

3. Set up environment variables:
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/app/.env.example apps/app/.env
   cp apps/web/.env.example apps/web/.env
   ```
   Update the `.env` files with your service credentials.

4. Start the development server:
   ```bash
   bun dev
   ```

5. Open `http://localhost:3000` in your browser to see the app running.

## How to Use

### Adding a New Page

1. Create a new file in `apps/app/pages/`
2. Use components from `packages/ui` for consistent styling
3. Update navigation in `apps/app/components/Layout.tsx` if necessary

### Customizing the Theme

1. Modify `apps/app/tailwind.config.js`
2. Update global styles in `apps/app/styles/globals.css`

### Adding a New API Endpoint

1. Create a new file in `apps/api/functions/`
2. Use the Supabase client from `packages/supabase` for database operations
3. Test your endpoint using the included Postman collection

### Implementing Internationalization

1. Add new translations in `apps/app/locales/`
2. Use the `useTranslation` hook in your components

### Setting Up Email Templates

1. Create new email templates in `packages/email/templates/`
2. Use the `sendEmail` function from `packages/email` to send emails

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmidday-ai%2Fv1&env=RESEND_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN,SENTRY_AUTH_TOKEN,NEXT_PUBLIC_SENTRY_DSN,SENTRY_ORG,SENTRY_PROJECT,DUB_API_KEY,NEXT_PUBLIC_OPENPANEL_CLIENT_ID,OPENPANEL_SECRET_KEY&project-name=create-v1&repository-name=create-v1&redirect-url=https%3A%2F%2Fv1.run&demo-title=Create%20v1&demo-description=An%20open-source%20starter%20kit%20based%20on%20Midday.&demo-url=https%3A%2F%2Fv1.run&demo-image=https%3A%2F%2Fv1.run%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)

## Recognition

<a href="https://news.ycombinator.com/item?id=41408929">
  <img
    style="width: 250px; height: 54px;" width="250" height="54"
    alt="Featured on Hacker News"
    src="https://hackernews-badge.vercel.app/api?id=41408929"
  />
</a>

## License

Create v1 is open-source software licensed under the [MIT license](https://github.com/midday-ai/v1/blob/main/LICENSE).

---

<p align="center">
  Built with ❤️ by the <a href="https://midday.ai">Midday</a> team and contributors.
</p>