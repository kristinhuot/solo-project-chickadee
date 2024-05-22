-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

DROP TABLE IF EXISTS "session" CASCADE;
DROP TABLE IF EXISTS "shared_flights" CASCADE;
DROP TABLE IF EXISTS "care_methods" CASCADE;
DROP TABLE IF EXISTS "flights" CASCADE;
DROP TABLE IF EXISTS "user" CASCADE;

---------------------------------------------------------------------------


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR, 
    "pronouns" VARCHAR,
    "birthday" DATE,
    "location" VARCHAR, 
    "photo_URL" VARCHAR, 
    "share_code" VARCHAR  
);
CREATE TABLE "flights" (
	"id" SERIAL PRIMARY KEY, 
    "flight_title" VARCHAR, 
    "flight_details" VARCHAR,
    "flight_date" DATE,
    "user_id" int REFERENCES "user" ON DELETE CASCADE 
   
);
CREATE TABLE "shared_flights" (
	"id" SERIAL PRIMARY KEY, 
	"flight_id" int REFERENCES "flights" ON DELETE CASCADE, 
	"shared_with_user_id" INTEGER, 
	"user_id" int REFERENCES "user" ON DELETE CASCADE 
);

CREATE TABLE "care_methods"(
	"id" SERIAL PRIMARY KEY, 
	"user_id" int REFERENCES "user" ON DELETE CASCADE, 
	"care_method_text" VARCHAR (250)
);

