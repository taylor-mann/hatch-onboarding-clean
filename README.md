# Klue Compete Agent (Prototype)

This repository contains a **Next.js 14** prototype for an AI-first competitive agent with a SQLite + Prisma backend.

## Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Configure environment variables**

Create a file called `.env.local` at the project root and add:

```bash
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY="YOUR_OPENAI_KEY"
```

3. **Generate the Prisma client & migrate**

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

4. **Run the development server**

```bash
npm run dev
```

Visit `http://localhost:3000` to see the app.

---

### Major Folders

- `app/` – React Server & Client components, API routes
- `components/` – Reusable UI components
- `prisma/` – Database schema & seed script

### Core Features Implemented

- Account creation screen (`/signup`)
- Insights feed with live search
- Persistent chat drawer powered by OpenAI
- SQLite database with sample seed data & Prisma ORM

> This is an early scaffold meant for local prototyping; styles and data models can be iterated as product requirements evolve. 