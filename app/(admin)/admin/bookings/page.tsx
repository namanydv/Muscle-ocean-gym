const bookings = [
  { client: "Aria Hale", service: "Check-in", date: "Nov 21 • 8:00 AM" },
  { client: "Leo Reyes", service: "Lab review", date: "Nov 22 • 1:00 PM" },
];

export default function AdminBookingsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold text-white">Bookings</h1>
        <p className="text-white/60">Sessions, check-ins, and events.</p>
      </header>
      <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
        <ul className="space-y-4 text-sm text-white/70">
          {bookings.map((booking) => (
            <li key={booking.client} className="flex items-center justify-between">
              <div>
                <p className="text-white">{booking.client}</p>
                <p>{booking.service}</p>
              </div>
              <p className="text-white/50">{booking.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

