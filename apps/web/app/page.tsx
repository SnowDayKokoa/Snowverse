export default function Page() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Snow & Moon</h1>
        <p>Light mode sprinkles snowflakes; Dark mode reveals a moonlit starfield.</p>
        <p>Explore the demo pages to see each component library in action.</p>
      </div>
      <div className="rounded-2xl border p-6">
        <ul className="list-disc pl-6 space-y-2">
          <li>shadcn/ui primitives for consistent UX</li>
          <li>Nyx UI for animated, premium sections</li>
          <li>PrimeReact & Ant Design for enterprise-ready widgets</li>
          <li>Material UI for mature MD components</li>
          <li>Novu for in-app notifications</li>
        </ul>
      </div>
    </section>
  );
}
