const details = [
  { label: "Full Name", value: "Athlete Name" },
  { label: "Email", value: "client@email.com" },
  { label: "Timezone", value: "PST" },
];

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Profile</h1>
        <p className="text-slate-600">Update credentials, bio, and shipping info.</p>
      </header>
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <dl className="grid gap-4 md:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-xs uppercase text-slate-400">{detail.label}</dt>
              <dd className="text-lg font-medium text-slate-900">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

