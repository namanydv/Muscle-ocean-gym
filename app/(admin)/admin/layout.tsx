import type { ReactNode } from "react";
import Link from "next/link";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/clients", label: "Clients" },
  { href: "/admin/plans", label: "Plans" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/payments", label: "Payments" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-white/10 bg-slate-950 px-5 py-8 text-white md:flex">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Admin
          </p>
          <h2 className="mt-2 text-2xl font-bold">Control Room</h2>
          <nav className="mt-8 flex flex-col gap-2">
            {adminNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 bg-slate-900 px-4 py-6 text-white md:px-8 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}

