import type { ReactNode } from "react";
import Link from "next/link";

const clientNav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/workouts", label: "Workouts" },
  { href: "/dashboard/nutrition", label: "Nutrition" },
  { href: "/dashboard/schedule", label: "Schedule" },
  { href: "/dashboard/progress", label: "Progress" },
  { href: "/dashboard/payments", label: "Payments" },
  { href: "/dashboard/profile", label: "Profile" },
];

export default function ClientDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-4 py-8 md:flex">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Client
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-900">Dashboard</h2>
          <nav className="mt-8 flex flex-col gap-2">
            {clientNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 px-4 py-6 md:px-8 md:py-10">{children}</main>
      </div>
    </div>
  );
}

