create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
    insert into public.users (id, email, full_name)
    values (
        new.id,
        new.email,
        new.raw_user_meta_data ->> 'full_name'
    );
    return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();