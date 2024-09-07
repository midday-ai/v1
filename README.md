![hero](image.png)

<p align="center">
	<h1 align="center"><b>Create v1</b></h1>
<p align="center">
    <a href="https://midday.ai">Midday</a> を基にしたオープンソースのスターターキット。
    <br />
    <br />
    <a href="https://v1.run"><strong>ウェブサイト</strong></a> · 
    <a href="https://github.com/midday-ai/v1/issues"><strong>イシュー</strong></a> · 
    <a href="#whats-included"><strong>含まれるもの</strong></a> ·
    <a href="#prerequisites"><strong>必要な環境</strong></a> ·
    <a href="#getting-started"><strong>はじめに</strong></a> ·
    <a href="#how-to-use"><strong>使い方</strong></a>
  </p>
</p>

Middayを構築する際の学びを活かし、最新のNext.jsフレームワークを用いた意見を反映したスタックで、ビジネスと共に成長するコード再利用とベストプラクティスに重点を置いたモノレポです。

## 含まれている内容

[Next.js](https://nextjs.org/) - フレームワーク<br>
[Turborepo](https://turbo.build) - ビルドシステム<br>
[Biome](https://biomejs.dev) - リンター、フォーマッター<br>
[TailwindCSS](https://tailwindcss.com/) - スタイリング<br>
[Shadcn](https://ui.shadcn.com/) - UIコンポーネント<br>
[TypeScript](https://www.typescriptlang.org/) - 型安全<br>
[Supabase](https://supabase.com/) - 認証、データベース、ストレージ<br>
[Upstash](https://upstash.com/) - キャッシュとレート制限<br>
[React Email](https://react.email/) - メールテンプレート<br>
[Resend](https://resend.com/) - メール配信<br>
[i18n](https://next-international.vercel.app/) - 国際化<br>
[Sentry](https://sentry.io/) - エラーハンドリング/モニタリング<br>
[Dub](https://dub.sh/) - 共有リンク<br>
[Trigger.dev](https://trigger.dev/) - バックグラウンドジョブ<br>
[OpenPanel](https://openpanel.dev/) - アナリティクス<br>
[Polar](https://polar.sh) - 課金（近日公開）<br>
[react-safe-action](https://next-safe-action.dev) - 検証済みサーバーアクション<br>
[nuqs](https://nuqs.47ng.com/) - 型安全な検索パラメータの状態管理<br>
[next-themes](https://next-themes-example.vercel.app/) - テーマ管理<br>

## ディレクトリ構成

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

## 必要な環境

Bun<br>
Docker<br>
Upstash<br>
Dub<br>
Trigger.dev<br>
Resend<br>
Supabase<br>
Sentry<br>
OpenPanel<br>

## はじめに

次のコマンドでリポジトリをローカルにクローン

```bash
bunx degit midday-ai/v1 v1
```

1. Bunを使って依存関係をインストール:

```sh
bun i
```

2. `.env.example` を `.env` にコピーし、環境変数を更新

```sh
# Copy .env.example to .env for each app
cp apps/api/.env.example apps/api/.env
cp apps/app/.env.example apps/app/.env
cp apps/web/.env.example apps/web/.env
```

4. Bun または Turbo から開発サーバーを開始:

```ts
bun dev // starts everything in development mode (web, app, api, email)
bun dev:web // starts the web app in development mode
bun dev:app // starts the app in development mode
bun dev:api // starts the api in development mode
bun dev:email // starts the email app in development mode

// Database
bun migrate // run migrations
bun seed // run seed
```

## 使い方

このボイラープレートは、Middayの開発経験を元に作られており、実際のアプリを作る際に参考にできるように設計されています。例えば、ユーザー認証の流れやデータベースとの連携、UIコンポーネントの使い方など、さまざまな機能を理解するための具体的なコードが含まれています。このコードベースには、現場で使える実践的で信頼性の高い実装が詰まっており、これを利用することで、自分のアプリケーションを効率よく構築するための学びのリソースとして活用できます。これは単なるスタート地点ではなく、プロジェクトを進める上で大いに役立つ内容になっています。

独自のプロジェクトのスタート地点となれば幸いです。

## Vercelへのデプロイ

Vercelのデプロイでは、Supabaseのアカウントとプロジェクトを作成する手順が記されている。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmidday-ai%2Fv1&env=RESEND_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN,SENTRY_AUTH_TOKEN,NEXT_PUBLIC_SENTRY_DSN,SENTRY_ORG,SENTRY_PROJECT,DUB_API_KEY,NEXT_PUBLIC_OPENPANEL_CLIENT_ID,OPENPANEL_SECRET_KEY&project-name=create-v1&repository-name=create-v1&redirect-url=https%3A%2F%2Fv1.run&demo-title=Create%20v1&demo-description=An%20open-source%20starter%20kit%20based%20on%20Midday.&demo-url=https%3A%2F%2Fv1.run&demo-image=https%3A%2F%2Fv1.run%2Fopengraph-image.png&integration-ids=oac_VqOgBHqhEoFTPzGkPd7L0iH6)

## Recognition

<a href="https://news.ycombinator.com/item?id=41408929">
  <img
    style="width: 250px; height: 54px;" width="250" height="54"
    alt="Featured on Hacker News"
    src="https://hackernews-badge.vercel.app/api?id=41408929"
  />
</a>
