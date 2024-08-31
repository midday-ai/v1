![hero](image.png?v=1)


<p align="center">
	<h1 align="center"><b>Create v1</b></h1>
<p align="center">
    An open-source starter kit based on <a href="https://midday.ai">Midday</a>.
    <br />
    <br />
    <a href="https://v1.run">Website</a>
    ·
    <a href="https://github.com/midday-ai/v1/issues">Issues</a>
  </p>
</p>

Everything you need to build a production ready SaaS, it's a opinionated stack based on learnings from building [Midday](https://midday.ai?utm_source=v1) using the latest Next.js framework, it's a monorepo with a focus on code reuse and best practices that will grow with your business.

## What's included

**Next.js** - Framework<br>
**Turborepo** - Build system<br>
**Biome** - Linter, formatter<br>
**TailwindCSS** - Styling<br>
**Shadcn** - UI components<br>
**TypeScript** - Type safety<br>
**Supabase** - Authentication, database, storage<br>
**Upstash** - Cache and rate limiting<br>
**React Email** - Email templates<br>
**Resend** - Email delivery<br>
**i18n** - Internationalization<br>
**Sentry** - Error handling/monitoring<br>
**Dub** - Sharable links<br>
**Trigger.dev** - Background jobs<br>
**OpenPanel** - Analytics<br>
**react-safe-action** - Validated Server Actions<br>
**nuqs** - Type-safe search params state manager<br>
**next-themes** - Theme manager<br>

## Prerequisites

Bun<br>
Docker<br>
Upstash<br>
Dub<br>
Trigger.dev<br>
Resend<br>
Supabase<br>
Sentry<br>
OpenPanel<br>

## Getting Started

First, run the development server:

```ts
bun dev // starts everything in development mode (web, app, api, email)
bun dev:web // starts the web app in development mode
bun dev:app // starts the app in development mode
bun dev:api // starts the api in development mode
bun dev:email // starts the email app in development mode
```

## How to use
This boilerplate is inspired by our work on [Midday](https://git.new/midday), and it's designed to serve as a reference for real-world apps. Feel free to dive into the code and see how we've tackled various features. Whether you're looking to understand authentication flows, database interactions, or UI components, you'll find practical, battle-tested implementations throughout the codebase. It's not just a starting point; it's a learning resource that can help you build your own applications.

With this, you have a great starting point for your own project.

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmidday-ai%2Fv1&env=RESEND_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN,SENTRY_AUTH_TOKEN,NEXT_PUBLIC_SENTRY_DSN,SENTRY_ORG,SENTRY_PROJECT,DUB_API_KEY,NEXT_PUBLIC_OPENPANEL_CLIENT_ID,OPENPANEL_SECRET_KEY&project-name=create-v1&repository-name=create-v1&redirect-url=https%3A%2F%2Fv1.run&demo-title=Create%20v1&demo-description=An%20open-source%20starter%20kit%20based%20on%20Midday.&demo-url=https%3A%2F%2Fv1.run&demo-image=https%3A%2F%2Fv1.run%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)