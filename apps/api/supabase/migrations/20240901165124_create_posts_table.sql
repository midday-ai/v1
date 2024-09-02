-- create posts table
create table posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- add foreign key constraint
alter table
  posts
add
  constraint fk_posts_user foreign key (user_id) references public.users(id) on
delete
  cascade;

-- create index for faster queries
create index idx_posts_user_id on posts(user_id);

-- add rls policies
alter table
  posts enable row level security;

-- policy to allow read access for all authenticated users
create policy "allow read access for all authenticated users" on posts for
select
  to authenticated
  using (true);

-- policy to allow users to insert their own posts
create policy "allow insert for authenticated users" on posts for
insert
  with check (auth.uid() = user_id);

-- policy to allow users to update their own posts
create policy "allow update for post owners" on posts for
update
  using (auth.uid() = user_id);

-- policy to allow users to delete their own posts
create policy "allow delete for post owners" on posts for
delete
  using (auth.uid() = user_id);

-- function to update the updated_at timestamp
create
or replace function update_updated_at() returns trigger as $$ begin
  new.updated_at = now();

return new;

end;

$$ language plpgsql;

-- trigger to call the update_updated_at function
create trigger update_posts_updated_at before
update
  on posts for each row execute function update_updated_at();