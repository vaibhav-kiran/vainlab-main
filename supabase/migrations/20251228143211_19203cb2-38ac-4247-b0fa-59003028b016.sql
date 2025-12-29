-- Create project submissions table for the Build page form
CREATE TABLE public.project_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  project_type TEXT NOT NULL,
  deadline DATE,
  budget_range TEXT,
  idea_description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.project_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can submit a project idea)
CREATE POLICY "Anyone can submit project ideas" 
ON public.project_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading (only authenticated users - for admin purposes later)
CREATE POLICY "Only authenticated users can view submissions" 
ON public.project_submissions 
FOR SELECT 
USING (auth.role() = 'authenticated');