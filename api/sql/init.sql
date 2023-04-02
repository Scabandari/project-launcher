CREATE TABLE user_types (
  id SERIAL PRIMARY KEY,
  user_type_name TEXT NOT NULL UNIQUE
);

INSERT INTO user_types (user_type_name) VALUES ('admin'), ('customer'), ('guest');

CREATE TABLE users (
  "id" SERIAL PRIMARY KEY,
  "user_type_id" INTEGER NOT NULL,
  "email" VARCHAR(100) UNIQUE NULL,
  "username" VARCHAR(50) NOT NULL UNIQUE,
  "password" VARCHAR(50) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

	CONSTRAINT "user_user_type_id_fkey" FOREIGN KEY ("user_type_id") 
			REFERENCES "user_types"("id") ON DELETE CASCADE
);

CREATE TABLE "profiles" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL,
  "bio" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

  CONSTRAINT "profile_user_id_fkey" FOREIGN KEY ("user_id") 
      REFERENCES "users"("id") ON DELETE CASCADE
);

CREATE TABLE "posts" (
  "id" SERIAL PRIMARY KEY,
  "author_id" INT NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "content" TEXT,
  "published" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

  CONSTRAINT "post_author_id_fkey" FOREIGN KEY ("author_id") 
      REFERENCES "users"("id") ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION update_updatedat()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE OR REPLACE FUNCTION create_update_trigger(table_name text)
RETURNS void AS $$
DECLARE
  trigger_name text;
BEGIN
  trigger_name := table_name || '_update_trigger';
  EXECUTE format('CREATE TRIGGER %I
    BEFORE UPDATE ON %I
    FOR EACH ROW
    EXECUTE FUNCTION update_updatedat()', trigger_name, table_name);
END;
$$ LANGUAGE plpgsql;

-- This one has to be kept and run everytime we add a new table
DO $$
DECLARE
  name_of_table text;
BEGIN
  FOR name_of_table IN SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema='public' AND table_type='BASE TABLE' 
    LOOP
        PERFORM create_update_trigger(name_of_table);
    END LOOP;
END$$;


INSERT INTO "users" (user_type_id, email, username, password) VALUES
	(
		(SELECT id FROM user_types WHERE user_type_name = 'admin'),
		'ryan3nichols@gmail.com', 'god', 'password'
	),
	(
		(SELECT id FROM user_types WHERE user_type_name = 'customer'),
		'cust1@email.com', 'customer1', 'password'
	),
	(
		(SELECT id FROM user_types WHERE user_type_name = 'customer'),
		'cust2@email.com', 'customer2', 'password'
	),
	(
		(SELECT id FROM user_types WHERE user_type_name = 'customer'),
		'cust3@email.com', 'customer3', 'password'
	)
;


INSERT INTO "profiles" (user_id, bio) VALUES
	(
		(SELECT id FROM "users" WHERE username = 'customer1'),
    'Bio for customer1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	),
	(
		(SELECT id FROM "users" WHERE username = 'customer2'),
    'Bio for customer2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	),
	(
		(SELECT id FROM "users" WHERE username = 'customer3'),
    'Bio for customer3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	)
;


INSERT INTO "posts" (author_id, title, content, published) VALUES
	(
		(
			SELECT id FROM "users" WHERE username = 'customer1'
		),
		'Post 1',
		'customer1j''s first post Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		true
	),
	(
		(
			SELECT id FROM "users" WHERE username = 'customer1'
		),
		'Post 1',
		'customer2''s first post Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		true
	),
	(
		(
			SELECT id FROM "users" WHERE username = 'customer1'
		),
		'Post 3',
		'customer3''s second ipsum dolor sit amet, consectetur adipiscing elit.',
		true
	)
;




