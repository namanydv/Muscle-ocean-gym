export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-6 px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Contact</p>
      <h2 className="text-4xl font-bold text-white">Book a discovery call.</h2>
      <p className="text-lg text-white/70">
        Tell us about your goals, timelines, and training history. We’ll pair you with a lead coach
        and walk through the dashboard experience before onboarding.
      </p>
      <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">
        <form className="grid gap-6 md:grid-cols-2">
          <label className="text-sm text-white/70">
            Full Name
            <input
              className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-white"
              placeholder="Your name"
            />
          </label>
          <label className="text-sm text-white/70">
            Email
            <input
              className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-white"
              placeholder="you@email.com"
              type="email"
            />
          </label>
          <label className="md:col-span-2 text-sm text-white/70">
            Goals & timeline
            <textarea
              className="mt-2 w-full rounded-xl border border-white/20 bg-slate-950/60 px-4 py-3 text-white"
              rows={4}
              placeholder="Share context so we can prepare the right plan."
            />
          </label>
          <button
            type="button"
            className="md:col-span-2 rounded-2xl bg-amber-300 px-6 py-3 font-semibold text-slate-950"
          >
            Submit interest
          </button>
        </form>
      </div>
      <p className="text-sm text-white/50">
        Prefer direct contact? Email{" "}
        <a href="mailto:hello@muscleoceangym.com" className="text-white">
          hello@muscleoceangym.com
        </a>
      </p>
    </section>
  );
}

