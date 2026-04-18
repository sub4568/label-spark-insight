import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
  interest: z.string().min(1),
});

export function AccessForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      interest: String(fd.get("interest") ?? "Beta Access"),
    };

    const result = schema.safeParse(payload);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("early_access_requests").insert(result.data);
    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    toast.success("You're on the list");
  }

  return (
    <section id="access" className="relative py-24 sm:py-32 border-t border-border">
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">Early access</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter text-gradient">
            Be first inside the ring.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We're onboarding a small group of brands ahead of public launch.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface/60 backdrop-blur p-6 sm:p-10 shadow-elegant">
          {success ? (
            <div className="text-center py-12">
              <div className="mx-auto h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center text-accent shadow-glow">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-gradient">You're on the list</h3>
              <p className="mt-2 text-muted-foreground">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5" noValidate>
              <Field label="Name" name="name" type="text" placeholder="Ada Lovelace" error={errors.name} />
              <Field label="Work email" name="email" type="email" placeholder="ada@company.com" error={errors.email} />
              <Field label="Company" name="company" type="text" placeholder="Lovelace Labs" error={errors.company} />

              <div className="flex flex-col gap-2">
                <label htmlFor="interest" className="text-sm font-medium text-foreground">Interest</label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue="Beta Access"
                  className="h-11 rounded-lg border border-border bg-background/40 px-3 text-sm text-foreground outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
                >
                  <option value="Beta Access">Beta Access</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-glow transition-all hover:translate-y-[-1px] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting…" : "Request Early Access"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="h-11 rounded-lg border border-border bg-background/40 px-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
