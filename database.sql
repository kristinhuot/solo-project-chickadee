-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE IF EXISTS "session" CASCADE;
DROP TABLE IF EXISTS "shared_flights" CASCADE;
DROP TABLE IF EXISTS "care_methods" CASCADE;
DROP TABLE IF EXISTS "flights" CASCADE;
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "custom_care_methods"
---------------------------------------------------------------------------


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR, 
    "pronouns" VARCHAR,
    "birthday" DATE,
    "location" VARCHAR, 
    "photo_url" VARCHAR, 
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
	"user_id" int REFERENCES "user" ON DELETE CASCADE,
	"followed_user_id" int REFERENCES "user" ON DELETE CASCADE  
);

CREATE TABLE "care_methods" (
	"id" SERIAL PRIMARY KEY, 
	"user_id" int REFERENCES "user" ON DELETE CASCADE, 
	"time_together" BOOLEAN DEFAULT FALSE,
	"tell_me_nice_things" BOOLEAN DEFAULT FALSE,
	"send_me_nice_things" BOOLEAN DEFAULT FALSE,
	"do_nice_things_for_me" BOOLEAN DEFAULT FALSE,
	"hugs_please" BOOLEAN DEFAULT FALSE,
	"surprises" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "custom_care_methods" (
	"id" SERIAL PRIMARY KEY, 
	"custom_text" VARCHAR (300),
	"user_id" int REFERENCES "user" ON DELETE CASCADE 
	);


SELECT
	flights.id AS flight_id,
	flights.flight_title,
    flights.flight_details,
    flights.flight_date,
	flights.user_id AS flight_owner_id,
	shared_flights.id AS shared_flight_id,
    shared_flights.user_id, 
    shared_flights.followed_user_id,
	"user".name, 
    "user".pronouns, 
    "user".photo_url,
    "user".location
FROM shared_flights
	JOIN flights
	  ON shared_flights.followed_user_id = flights.user_id
	JOIN "user"
	  ON flights.user_id = "user".id  
WHERE shared_flights.user_id = $1
            ORDER BY "flight_date" DESC; 