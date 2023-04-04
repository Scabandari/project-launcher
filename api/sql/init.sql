CREATE TABLE user_types (
  id SERIAL PRIMARY KEY,
  user_type_name TEXT NOT NULL UNIQUE
);

CREATE TABLE users (
  "id" SERIAL PRIMARY KEY,
  "user_type_id" INTEGER NOT NULL,
  "email" VARCHAR(100) UNIQUE NULL,
  "username" VARCHAR(50) NOT NULL UNIQUE,
  "password" VARCHAR(260) NOT NULL,
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
  "user_id" INT NOT NULL,
  "title" VARCHAR(255) NOT NULL,
  "content" TEXT,
  "published" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP(3) NOT NULL DEFAULT NOW(),

  CONSTRAINT "post_user_id_fkey" FOREIGN KEY ("user_id") 
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




