export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          The intelligence layer for packaging
        </div>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-gradient animate-fade-up">
          Turn Labels into<br className="hidden sm:block" /> Intelligence.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
          Join the ecosystem transforming static packaging into live, measurable data interfaces.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 animate-fade-up [animation-delay:240ms]">
          <a
            href="#access"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-glow transition-all hover:translate-y-[-1px]"
          >
            Request Early Access
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface/60 backdrop-blur px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
          >
            Learn more
          </a>
        </div>

        <div className="mt-20 mx-auto max-w-5xl animate-fade-up [animation-delay:360ms]">
          <div className="relative rounded-2xl border border-border bg-surface/40 backdrop-blur p-2 shadow-elegant">
            <img
              src={heroVisual}
              alt="Smart product packaging with a glowing Labelring intelligence interface"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-xl object-cover aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
