create table if not exists public.newsletter_subscribers (id bigint generated always as identity primary key,email text not null unique,source text not null default 'website',created_at timestamptz not null default now());
create table if not exists public.contact_messages (id bigint generated always as identity primary key,name text not null,email text not null,subject text not null default 'Informações gerais',message text not null,created_at timestamptz not null default now());
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_messages enable row level security;
-- Os formulários escrevem através das rotas do servidor usando a chave service_role.
-- Nunca expor SUPABASE_SERVICE_ROLE_KEY no browser.