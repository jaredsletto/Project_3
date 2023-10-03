import sqlite3
import json

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('mydatabase.db')
cursor = conn.cursor()

# Create a table to store the JSON data
cursor.execute('''
    CREATE TABLE IF NOT EXISTS df_table (
        FacilityID INTEGER PRIMARY KEY,
        CampsiteType TEXT,
        TypeOfUse TEXT,
        Loop TEXT,
        CampsiteAccesible BOOLEAN,
        CampsiteLongitude FLOAT,
        CampsiteLatitude FLOAT,
        LastUpdatedDate DATETIME
    )
''')

# Read and parse the JSON data from a file (or from a string)
with open('final_data.json', 'r') as json_file:
    data = json.load(json_file)

# Insert data from JSON into the SQLite table
for item in data:
    cursor.execute('''
        INSERT INTO df_table (FacilityID, CampsiteType, TypeOfUse, Loop, CampsiteAccesible, CampsiteLongitude, CampsiteLatitude, LastUpdatedDate)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ''', (item['FacilityID'], item['CampsiteType'], item['TypeOfUse'], item['Loop'], item['CampsiteAccesible'], item['CampsiteLongitude'], item['CampsiteLatitude'], item['LastUpdatedDate']))

# Commit the changes and close the connection
conn.commit()
conn.close()