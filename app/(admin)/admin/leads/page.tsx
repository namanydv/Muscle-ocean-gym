const leads = [
  { name: "Maya Stone", source: "Website", status: "Qualified" },
  { name: "Chris Vale", source: "Referral", status: "Discovery scheduled" },
];

export default function AdminLeadsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Leads</h1>
        <p className="text-white/60">Pipeline health and touch points.</p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
        <ul className="space-y-4 text-sm text-white/70">
          {leads.map((lead) => (
            <li key={lead.name} className="flex items-center justify-between">
              <div>
                <p className="text-white">{lead.name}</p>
                <p>{lead.source}</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                {lead.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

