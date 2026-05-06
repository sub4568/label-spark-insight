import complianceVisual from "@/assets/compliance-visual.jpg";

export function Regulation() {
  return (
    <section id="regulation" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-mono uppercase tracking-widest text-accent">Compliance</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter text-gradient">
              Built for the 2026 regulatory landscape.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Digital Product Passports and the GS1 Digital Link standard are about to become
              non-negotiable across the UK and EU. Labelring is engineered around them from day
              one — turning what most brands will see as a burden into measurable competitive
              advantage.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["DPP-ready", "GS1 Digital Link", "EU 2026", "UK aligned", "ESPR"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-mono text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-surface/60 p-3 backdrop-blur shadow-elegant">
              <img
                src={complianceVisual}
                alt="Holographic EU Digital Product Passport compliance badge over a smart device"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-auto rounded-xl object-cover aspect-square"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur shadow-elegant">
              <div className="font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>compliance.status</span>
                  <span className="text-accent">live</span>
                </div>
                <div className="h-px bg-border" />
                {[
                  { k: "Digital Product Passport", v: "verified" },
                  { k: "GS1 Digital Link", v: "active" },
                  { k: "EU ESPR readiness", v: "100%" },
                  { k: "Consumer signals", v: "streaming" },
                ].map((row) => (
                  <div key={row.k} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{row.k}</span>
                    <span className="text-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
