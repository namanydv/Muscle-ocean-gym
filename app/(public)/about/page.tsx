export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
        Our Story
      </p>
      <h2 className="text-4xl font-bold text-white">Why Muscle Ocean Gym exists.</h2>
      <p className="text-lg text-white/70">
        We blend science-backed strength programming with concierge-level coaching to help busy
        professionals reach elite performance. Our coaches, registered dietitians, and operations
        team use the platform you’re navigating to deliver a seamless training journey.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {["Evidence-based training", "Data-driven nutrition", "Accountability systems"].map(
          (pillar) => (
            <div
              key={pillar}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-white/80"
            >
              {pillar}
            </div>
          ),
        )}
      </div>
    </section>
  );
}

