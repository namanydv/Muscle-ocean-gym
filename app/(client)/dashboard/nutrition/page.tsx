const macros = [
  { label: "Protein", target: "190g", status: "On track" },
  { label: "Carbs", target: "240g", status: "Slight deficit" },
  { label: "Fats", target: "75g", status: "On track" },
];

export default function NutritionPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Nutrition</h1>
        <p className="text-slate-600">Macros, meals, and feedback loops.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-3">
        {macros.map((macro) => (
          <div
            key={macro.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800"
          >
            <p className="text-sm text-slate-500">{macro.label}</p>
            <p className="mt-2 text-3xl font-semibold">{macro.target}</p>
            <p className="text-sm text-slate-500">{macro.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

