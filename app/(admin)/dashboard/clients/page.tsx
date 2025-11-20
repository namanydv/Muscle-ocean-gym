const clients = [
  { name: "Aria Hale", plan: "Elite Hybrid", status: "Active" },
  { name: "Dev Kapoor", plan: "Executive Concierge", status: "Active" },
  { name: "Leo Reyes", plan: "Essentials", status: "Paused" },
];

export default function AdminClientsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Clients</h1>
        <p className="text-white/60">Manage onboarding, compliance, and retention.</p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-slate-950">
        <table className="w-full text-left text-sm text-white/70">
          <thead className="text-xs uppercase text-white/40">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.name} className="border-t border-white/5">
                <td className="px-4 py-3 font-medium text-white">{client.name}</td>
                <td className="px-4 py-3">{client.plan}</td>
                <td className="px-4 py-3">{client.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

