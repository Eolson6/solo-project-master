CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "incident" (
"id" SERIAL PRIMARY KEY,
"location" 	VARCHAR (100) NOT NULL,
"type" VARCHAR (50) NOT NULL,
"time" time NOT NULL,
"date" date NOT NULL,
"notes" VARCHAR (50)
);

INSERT INTO incident (id, location, type, time, date, notes)
VALUES ('1', 'Edina', 'intersection', '2:30', '01-12-2019', '2 cars');

CREATE TABLE "vehicle" (
"id" SERIAL PRIMARY KEY,
"incident.id" integer UNIQUE NOT NULL,
"vehicle_make" varchar (30) NOT NULL,
"vehicle_year" integer NOT NULL,
"vehicle_model" varchar (30) NOT NULL,
"license_plate" varchar (30) NOT NULL,
"VIN" varchar (30) NOT NULL,
"owner" varchar (30) NOT NULL
);

INSERT INTO vehicle ("id", "incident.id", "vehicle_make", "vehicle_year", "vehicle_model", "license_plate", "VIN", "owner")
VALUES('1', '1', 'JEEP', '2016', 'Compass', 'ASK392', '29ANKD9283', 'John Snow');

CREATE TABLE "witnesses" (
"id" SERIAL PRIMARY KEY,
"incident.id" integer UNIQUE NOT NULL,
"name" varchar (30) NOT NULL,
"phone_number" varchar (12) NOT NULL,
"street" varchar (100) NOT NULL,
"unit" varchar (10),
"city" varchar (50) NOT NULL,
"state" varchar (2) NOT NULL,
"zip" varchar (6) NOT NULL
);

INSERT INTO witnesses ("id", "incident.id", "name", "phone_number", "street", "unit", "city", "state", "zip")
VALUES ('1', '1', 'Christian Laettner', '298-393-3029', '324 N blvd', '', 'Edina', 'MN', '55435');

CREATE TABLE "image" (
"id" SERIAL PRIMARY KEY,
"incident.id" integer UNIQUE NOT NULL,
"image_path" varchar (40) NOT NULL,
"image_description" varchar (100) NOT NULL
);

INSERT INTO image("id", "incident.id", "image_path", "image_description")
VALUES('1', '1', 'newpic.jpg', 'new car');