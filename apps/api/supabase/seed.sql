INSERT INTO
  auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    invited_at,
    confirmation_token,
    confirmation_sent_at,
    recovery_token,
    recovery_sent_at,
    email_change_token_new,
    email_change,
    email_change_sent_at,
    last_sign_in_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    created_at,
    updated_at,
    phone,
    phone_confirmed_at,
    phone_change,
    phone_change_token,
    phone_change_sent_at,
    email_change_token_current,
    email_change_confirm_status,
    banned_until,
    reauthentication_token,
    reauthentication_sent_at,
    is_sso_user,
    deleted_at,
    is_anonymous
  )
VALUES
  (
    '00000000-0000-0000-0000-000000000000',
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'authenticated',
    'authenticated',
    'user@example.com',
    '$2a$10$nnqTShcTX48N6QWWjbPUee.wrGz1kGx/uq5lORviCm.fn04W1BeRe',
    '2024-09-01 17:21:01.462788+00',
    NULL,
    '',
    NULL,
    '',
    NULL,
    '',
    '',
    NULL,
    NULL,
    '{"provider": "email", "providers": ["email"]}',
    '{"username": "username", "full_name": "Test User"}',
    NULL,
    '2024-09-01 17:21:01.455486+00',
    '2024-09-01 17:21:01.46295+00',
    NULL,
    NULL,
    '',
    '',
    NULL,
    '',
    0,
    NULL,
    '',
    NULL,
    false,
    NULL,
    false
  );

INSERT INTO
  auth.identities (
    provider_id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at,
    id
  )
VALUES
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    '{"sub": "aec53558-767e-4408-b4d6-1c1e6f17ffe5", "email": "user@example.com", "email_verified": false, "phone_verified": false}',
    'email',
    '2024-09-01 17:21:01.459821+00',
    '2024-09-01 17:21:01.459849+00',
    '2024-09-01 17:21:01.459849+00',
    'c5e81668-437b-47c2-83e2-84b8566b3018'
  );

-- Seed data for posts
INSERT INTO
  posts (user_id, title, content)
VALUES
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'React Server Components: A Game Changer',
    'React Server Components are revolutionizing how we build React applications. They allow for better performance and smaller bundle sizes by running components on the server. This new paradigm is especially powerful when combined with frameworks like Next.js 13+.'
  ),
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'The Rise of Bun: A New JavaScript Runtime',
    'Bun is gaining traction as a fast all-in-one JavaScript runtime. It aims to replace Node.js, npm, yarn, and more. With its focus on performance and developer experience, Bun is definitely worth keeping an eye on in 2024.'
  ),
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'TypeScript 5.0: What''s New and Exciting',
    'TypeScript 5.0 brings several new features and improvements, including decorators, const type parameters, and more. These enhancements continue to make TypeScript an essential tool for building robust JavaScript applications.'
  ),
  (
    'aec53558-767e-4408-b4d6-1c1e6f17ffe5',
    'The State of JavaScript Frameworks in 2024',
    'While React remains dominant, frameworks like Svelte and Solid are gaining popularity for their performance and simplicity. Meanwhile, meta-frameworks like Next.js and Remix are becoming increasingly important in the React ecosystem.'
  );