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