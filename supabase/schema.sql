create table if not exists public.newsletter_subscribers (id bigint generated always as identity primary key,email text not null unique,source text not null default 'website',created_at timestamptz not null default now());
create table if not exists public.contact_messages (id bigint generated always as identity primary key,name text not null,email text not null,subject text not null default 'Informações gerais',message text not null,created_at timestamptz not null default now());
create table if not exists public.events (
  id bigint generated always as identity primary key,
  title text not null,
  category text not null default 'Cultura',
  description text not null default '',
  venue text not null default 'Casa da Cultura César Oliveira',
  starts_at timestamptz not null,
  ticket_url text not null default 'https://www.ticketline.pt/salas/sala/4148',
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_messages enable row level security;
alter table public.events enable row level security;
-- As rotas de servidor acedem à base de dados com SUPABASE_SERVICE_ROLE_KEY.
-- Nunca expor SUPABASE_SERVICE_ROLE_KEY no browser.
-- A tabela de eventos só deve ser alterada através da rota administrativa protegida.
