![hero](image.png)

## Create v1

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