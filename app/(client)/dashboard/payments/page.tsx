const payments = [
  { id: "INV-2043", amount: "$449.00", status: "Paid", date: "Nov 2" },
  { id: "INV-2039", amount: "$449.00", status: "Paid", date: "Oct 2" },
];

export default function ClientPaymentsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Payments</h1>
        <p className="text-slate-600">Secure billing inside the platform.</p>
      </header>
      <div className="rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">Invoice</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-900">{payment.id}</td>
                <td className="px-4 py-3">{payment.date}</td>
                <td className="px-4 py-3">{payment.amount}</td>
                <td className="px-4 py-3">{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

