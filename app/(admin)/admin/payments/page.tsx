const invoices = [
  { id: "INV-2043", client: "Dev Kapoor", amount: "$899", status: "Paid" },
  { id: "INV-2044", client: "Aria Hale", amount: "$449", status: "Pending" },
];

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Payments</h1>
        <p className="text-white/60">Manage billing, payouts, and reconciliation.</p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-slate-950">
        <table className="w-full text-left text-sm text-white/70">
          <thead className="text-xs uppercase text-white/40">
            <tr>
              <th className="px-4 py-3">Invoice</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t border-white/5">
                <td className="px-4 py-3 font-medium text-white">{invoice.id}</td>
                <td className="px-4 py-3">{invoice.client}</td>
                <td className="px-4 py-3">{invoice.amount}</td>
                <td className="px-4 py-3">{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

