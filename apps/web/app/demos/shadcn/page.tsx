"use client";
import { Button as ShadButton } from "@/components/ui/button"; // after running `npx shadcn@latest add button`

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">shadcn/ui</h1>
      <div className="flex gap-3">
        <ShadButton>Default</ShadButton>
        <ShadButton variant="outline">Outline</ShadButton>
      </div>
    </section>
  );
}
