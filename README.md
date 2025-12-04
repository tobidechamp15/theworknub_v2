# 🚀 Workspace – Next.js Platform (Sanity CMS)

This repository contains the active development codebase for a production-grade platform built with **Next.js 14**, **Sanity CMS**, and **TypeScript**. The architecture supports modular expansion, content-driven workflows, and strict code quality standards.

---

## 🧱 Tech Architecture

| Layer         | Technology                                                              |
| ------------- | ----------------------------------------------------------------------- |
| Framework     | Next.js 14 (App Router, Server Actions)                                 |
| Language      | TypeScript                                                              |
| UI Layer      | React + Tailwind CSS                                                    |
| CMS           | Sanity.io (Content Lake + Studio)                                       |
| Components    | Shadcn/UI (configured via `components.json`)                            |
| State / Logic | Custom hooks + Server-first logic                                       |
| File Storage  | `/public/images` for static assets                                      |
| Deployment    | (Currently configured for **cPanel**. Will migrate to **Vercel** soon.) |
| Dev Tools     | ESLint, Prettier, Git                                                   |

> No marketing fluff — real stack only.

---

## 🛠 Local Development

```bash
git clone <REPO_URL>
cd <project-folder>

npm install
npm run dev
```
