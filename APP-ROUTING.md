# App Routing (Next.js 16 App Router)

This project uses the App Router with server components by default. Below is the canonical structure and conventions.

## Directory Tree (baseline)

````

apps/web/
└─ app/
├─ (public)/
│  ├─ layout.tsx                 # Marketing/public shell
│  └─ page.tsx                   # Landing page
├─ (auth)/
│  ├─ layout.tsx                 # Minimal shell for auth
│  ├─ signin/
│  │  └─ page.tsx
│  └─ signup/
│     └─ page.tsx
├─ (app)/
│  ├─ layout.tsx                 # Authenticated app shell (sidebar/header)
│  ├─ dashboard/
│  │  └─ page.tsx
│  ├─ collections/
│  │  ├─ page.tsx                # list
│  │  ├─ new/
│  │  │  └─ page.tsx             # create
│  │  └─ [id]/
│  │     └─ page.tsx             # detail
│  ├─ notifications/
│  │  └─ page.client.tsx         # Novu NotificationCenter demo
│  ├─ components/
│  │  └─ page.tsx                # UI showcase (shadcn, Nyx, MUI, PrimeReact, AntD)
│  └─ chat/
│     └─ page.client.tsx         # AI chat slice (NextChat-inspired)
├─ error.tsx                      # global error boundary (server)
├─ loading.tsx                    # global loading UI (server)
├─ layout.tsx                     # root layout – wires Providers
└─ page.tsx                       # fallback/home

````

> **Segment groups** `(public)`, `(auth)`, `(app)` are route groups for separate shells. Only `(app)` is protected by auth guards.

## Conventions

- **Server Components by default.** Use `"use client"` only for interactive pages/components (e.g., NotificationCenter, chat, PrimeReact-heavy pages).
- **Providers**: only in `app/layout.tsx` via `Providers` wrapper (MUI ThemeProvider, AntD StyleProvider, PrimeReactProvider).
- **Data fetching**: prefer RSC (async components), `fetch` with caching (`revalidate`, `revalidateTag`), and streaming where practical.
- **Auth Guards**: in `(app)/layout.tsx` (server) check session; redirect to `(auth)/signin` if missing.
- **Design System**: keep primitives in `apps/web/components/ui/*` (shadcn + Nyx), vendor adapters for MUI/AntD/PrimeReact in `components/vendor/*`.
- **Client pages suffix**: use `page.client.tsx` for clear intent when needed.

## Example: Protected shell (server)

`apps/web/app/(app)/layout.tsx`
```tsx
import { ReactNode } from "react";
import { getSession } from "@/lib/auth"; // your server util

export default async function AppShell({ children }: { children: ReactNode }) {
  const session = await getSession();
  if (!session) {
    // Next.js redirect (server)
    return Response.redirect(new URL("/signin", process.env.NEXT_PUBLIC_BASE_URL));
  }

  return (
    <section className="min-h-dvh flex">
      {/* Sidebar/Header from DS */}
      <div className="flex-1">{children}</div>
    </section>
  );
}
```

## Example: UI Showcase (mixed libraries)

`apps/web/app/(app)/components/page.tsx`

```tsx
"use client";
import { Button as ShadButton } from "@/components/ui/button";
import { Button as PrimeButton } from "primereact/button";
import Button from "@mui/material/Button";
import { Button as AntdButton } from "antd";
// Example Nyx component you vendored:
import { InteractiveCard } from "@/components/nyx/interactive-card";

export default function Page() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Component Showcase</h1>
      <div className="flex gap-3 flex-wrap">
        <ShadButton>shadcn</ShadButton>
        <Button variant="contained">MUI</Button>
        <PrimeButton label="PrimeReact" icon="pi pi-bolt" />
        <AntdButton type="primary">AntD</AntdButton>
      </div>

      <div className="max-w-sm">
        <InteractiveCard title="Nyx UI Card" />
      </div>
    </main>
  );
}
```

## Example: Novu Notification Center

`apps/web/app/(app)/notifications/page.client.tsx`

```tsx
"use client";
import { NovuProvider, NotificationCenter } from "@novu/notification-center";

export default function Notifications() {
  return (
    <div className="p-6">
      <NovuProvider
        applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID!}
        subscriberId="user-123"
      >
        <NotificationCenter />
      </NovuProvider>
    </div>
  );
}
```

## Example: ProTable (Ant Design ProComponents)

`apps/web/app/(app)/collections/page.client.tsx`

```tsx
"use client";
import { ProTable, type ProColumns } from "@ant-design/pro-components";

type Item = { id: number; name: string; createdAt: string; };

const columns: ProColumns<Item>[] = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  { title: "Created", dataIndex: "createdAt", valueType: "dateTime" },
];

export default function Collections() {
  return (
    <ProTable<Item>
      rowKey="id"
      columns={columns}
      request={async () => ({
        data: [{ id: 1, name: "Alpha", createdAt: new Date().toISOString() }],
      })}
      search={false}
      pagination={false}
    />
  );
}
```

## Error & Loading

* `app/error.tsx` is a **client** boundary by default (can read `error`).
* `app/loading.tsx` is **server**; render skeletons/spinners early.

## i18n, Metadata, and Images

* Use `export const metadata` per route for SEO.
* Prefer `next/image` for responsive images; configure domains in `next.config.js`.
* Add i18n route groups if needed: e.g., `(en)`, `(es)` with middleware for locale detection.

---

```
