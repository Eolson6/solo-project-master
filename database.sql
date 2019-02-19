CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "incident" (
"id" SERIAL PRIMARY KEY,
"incident_type" VARCHAR,
"location_type" VARCHAR (100),
"time" VARCHAR (50),
"notes" VARCHAR,
"date" date,
"street" VARCHAR,
"city" VARCHAR,
"state" VARCHAR,
"person_id" VARCHAR,
"zip_code" VARCHAR
);


INSERT INTO incident ("id", "incident_type", "location_type", "time", "date", "notes", "street", "city", "state", "person.id")
VALUES ('1', 'vehicle','intersection', '2:30', '01-12-2019', '2 cars', '123 BLVD', 'edina', 'minnesota', '1');

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

INSERT INTO incident ("id", "incident_type", "location_type", "time", "date", "notes", "street", "city", "state", "person_id", "zip_code")
VALUES ('1', 'vehicle','intersection', '2:30', '01-12-2019', '2 cars', '123 BLVD', 'edina', 'minnesota', '1', '49348);
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

INSERT INTO incident ("id", "incident_type", "location_type", "time", "date", "notes", "street", "city", "state", "person_id", "zip_code")
VALUES ('1', 'vehicle','intersection', '2:30', '01-12-2019', '2 cars', '123 BLVD', 'edina', 'minnesota', '1', '49348');

CREATE TABLE "image" (
"id" SERIAL PRIMARY KEY,
"incident.id" integer UNIQUE NOT NULL,
"image_path" varchar (40) NOT NULL,
"image_description" varchar (100) NOT NULL
);

INSERT INTO image("id", "incident.id", "image_path", "image_description")
VALUES('1', '1', 'newpic.jpg', 'new car');
 