This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






# 🤝 Developer Collaboration Guide

This project is developed by multiple contributors. This guide ensures smooth collaboration, minimal conflicts, and clean Git practices.

---

## 🔧 Git Setup & Common Commands

### ✅ Initial Setup

```bash
git clone <repository_url>
git remote -v
```

### 🚧 Working on a Feature

```bash
git checkout -b feature/my-task     # Create & switch to a new branch
# Make your changes
git add .                           # Stage changes
git commit -m "feat: add new feature"
git push origin feature/my-task     # Push your branch
```

### 🔄 Pulling the Latest Changes

```bash
git checkout main
git pull origin main
```

### 🔀 Merging Changes

```bash
git checkout main
git pull origin main
git merge feature/my-task
git push origin main
```

### ⚠️ Resolving Merge Conflicts

```bash
# Open conflicted files, fix manually
git add <resolved_file>
git commit -m "fix: resolve merge conflict"
```

---

## 📆 Branching Strategy

| Branch       | Purpose               |
|--------------|------------------------|
| `main`       | Production-ready code  |
| `feature/*`  | New features           |
| `bugfix/*`   | Bug fixes              |
| `hotfix/*`   | Urgent production fix  |

---

## 🧼 Git Best Practices

- ✅ **One branch per task**
- 🔁 **Pull main often**
- 💬 **Use meaningful commit messages**
- 👀 **Use Pull Requests + Code Review**
- 📌 **Keep PRs small and focused**
- ✍️ **Use Conventional Commits:**
  - `feat:` new feature
  - `fix:` bug fix
  - `chore:` config or build task
  - `docs:` changes to docs
  - `refactor:` code refactoring
  - `style:` code formatting (no logic changes)

---

## 📄 How to Work Together

### 🧠 Communication

- Daily sync (chat or video)
- Use GitHub Issues or Projects to track tasks
- Leave comments on PRs and commits

### 📬 Pull Request Checklist

- [ ] Clear description of what was done
- [ ] How to test your changes
- [ ] Tag your teammate for review
- [ ] Link related issues

### 🧪 Testing Instructions

If your feature requires testing:
- Include **steps to test**
- Mention **expected behavior**
- Add **screenshots** if visual changes were made

---

## 🧠 Development Setup

```bash
git clone https://github.com/user/repo.git
cd repo
npm install
npm run dev
```

---

## 🔧 Tooling & Conventions

- Code Style: [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/)
- EditorConfig