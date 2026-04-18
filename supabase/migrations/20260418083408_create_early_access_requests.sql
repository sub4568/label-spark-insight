-- Create early_access_requests table
create table public.early_access_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text not null,
  interest text not null,
  created_at timestamptz not null default now()
);

alter table public.early_access_requests enable row level security;

-- Allow anyone (including anon) to insert a request
create policy "Anyone can submit early access request"
on public.early_access_requests
for insert
to anon, authenticated
with check (true);

-- No public select; only service role can read (default behavior).
