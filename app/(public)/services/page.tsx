const services = [
  {
    title: "Signature Coaching",
    description:
      "Custom periodized programs, weekly video check-ins, and biometric tracking for maximum adherence.",
  },
  {
    title: "Nutrition Architecture",
    description:
      "Dietitian-developed protocols, macro automation, supplement periodization, and grocery plans.",
  },
  {
    title: "Hybrid Performance",
    description:
      "Strength + conditioning blends for executives preparing for events, competitions, or lifestyle shifts.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Services
        </p>
        <h2 className="text-4xl font-bold text-white">What we deliver.</h2>
        <p className="text-lg text-white/70">
          Every experience is powered by the platform’s dashboards for clients and admin teams,
          ensuring clarity, speed, and accountability.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm text-white/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

