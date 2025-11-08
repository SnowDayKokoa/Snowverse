# Next.js 16 – High-Premium Modern Stack

A production-grade Next.js 16 app (Node 25) with Tailwind (via PostCSS), shadcn/ui, Nyx UI, Material UI, PrimeReact, Ant Design (+ ProComponents), and Novu notifications. Built with a multi-agent workflow and disciplined release process.

## Quick Start

```bash
# Node 25 recommended (nvm shown)
nvm install 25 && nvm use 25

# Create app (if not created yet)
npx create-next-app@latest apps/web --ts --eslint --tailwind

# Install UI + tooling
pnpm -F apps/web add @mui/material @emotion/react @emotion/styled primereact primeicons antd @ant-design/cssinjs dayjs @ant-design/pro-components @novu/notification-center framer-motion
pnpm -F apps/web add -D tailwindcss postcss @tailwindcss/postcss autoprefixer

# Init Tailwind (if you didn’t use the Tailwind option)
pnpm -F apps/web exec tailwindcss init -p

# Dev
pnpm -F apps/web dev
```

## Global Styles (order matters)

`apps/web/app/globals.css`

```css
/* Ant Design reset */
@import "antd/dist/reset.css";

/* PrimeReact theme + core + icons */
@import "primereact/resources/themes/lara-light-cyan/theme.css";
@import "primereact/resources/primereact.min.css";
@import "primeicons/primeicons.css";

/* Tailwind (v4) */
@import "tailwindcss";
```

## Providers (App Router)

`apps/web/app/providers.tsx`

```tsx
"use client";

import * as React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { PrimeReactProvider } from "primereact/api";
import { StyleProvider } from "@ant-design/cssinjs";

const theme = createTheme({ palette: { mode: "light" }, shape: { borderRadius: 12 } });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyleProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </MuiThemeProvider>
    </StyleProvider>
  );
}
```

Wire in layout:

`apps/web/app/layout.tsx`

```tsx
import "./globals.css";
import { Providers } from "./providers";

export const metadata = { title: "App", description: "High-Premium Modern Stack" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## UI Sources

* **shadcn/ui**: `npx shadcn@latest init` then `npx shadcn@latest add button` (and others).
* **Nyx UI**: copy chosen components into `apps/web/components/nyx/*` and ensure `framer-motion` installed.
* **MUI**: import per component (e.g., `@mui/material/Button`).
* **PrimeReact**: per-component imports, icons via `primeicons`.
* **Ant Design**: per-component imports; SSR via `@ant-design/cssinjs`.
* **Ant Design ProComponents**: higher-level `ProTable`, `ProForm`, etc.
* **Novu**: NotificationCenter in a client component; backend triggers via server actions or API routes.

## Scripts

```jsonc
// package.json (workspace root or apps/web)
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "e2e": "playwright test",
    "ci": "pnpm typecheck && pnpm lint && pnpm test && pnpm build"
  }
}
```

## Quality Bar

* **Perf**: LCP ≤ 1.8s, CLS < 0.1, TTFB < 200ms (edge routes).
* **A11y**: WCAG 2.2 AA; keyboard complete; focus visible.
* **Code**: TS strict, zero eslint errors, green test pyramid.
* **Security**: server actions guarded; headers hardened.

## License

MIT (adjust as needed).

```
