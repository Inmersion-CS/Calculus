# Contributing to Calculus

Thank you for contributing to an open-source learning project.

## Local setup

Requirements: Node.js 22.13 or newer and npm.

```bash
git clone https://github.com/Inmersion-CS/Calculus.git
cd Calculus
npm ci
npm run dev
```

## Before opening a pull request

Run the complete verification set:

```bash
npm run typecheck
npm run lint
npm run test:run
npm run build
npm run format:check
```

Keep changes focused. New learner-facing behavior should include tests that describe the intended behavior before the implementation is added. Preserve keyboard access, semantic HTML, visible focus states, and reduced-motion support.

Use issues for reproducible bugs and clearly scoped feature proposals. Security reports should follow `SECURITY.md` rather than a public issue.
