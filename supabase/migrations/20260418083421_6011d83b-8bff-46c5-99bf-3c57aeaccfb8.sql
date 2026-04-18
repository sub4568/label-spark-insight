-- Create early_access_requests table
CREATE TABLE public.early_access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  interest TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.early_access_requests ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a request (anon and authenticated)
CREATE POLICY "Anyone can submit early access request"
ON public.early_access_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- No SELECT policy: data is private; only service role can read.
