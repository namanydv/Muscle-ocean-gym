const plans = [
  { name: "Essentials", price: "$249", clients: 32 },
  { name: "Elite Hybrid", price: "$449", clients: 38 },
  { name: "Exec Concierge", price: "$899", clients: 12 },
];

export default function AdminPlansPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Plans</h1>
        <p className="text-white/60">Shape pricing, deliverables, and sessions.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-white/10 bg-slate-950 p-5">
            <p className="text-sm uppercase text-white/40">{plan.name}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{plan.price}</p>
            <p className="text-sm text-white/50">{plan.clients} active clients</p>
          </div>
        ))}
      </div>
    </div>
  );
}

