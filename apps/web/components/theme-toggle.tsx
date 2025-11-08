"use client";

import * as React from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    const light = theme === "light";
    root.classList.toggle("dark", !light);
    root.classList.toggle("theme-snow", light);
    root.classList.toggle("theme-moon", !light);
  }, [theme]);

  return (
    <button
      className="focus-ring rounded-xl border px-3 py-1 text-sm"
      onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 Moon Mode" : "❄️ Snow Mode"}
    </button>
  );
}
