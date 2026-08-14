# Calculus

Open-source interactive web software for learning and exploring calculus.

> **Status:** Foundation v0.1 — the production-quality web foundation is under active development. Subject-specific calculus engines are roadmap items, not implemented features yet.

**Live site:** https://inmersion-cs.github.io/Calculus/

## Why this project exists

Calculus is often learned as a sequence of procedures detached from the ideas those procedures describe. This project aims to connect symbolic work with visual reasoning, conceptual explanation, deliberate practice, and later an open mathematical laboratory.

## Learning scope

The planned learning path includes functions and limits, derivatives, integrals, and interactive mathematical exploration. Scope will grow through separate subject-specific design cycles rather than being represented as complete before the software exists.

## Current features

Foundation v0.1 currently provides:

- a React + TypeScript application shell;
- subject-specific Home, Roadmap, Contribute, and not-found experiences;
- responsive and keyboard-accessible navigation;
- strict TypeScript, linting, automated tests, and production build checks;
- GitHub Pages deployment automation;
- open-source contribution, conduct, security, issue, and pull-request guidance.

## Roadmap

1. Functions and limits
2. Derivatives
3. Integrals
4. Interactive mathematical laboratory

Each feature area receives its own design and test-first implementation cycle.

## Technology

- React
- TypeScript
- Vite
- React Router
- Vitest
- React Testing Library
- ESLint
- Prettier
- GitHub Actions and GitHub Pages

## Local development

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

## Scripts

```text
npm run dev          Start the Vite development server
npm run build        Typecheck and create the production build
npm run preview      Preview the production build
npm run typecheck    Run strict TypeScript checks
npm run lint         Run ESLint with zero warnings allowed
npm run test         Run Vitest in watch mode
npm run test:run     Run the test suite once
npm run format       Format supported files
npm run format:check Verify formatting without changing files
```

## Testing and quality

Every push and pull request runs typecheck, lint, tests, and production build. Shell tests assert subject identity, primary navigation, purpose, and the intentional not-found experience.

## Project structure

```text
.github/             CI, Pages, Dependabot, and contribution templates
public/              Static project-owned assets
src/app/             Application shell, routing, and site identity
src/styles/          Global responsive/accessibility foundation
src/test/            Test setup
docs/superpowers/    Approved design and implementation plan
```

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). Keep learner-facing changes focused, tested, accessible, and accurate about what is implemented.

## Accessibility

Accessibility is a default engineering constraint. The foundation uses semantic landmarks, keyboard-operable navigation, visible focus states, responsive touch targets, and reduced-motion handling. Automated tests supplement rather than replace manual keyboard and contrast review.

## License

Licensed under the MIT License. See [`LICENSE`](LICENSE).
