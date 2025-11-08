"use client";
// Add your vendored Nyx component first, e.g. components/nyx/interactive-card.tsx
import { motion } from "framer-motion";

function NyxDemoCard() {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      className="rounded-2xl border p-8 bg-[color:var(--bg-alt)]"
    >
      <h3 className="text-xl font-semibold">Nyx UI Style Card</h3>
      <p className="opacity-80">Animated, premium micro-interaction.</p>
    </motion.div>
  );
}

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Nyx UI</h1>
      <NyxDemoCard />
    </section>
  );
}
