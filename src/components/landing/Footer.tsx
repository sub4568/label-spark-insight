export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block h-5 w-5 rounded-md bg-gradient-to-br from-accent to-foreground/40" />
          <span className="font-display font-medium text-foreground">Labelring</span>
          <span className="opacity-60">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
}
