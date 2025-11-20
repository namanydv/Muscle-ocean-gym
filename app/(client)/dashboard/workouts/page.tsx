const workouts = [
  { day: "Monday", focus: "Upper Push", status: "Scheduled" },
  { day: "Wednesday", focus: "Lower Strength", status: "In progress" },
  { day: "Friday", focus: "Conditioning", status: "Planned" },
];

export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Workouts</h1>
        <p className="text-slate-600">Auto-synced from the coach workspace.</p>
      </header>
      <div className="rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="text-xs uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">Day</th>
              <th className="px-4 py-3">Focus</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout.day} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-900">{workout.day}</td>
                <td className="px-4 py-3">{workout.focus}</td>
                <td className="px-4 py-3">{workout.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

