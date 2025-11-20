const kpis = [
  { label: "Active Clients", value: "82" },
  { label: "MRR", value: "$54.2k" },
  { label: "Leads", value: "27" },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm uppercase tracking-[0.4em] text-white/40">Admin</p>
        <h1 className="text-3xl font-bold text-white">Operational overview</h1>
        <p className="text-white/60">Monitor business health across the platform.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-2xl border border-white/10 bg-slate-950 p-5">
            <p className="text-sm text-white/50">{kpi.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{kpi.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

