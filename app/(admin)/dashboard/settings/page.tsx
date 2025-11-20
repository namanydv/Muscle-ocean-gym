const settings = [
  { label: "Brand", value: "Muscle Ocean Gym" },
  { label: "Support Email", value: "support@muscleoceangym.com" },
  { label: "Currency", value: "USD" },
];

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Settings</h1>
        <p className="text-white/60">Brand, billing, and integrations.</p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
        <dl className="grid gap-4 md:grid-cols-2">
          {settings.map((setting) => (
            <div key={setting.label}>
              <dt className="text-xs uppercase text-white/40">{setting.label}</dt>
              <dd className="text-lg font-medium text-white">{setting.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

