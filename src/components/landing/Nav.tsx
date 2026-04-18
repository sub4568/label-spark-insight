export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-accent to-foreground/40 shadow-glow" />
          <span>Labelring</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#regulation" className="hover:text-foreground transition-colors">Regulation</a>
          <a href="#access" className="hover:text-foreground transition-colors">Access</a>
        </nav>
        <a
          href="#access"
          className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}
