const plans = [
  {
    name: "Essentials",
    price: "$249/mo",
    description: "Weekly programming, macro targets, and chat support.",
    features: ["3 training blocks/mo", "Email support", "Progress dashboard access"],
  },
  {
    name: "Elite Hybrid",
    price: "$449/mo",
    description: "Full-spectrum training + nutrition with biomarker integrations.",
    features: ["Custom training microcycles", "Dietitian coaching", "Priority messaging"],
  },
  {
    name: "Executive Concierge",
    price: "$899/mo",
    description: "Dedicated coach, scheduling support, and travel-ready plans.",
    features: ["24h response SLA", "In-person onboarding", "Quarterly lab reviews"],
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="text-center text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Pricing
        </p>
        <h2 className="mt-3 text-4xl font-bold">Invest in high-performance coaching.</h2>
        <p className="mt-4 text-white/70">
          Swipe to the plan that aligns with your goals. All tiers include access to the Muscle
          Ocean dashboards and secure payment portal.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <p className="text-sm uppercase text-white/50">{plan.name}</p>
            <p className="mt-2 text-3xl font-bold text-white">{plan.price}</p>
            <p className="mt-4 text-sm text-white/70">{plan.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

