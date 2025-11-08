"use client";
import { NovuProvider, NotificationCenter } from "@novu/notification-center";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Novu Notification Center</h1>
      <NovuProvider
        applicationIdentifier={process.env.NEXT_PUBLIC_NOVU_APP_ID ?? "YOUR_PUBLIC_APP_ID"}
        subscriberId="user-123"
      >
        <div className="rounded-xl border p-4">
          <NotificationCenter />
        </div>
      </NovuProvider>
    </section>
  );
}
