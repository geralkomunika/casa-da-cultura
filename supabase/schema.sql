create table if not exists public.newsletter_subscribers (id bigint generated always as identity primary key,email text not null unique,source text not null default 'website',created_at timestamptz not null default now());
alter table public.newsletter_subscribers enable row level security;
-- Inserções apenas pelo endpoint de servidor usando a service role key. Nunca expor essa chave no browser.