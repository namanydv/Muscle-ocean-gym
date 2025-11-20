import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-160px)] w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Premium Fitness Coaching
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Transform your body with the Muscle Ocean elite training system.
        </h1>
        <p className="text-lg text-white/70">
          Personalized workouts, intelligent nutrition, real-time progress tracking, and
          concierge-level accountability—designed for high-performing clients and managed
          by a powerful admin panel.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="rounded-full bg-amber-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            Explore Coaching Plans
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-6 py-3 text-center font-semibold text-white transition hover:border-white"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
      <div className="flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl shadow-amber-300/10">
        <p className="text-sm font-semibold uppercase text-white/60">Platform Vision</p>
        <ul className="mt-6 space-y-4 text-white/80">
          <li>• Public marketing site to showcase services and success stories.</li>
          <li>• Client dashboard for workouts, nutrition, payments, and progress.</li>
          <li>• Admin panel to manage clients, plans, bookings, and revenue.</li>
        </ul>
      </div>
    </section>
  );
}

