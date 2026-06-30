-- Create client_bookings table
CREATE TABLE IF NOT EXISTS public.client_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    phone TEXT,
    whatsapp TEXT NOT NULL,
    reason_for_meeting TEXT NOT NULL,
    what_to_discuss TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.client_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert bookings"
    ON public.client_bookings FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Only authenticated users can view bookings"
    ON public.client_bookings FOR SELECT
    USING (auth.role() = 'authenticated');

-- Create blog_comments table
CREATE TABLE IF NOT EXISTS public.blog_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    blog_slug TEXT NOT NULL,
    author_name TEXT NOT NULL,
    author_email TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert comments"
    ON public.blog_comments FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Anyone can view comments"
    ON public.blog_comments FOR SELECT
    USING (true);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact messages"
    ON public.contact_messages FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact messages"
    ON public.contact_messages FOR SELECT
    USING (auth.role() = 'authenticated');

-- Create projects table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT DEFAULT '',
    tags TEXT[] DEFAULT '{}',
    live_url TEXT DEFAULT '',
    repo_url TEXT DEFAULT '',
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
    ON public.projects FOR SELECT
    USING (true);

CREATE POLICY "Only authenticated users can manage projects"
    ON public.projects FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT DEFAULT '',
    tags TEXT[] DEFAULT '{}',
    date DATE DEFAULT CURRENT_DATE,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
    ON public.blog_posts FOR SELECT
    USING (published = true OR auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can manage blog posts"
    ON public.blog_posts FOR ALL
    USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');
