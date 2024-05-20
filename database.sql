-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "name" VARCHAR, 
    "pronouns" VARCHAR,
    "birthday" DATE,
    "location" VARCHAR, 
    "share_code" VARCHAR  
);
CREATE TABLE "flights" (
	"id" SERIAL PRIMARY KEY, 
    "flight_title" VARCHAR, 
    "flight_details" VARCHAR,
    "flight_date" DATE,
    "user_id" int REFERENCES "user"
   
);
CREATE TABLE "shared_flights" (
	"id" SERIAL PRIMARY KEY, 
	"flight_id" int REFERENCES "flights",
	"shared_with_user_id" INTEGER, 
	"user_id" int REFERENCES "user"
);

CREATE TABLE "care_methods"(
	"id" SERIAL PRIMARY KEY, 
	"user_id" int REFERENCES "user",
	"care_method_text" VARCHAR (250)
);

UPDATE "user" 
SET 
	name ='Kristin',
	pronouns = 'she/her', 
	birthday = '11/16/1991',
	location = 'Minneapolis'
WHERE id = 1; 


INSERT INTO "flights"
(flight_title, flight_details, flight_date, user_id)
VALUES
('test', 'testing', '05/20/2024', 1);