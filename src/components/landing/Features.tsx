const features = [
  {
    title: "Centralised label management",
    description:
      "Manage every SKU, market, and version from a single source of truth. Update once, distribute everywhere.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    title: "Scannable, logo-based labels",
    description:
      "No QR codes. Your brandmark becomes the trigger — recognized instantly by any modern camera.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Real-world intelligence",
    description:
      "Capture engagement signals from physical scans — geography, frequency, intent — as permissioned 1st-party data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M3 12h3l3-9 6 18 3-9h3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">Platform</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter text-gradient">
            One layer. Three superpowers.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-border bg-surface/60 p-8 backdrop-blur transition-all hover:bg-surface-elevated hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/60 border border-border text-accent">
                {f.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
