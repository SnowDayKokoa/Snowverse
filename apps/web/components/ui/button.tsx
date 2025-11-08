import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

const base = "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition";
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-[color:var(--accent)] text-white hover:opacity-90 border-transparent",
  outline: "bg-transparent border-current hover:bg-[color:var(--bg-alt)]"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "default", className = "", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${className}`.trim()}
      {...props}
    />
  );
});
