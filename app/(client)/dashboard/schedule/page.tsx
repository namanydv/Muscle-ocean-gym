const sessions = [
  { title: "Coach Check-in", date: "Tuesday 7:00 AM PST", type: "Video" },
  { title: "Recovery Massage", date: "Thursday 5:00 PM PST", type: "On-site" },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Schedule</h1>
        <p className="text-slate-600">Upcoming touch points and reminders.</p>
      </header>
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <ul className="space-y-4">
          {sessions.map((session) => (
            <li key={session.title} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-semibold text-slate-900">{session.title}</p>
                <p className="text-slate-500">{session.date}</p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                {session.type}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

