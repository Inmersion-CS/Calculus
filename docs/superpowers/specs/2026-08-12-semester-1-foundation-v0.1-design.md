# Semester 1 Foundation v0.1 — Design

Date: 2026-08-12
Status: Approved in conversation; written spec pending final user review
Scope: Inmersion-CS Semester 1 repositories

## 1. Purpose

Build a consistent, production-quality open-source foundation across all eight Semester 1 repositories before subject-specific learning features are developed.

The foundation must make every repository immediately understandable, runnable, testable, deployable, and presentable as a public GitHub Pages site. The repositories share engineering standards, but they do not share a cloned product identity or a single UI template that would make the learning products feel interchangeable.

Repositories in scope:

- `Inmersion-CS/Calculus`
- `Inmersion-CS/Java`
- `Inmersion-CS/Architecture`
- `Inmersion-CS/InfoSystems`
- `Inmersion-CS/Management`
- `Inmersion-CS/Japan`
- `Inmersion-CS/English`
- `Inmersion-CS/Safety`

## 2. Goals

For each repository, Foundation v0.1 must provide:

1. A working public web application.
2. Automatic deployment to GitHub Pages from `main`.
3. A clear subject-specific landing page rather than a blank scaffold.
4. A high-quality README that explains the purpose, scope, development workflow, roadmap, accessibility intent, and open-source contribution path.
5. Type-safe frontend development with a small, understandable architecture.
6. Automated checks for type safety, linting, tests, and production build correctness.
7. Open-source governance files appropriate for a public educational project.
8. A structure that can later support subject-specific interaction models without forcing all eight products into one shared UI system.

## 3. Non-goals

Foundation v0.1 will not implement the substantive course applications yet.

Specifically excluded from this phase:

- calculus graphing, limits, derivatives, or integral engines;
- browser Java execution or code judging;
- CPU, memory, or instruction-cycle simulation;
- information-systems modeling tools;
- management simulations;
- Japan timelines or map exploration;
- English lesson engines;
- safety scenario engines;
- accounts, authentication, cloud databases, analytics, AI tutoring, payments, or backend services;
- a shared npm package or monorepo that couples all eight repositories.

These belong to later subject-specific design cycles.

## 4. Engineering approach

Each repository remains an independent application and release unit.

The common stack is:

- React
- TypeScript
- Vite
- npm
- React Router
- Vitest
- React Testing Library
- ESLint
- Prettier
- GitHub Actions
- GitHub Pages

TypeScript will use strict mode. The dependency set should remain deliberately small.

The shared standard is architectural and operational rather than a shared runtime dependency. This avoids one repository breaking the others and allows each subject to evolve toward a distinct interaction model.

## 5. Repository structure

Each repository will begin with the following conceptual structure:

```text
.github/
  ISSUE_TEMPLATE/
  workflows/
docs/
public/
src/
  app/
  components/
  pages/
  styles/
  test/
CONTRIBUTING.md
CODE_OF_CONDUCT.md
SECURITY.md
LICENSE
README.md
index.html
package.json
tsconfig.json
vite.config.ts
```

Subject-specific directories will be added only when that subject enters its own feature-development phase.

## 6. Application shell

Every site receives a small but real application shell containing:

- semantic header/navigation;
- subject title and concise product purpose;
- a visible Foundation v0.1 status indicator;
- a short "What this project will become" section specific to the subject;
- a roadmap preview;
- links to the repository and contribution documentation;
- a proper not-found route;
- responsive layout for phone, tablet, and desktop;
- keyboard-accessible navigation and visible focus states.

The shell is intentionally limited. It exists to prove the deployment and application architecture, not to substitute for the later subject-specific product design.

## 7. Subject identity

The eight products must not become recolored clones.

Foundation v0.1 may share implementation conventions such as spacing tokens, accessibility helpers, and page-shell organization, but each repository will have its own copy, page hierarchy, metadata, and subject framing.

The initial subject framing is:

- Calculus — interactive calculus learning and mathematical exploration.
- Java — programming foundations through active coding practice.
- Architecture — exploration of computer organization, data representation, CPU, and memory concepts.
- InfoSystems — learning how information systems are described, modeled, and reasoned about.
- Management — learning management concepts through structured decision and planning contexts.
- Japan — exploration of the history and culture of Japan.
- English — English for academic and computing communication.
- Safety — occupational health, safety, and ergonomics learning.

No repository will claim features that do not yet exist. Planned capabilities will be clearly labeled as roadmap items.

## 8. Routing and GitHub Pages

Each repository is deployed as a project site under the `Inmersion-CS` organization, with a path matching the repository name.

Expected URL pattern:

```text
https://inmersion-cs.github.io/<RepositoryName>/
```

Vite must be configured with the repository-specific base path so static assets resolve correctly under GitHub Pages project URLs.

Client-side navigation must work after deployment. The initial foundation should avoid unnecessary route complexity; the shell can use a small set of routes such as Home, Roadmap, and About/Contribute where useful.

If GitHub Pages requires one-time repository-side enablement for GitHub Actions deployment, that setting is an operational prerequisite rather than application logic. The implementation must report any repository where this enablement is still required instead of claiming successful deployment.

## 9. CI workflow

Every pull request and push to `main` runs a verification workflow with the following logical sequence:

```text
typecheck -> lint -> test -> build
```

A failure in any required check fails the workflow.

The production deployment workflow runs only from `main` after the build succeeds. It publishes the generated static site to GitHub Pages using the official GitHub Pages Actions flow.

The workflow files should be easy to read and should not contain duplicated unnecessary steps.

## 10. Testing strategy

Foundation tests focus on the application shell rather than artificial coverage targets.

Minimum tests per repository:

- application renders the correct subject identity;
- primary navigation is present and usable;
- the landing page exposes the intended project purpose;
- the not-found route behaves correctly;
- critical accessibility-friendly semantics used by the shell remain present.

Later subject-specific mathematical, programming, simulation, or learning logic will receive dedicated unit tests during its own implementation cycle.

## 11. Error handling

At Foundation v0.1 there are no remote data dependencies, so runtime failure modes should be small.

The app should:

- provide a deliberate not-found experience;
- avoid uncaught errors caused by absent optional content;
- fail CI if build-time configuration is invalid;
- avoid presenting non-functional buttons or links as completed features.

Roadmap-only actions should be visibly labeled rather than pretending to be active functionality.

## 12. README standard

Every README is written for both learners and contributors and is subject-specific.

Required sections:

1. Project title and concise one-sentence purpose.
2. Project status.
3. Live site link once deployment is verified.
4. Why the project exists.
5. Learning scope.
6. Current features.
7. Roadmap.
8. Technology stack.
9. Local development.
10. Available npm scripts.
11. Testing and quality checks.
12. Project structure.
13. Contributing.
14. Accessibility.
15. License.

README language must distinguish implemented functionality from planned functionality. Broken badges, fictional metrics, fake screenshots, and unsupported claims are not allowed.

A screenshot section should be added only after a real rendered site exists; it must not use placeholder imagery represented as a finished product.

## 13. Open-source project files

Each repository will include:

- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`
- `SECURITY.md`
- pull request template
- bug report issue template
- feature request issue template
- Dependabot configuration for npm and GitHub Actions

The existing MIT license remains the project license unless explicitly changed in a later decision.

Contribution guidance should be welcoming but concise, with concrete local setup and verification commands.

## 14. Accessibility baseline

Foundation v0.1 must establish accessibility as a default engineering constraint.

Minimum requirements:

- semantic landmarks;
- keyboard operability;
- visible focus indicators;
- reasonable heading hierarchy;
- text alternatives for meaningful future imagery;
- adequate touch target sizing;
- no interaction that relies exclusively on color;
- support for `prefers-reduced-motion` if motion is introduced.

Automated tests do not replace manual accessibility review; later visual review will include keyboard navigation and basic contrast inspection.

## 15. Metadata and presentation

Each site will include subject-specific:

- document title;
- meta description;
- social/share metadata where reasonable for a static site;
- favicon/app icon asset that is clearly project-owned and does not rely on unlicensed third-party branding.

The first icon can be intentionally simple. A full identity system belongs to later product design.

## 16. Development sequence

Foundation implementation will be executed in controlled batches rather than editing all repositories blindly at once.

Sequence:

1. Establish and verify the reference implementation in `Calculus`.
2. Run all local/CI checks and verify the deployed Calculus site.
3. Apply the proven engineering foundation to the remaining seven repositories with repository-specific names, base paths, metadata, copy, and README content.
4. Run CI/build verification for all eight.
5. Verify each GitHub Pages site individually.
6. Fix repository-specific deployment or content issues.
7. Declare Foundation v0.1 complete only when all eight meet the acceptance criteria.

The reference implementation is a process reference, not a visual template that later products must copy.

## 17. Acceptance criteria

Foundation v0.1 is complete only when all eight repositories satisfy every applicable criterion below:

- repository remains public under `Inmersion-CS`;
- default branch remains `main`;
- React + TypeScript + Vite application builds successfully;
- strict TypeScript check passes;
- lint passes;
- tests pass;
- production build passes;
- GitHub Actions verification is present and successful;
- GitHub Pages deployment is present and verified, or an explicit external Pages-enablement prerequisite is identified;
- the live site loads under the correct repository base path;
- no broken primary navigation or asset URLs;
- mobile and desktop layouts are usable;
- keyboard navigation works for the shell;
- README accurately describes implemented and planned functionality;
- open-source contribution and security files are present;
- no subject-specific feature is falsely represented as implemented;
- no unrelated repositories are modified.

## 18. What happens after Foundation v0.1

After all eight foundations are verified, each subject enters its own design cycle before substantive feature coding.

The products will then be developed in parallel at the curriculum level while preserving subject-specific pedagogy and interaction models. Shared engineering lessons may be applied across repositories, but feature design remains independent.
