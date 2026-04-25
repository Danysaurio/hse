# Repository Guidelines

## Project Structure & Module Organization
This repository is a `Next.js 16` app using the App Router. Route files live under `src/app` (`page.tsx`, `layout.tsx`, and per-route folders like `src/app/contacto`). Reusable UI is organized by component in `src/components`, with section-level blocks in `src/components/sections`. Static content and copy live in `src/data`. Public images and brand assets live in `public/`, including `public/Credenciales/`.

## Build, Test, and Development Commands
- `npm run dev`: start the local development server.
- `npm run build`: create a production build and catch type/build regressions.
- `npm run start`: serve the production build locally.
- `npm run lint`: run ESLint with the Next.js core-web-vitals and TypeScript rules.

Run commands from the repository root.

## Coding Style & Naming Conventions
Use TypeScript and 2-space indentation consistent with the existing codebase. Export React components in `PascalCase`, keep route folders lowercase, and colocate styles as `ComponentName.module.css` next to the component. Prefer descriptive data constants in `src/data` and keep copy changes separate from layout refactors when possible.

Linting is configured in `eslint.config.mjs` via `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. Resolve lint warnings before opening a PR.

## Testing Guidelines
There is no automated test suite in the repository yet. Until one is added, treat `npm run lint` and `npm run build` as the minimum validation for every change. When adding tests, place them near the feature or in a dedicated `src/tests` area, and use `*.test.ts` or `*.test.tsx` naming.

## Commit & Pull Request Guidelines
Current history uses short, imperative commit messages such as `Initial commit from Create Next App` and `Add HSE Solutions website design system, components, pages and assets`. Follow that pattern: start with a verb and summarize the user-visible change.

PRs should include a brief description, affected routes/components, validation steps run, and screenshots for UI changes. Link any related issue or task when applicable.

## Agent-Specific Notes
This project uses a newer `Next.js` release with breaking changes. Before changing framework APIs, read the relevant guide in `node_modules/next/dist/docs/` instead of relying on older conventions or memory.
