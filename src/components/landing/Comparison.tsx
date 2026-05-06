import networkVisual from "@/assets/intelligence-network.jpg";

const staticItems = [
  "Manual compliance",
  "Zero visibility post-sale",
  "Wasted engagement",
];

const intelligenceItems = [
  "Automated UK/EU compliance",
  "Real-time consumer signals",
  "Permissioned 1st-party data",
];

export function Comparison() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">The shift</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter text-gradient">
            From static labels to a live intelligence layer.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every product carries data. Most of it dies on the shelf. We change that.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Static */}
          <div className="rounded-2xl border border-border bg-surface/60 p-8 backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
              <span className="font-mono uppercase tracking-wider text-xs">Static labels</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">Yesterday's packaging</h3>
            <ul className="mt-8 space-y-4">
              {staticItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intelligence */}
          <div className="relative rounded-2xl border border-border bg-gradient-to-br from-surface-elevated to-surface p-8 backdrop-blur shadow-glow">
            <div className="flex items-center gap-2 text-sm text-accent">
              <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
              <span className="font-mono uppercase tracking-wider text-xs">Intelligence layer</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-gradient-accent">The Labelring stack</h3>
            <ul className="mt-8 space-y-4">
              {intelligenceItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <svg className="mt-0.5 h-5 w-5 flex-none text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
