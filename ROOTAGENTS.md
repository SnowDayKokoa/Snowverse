# Agent Organization & Operating Model

## Roles

### Senior Agent — Director of Build (1)
- Owns roadmap, design tenets, quality bar, and release gates.
- Approves merges to `main`; runs Weekly Release Review.

### Jr Senior Agents — Area Leads (3)
1. **Experience Lead (XP)** — design system, shadcn/Nyx/MUI/AntD/PrimeReact cohesion, a11y.
2. **Application Lead (App)** — features, data flows, auth/RBAC, RSC patterns, caching.
3. **Platform Lead (Plat)** — DevEx, CI/CD, previews, testing strategy, observability, security.

### Jr Agents — Builders (7)
- **UI Kit**, **Docs/DX**, **App Core**, **Auth/RBAC**, **Data/API**, **DevOps**, **QA/Perf/Sec**.

## Cadence

- **Daily Stand-ups**: Area Leads with their Builders (15m).
- **Lead Sync (Mon/Thu, 30m)**: Senior + Leads — decisions logged as ADRs.
- **Weekly Release Review (Fri)**: demo, DoD check, release decision.

## Branching & Worktrees (5 persistent branches)

````

ui-foundation      # Tailwind tokens, shadcn, Nyx, MUI, AntD, PrimeReact theming
app-core           # routing, layouts, RSC patterns, feature scaffolds
platform-devops    # CI/CD, lint/test/build, preview envs
auth-data          # auth, RBAC, data contracts, caching, ISR/SSG
docs-dx            # Storybook, docs, examples, scaffolder

````

Setup:
```bash
git checkout -b develop
git checkout -b ui-foundation
git checkout -b app-core
git checkout -b platform-devops
git checkout -b auth-data
git checkout -b docs-dx

git worktree add ../wt-ui ui-foundation
git worktree add ../wt-app app-core
git worktree add ../wt-plat platform-devops
git worktree add ../wt-auth auth-data
git worktree add ../wt-docs docs-dx
```

**Merge flow**: feature → worktree branch → `develop` (integration) → `main` (release, Senior only).

## RACI Snapshot

| Area               | Senior | XP Lead | App Lead | Plat Lead | Jr Agents       |
| ------------------ | :----: | :-----: | :------: | :-------: | --------------- |
| Design Tenets      |    A   |    R    |     C    |     C     | I               |
| UI Kit             |    C   |   A/R   |     C    |     I     | R (UI Kit)      |
| App Routes/Flows   |    C   |    C    |    A/R   |     I     | R (App Core)    |
| Auth/RBAC          |    C   |    I    |    A/R   |     C     | R (Auth)        |
| Data/API Contracts |    C   |    I    |    A/R   |     C     | R (Data)        |
| CI/CD & Envs       |    C   |    I    |     C    |    A/R    | R (DevOps)      |
| QA/Perf/Sec        |    C   |    I    |     C    |    A/R    | R (QA/Perf/Sec) |
| Docs/DX            |    C   |   A/R   |     C    |     C     | R (Docs/DX)     |

A=Accountable, R=Responsible, C=Consulted, I=Informed

## Definition of Done (DoD)

* Code + tests + a11y sweep + perf budget green + docs updated + preview link.
* PR needs 2 approvals (Area Lead + one additional reviewer).
* Blocking checks: typecheck, lint, unit, e2e, Lighthouse budgets, bundle guard.

## Backlog Seeds (per branch)

* **ui-foundation**: Tailwind tokens; shadcn init; Nyx components vendored; MUI + AntD tokens mapped; PrimeReact theme; Storybook.
* **app-core**: route groups (public/auth/app); error/loading boundaries; i18n scaffold; example feature: Collections (list/detail/create).
* **platform-devops**: pnpm + lint-staged; CI pipeline; preview envs with seeded data; release automation; vitals + error reporting.
* **auth-data**: session + server-action guards; role model; zod DTO layer; cache/ISR policy; edge vs node runtime policy.
* **docs-dx**: Storybook docs; contributor guide; scaffolder; ADR template; “component decision record” for choosing libraries.

````
