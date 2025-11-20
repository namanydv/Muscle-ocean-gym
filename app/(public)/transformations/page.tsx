const highlights = [
  {
    name: "Aria",
    result: "-18 lbs, +60 lb deadlift PR",
    pillar: "Remote Hybrid",
  },
  {
    name: "Dev",
    result: "+8 lb lean mass, marathon PB",
    pillar: "Executive Concierge",
  },
  {
    name: "Leo",
    result: "Body recomposition & hormone reset",
    pillar: "Elite Hybrid",
  },
];

export default function TransformationsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
        Transformations
      </p>
      <h2 className="mt-3 text-4xl font-bold text-white">Proof from our athletes.</h2>
      <p className="mt-4 max-w-3xl text-lg text-white/70">
        Every transformation runs inside the platform—progress updates, weekly check-ins, payments,
        and scheduling all in one place so coaches and clients stay aligned.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <div
            key={highlight.name}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950 to-slate-900 p-6"
          >
            <p className="text-sm uppercase text-white/50">{highlight.pillar}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{highlight.name}</h3>
            <p className="mt-3 text-white/80">{highlight.result}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
              Privacy-first; media on request.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

