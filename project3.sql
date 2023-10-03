CREATE TABLE "project3database" (
    "FacilityID" INT NOT NULL,
    "CampsiteType" VARCHAR,
    "TypeOfUse" VARCHAR,
    "Loop" VARCHAR,
	"CampsiteAccesible" BOOLEAN,
	"CampsiteLongitude" DECIMAL,
	"CampsiteLatitude" DECIMAL,
	"LastUpdatedDate" DATE,
    PRIMARY KEY ("FacilityID")
);
SELECT * 
FROM project3database;

DROP TABLE project3database;
DROP TABLE NorthEast;

CREATE TABLE "northeast"(
    "FacilityID" INT NOT NULL,
	"CampsiteLongitude" DECIMAL,
	"CampsiteLatitude" DECIMAL,
    PRIMARY KEY ("FacilityID")
);

CREATE TABLE "northwest"(
    "FacilityID" INT NOT NULL,
	"CampsiteLongitude" DECIMAL,
	"CampsiteLatitude" DECIMAL,
    PRIMARY KEY ("FacilityID")
);

CREATE TABLE "southeast"(
    "FacilityID" INT NOT NULL,
	"CampsiteLongitude" DECIMAL,
	"CampsiteLatitude" DECIMAL,
    PRIMARY KEY ("FacilityID")
);

CREATE TABLE "southwest"(
    "FacilityID" INT NOT NULL,
	"CampsiteLongitude" DECIMAL,
	"CampsiteLatitude" DECIMAL,
    PRIMARY KEY ("FacilityID")
);