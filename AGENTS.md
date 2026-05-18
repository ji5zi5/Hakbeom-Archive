# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite + React visual novel prototype. Main application entry points are `src/main.jsx` and `src/App.jsx`. The core VN engine and UI live in `src/components/BAVisualNovel.jsx`; scenario data and route text live in `src/data/scenario.js`; global styling and SVG/CSS animation rules live in `src/styles.css`. Static assets are served from `public/assets/`: characters in `public/assets/character/`, UI/background assets in `public/assets/ui/`, fonts in `public/assets/fonts/`, and sound placeholders in `public/assets/se/`. Contract tests are in `tests/ui-contract.test.mjs`. Screenshot helpers are in `scripts/`.

## Build, Test, and Development Commands

- `npm install` — install dependencies from `package-lock.json`.
- `npm run dev` — start the Vite dev server on `0.0.0.0`.
- `npm test` — run the repository UI contract test script.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — serve the built app locally for smoke testing.
- `npm audit --audit-level=moderate` — check dependency vulnerabilities before handoff.

## Coding Style & Naming Conventions

Use modern ES modules, React function components, and hooks. Keep JSX readable with two-space indentation. Component and helper names use `PascalCase` for components (`BAVisualNovel`, `ChoiceScene`) and `camelCase` for functions (`wrapDialogueText`, `resolveNextIndex`). Keep scenario IDs kebab-case (`choice-reply-tone`) and asset paths rooted under `/assets/...`. Prefer small helper functions over large inline logic inside render blocks.

## Testing Guidelines

Tests use Node’s built-in `assert` module in `tests/ui-contract.test.mjs`. Add contract assertions when changing UI structure, scene flow, routing, save/load behavior, or scenario requirements. Run `npm test` after every behavior change, then run `npm run build` for compile verification. When visual layout changes, capture screenshots with `scripts/capture-page.mjs` or a focused Playwright script.

## Commit & Pull Request Guidelines

Use concise, intent-focused commit messages such as `Stabilize VN dialogue layout` or `Enforce explicit VN graph semantics before expansion`. Include verification notes in the body, for example `Tested: npm test && npm run build`. Pull requests should describe user-visible changes, list tests run, mention asset additions, and include screenshots for UI or visual-novel presentation changes.


## Developer Documentation

Before changing code, read `docs/development-guide.md`. Before changing scenario content, also read `docs/scenario-authoring.md`. Keep these docs updated when engine, save, scenario, UI, or validation contracts change.

## Security & Configuration Tips

Do not commit secrets, generated local caches, or bulky experimental assets. Keep public game assets under `public/assets/` and verify new dependencies with `npm audit --audit-level=moderate`.
