import "./globals.css";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Snow & Moon",
  description: "Light: snowflakes. Dark: moon & stars."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="fx-sky min-h-dvh antialiased">
        <Providers>
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
          <footer className="mx-auto max-w-6xl px-4 py-8 opacity-70 text-sm">
            © {new Date().getFullYear()} Snow & Moon
          </footer>
        </Providers>
      </body>
    </html>
  );
}
