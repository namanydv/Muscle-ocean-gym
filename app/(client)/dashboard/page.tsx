export default function ClientOverviewPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-widest text-slate-400">Overview</p>
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, Athlete.</h1>
        <p className="text-slate-600">
          Quick glance at today’s training, nutrition compliance, and outstanding tasks.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {["Training Block", "Calories", "Check-ins"].map((card) => (
          <div
            key={card}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800"
          >
            <p className="text-sm text-slate-500">{card}</p>
            <p className="mt-2 text-2xl font-semibold">Coming soon</p>
          </div>
        ))}
      </div>
    </div>
  );
}

