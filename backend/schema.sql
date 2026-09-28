-- FITNESS GYM backend foundation
-- Intended for PostgreSQL / Neon.

create table if not exists memberships (
  id bigserial primary key,
  name varchar(80) not null unique,
  days_per_week integer not null check (days_per_week between 1 and 7),
  is_unlimited boolean not null default false,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists membership_plans (
  id bigserial primary key,
  membership_id bigint not null references memberships(id) on delete cascade,
  months integer not null check (months > 0),
  sessions integer,
  price_egp numeric(10,2) not null check (price_egp >= 0),
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (membership_id, months)
);

create table if not exists gym_settings (
  key varchar(100) primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists offers (
  id bigserial primary key,
  title_ar text,
  title_en text,
  description_ar text,
  description_en text,
  badge_ar varchar(100),
  badge_en varchar(100),
  active boolean not null default true,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists gym_status (
  id integer primary key default 1 check (id = 1),
  status varchar(20) not null default 'open',
  note text,
  updated_at timestamptz not null default now()
);

insert into gym_settings(key, value)
values
  ('contact', '{"phone":"01033659722","whatsapp":"201033659722"}'),
  ('hours', '{"men":"24/7","women":"08:00-22:00"}')
on conflict (key) do update set value = excluded.value, updated_at = now();

insert into gym_status(id, status)
values (1, 'open')
on conflict (id) do nothing;
