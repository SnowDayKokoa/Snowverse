export default function Gallery() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="aspect-[4/3] rounded-xl border bg-[color:var(--bg-alt)]" />
      ))}
    </section>
  );
}
