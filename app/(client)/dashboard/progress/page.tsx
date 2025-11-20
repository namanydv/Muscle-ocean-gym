const progressCards = [
  { label: "Bodyweight", value: "182 → 176 lbs", status: "6-week trend" },
  { label: "HRV", value: "78 ms", status: "Stable" },
  { label: "Sleep", value: "7h 45m avg", status: "Optimizing" },
];

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Progress</h1>
        <p className="text-slate-600">Track metrics synced from wearables and manual logs.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {progressCards.map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{card.value}</p>
            <p className="text-sm text-slate-500">{card.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

