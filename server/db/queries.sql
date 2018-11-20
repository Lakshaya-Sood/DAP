-- INSTALLING UUID PG EXTENTION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- APPLICATION TABLE CREATE
CREATE TABLE application(
 app_id uuid DEFAULT uuid_generate_v4(),
 app_name VARCHAR (20) NOT NULL,
 tours text[] NOT NULL
);

-- TOUR TABLE CREATE
CREATE TABLE tour(
 tour_id uuid DEFAULT uuid_generate_v4(),
 tour_name VARCHAR (20) NOT NULL,
 steps json NOT NULL
);

-- INSERT QUERIES TOUR TABLE
INSERT INTO tour VALUES (uuid_generate_v4(),'First Tour','
    {
        "id": "firstTour",
        "steps": [
            {
                "target": "header",
                "placement": "bottom",
                "title": "Heading",
                "content": "Heading of our application"
            },
            {
                "target": "hello",
                "placement": "right",
                "title": "Hello You!",
                "content": "Used as a greeting or to begin a telephone conversation."
            },
            {
                "target": "welcome",
                "placement": "bottom",
                "title": "Welcome",
                "content": "To greet hospitably and with courtesy or cordiality."
            }
        ]
    }'
);

INSERT INTO tour VALUES (uuid_generate_v4(),'Second Tour','
    {
        "id": "secondTour",
        "steps": [
            {
                "target": "header",
                "placement": "bottom",
                "title": "Heading",
                "content": "Heading of our application"
            },
            {
                "target": "aurora",
                "placement": "right",
                "title": "Aurora Northen Lights Image",
                "content": "Can be seen in the high-latitude regions."
            },
            {
                "target": "good_morning",
                "placement": "bottom",
                "title": "Good Morning",
                "content": "Expressing good wishes on meeting or parting during the morning."
            }
        ]
    }'
);

INSERT INTO tour VALUES (uuid_generate_v4(),'Third Tour','
    {
        "id": "thirdTour",
        "steps": [
            {
                "target": "header",
                "placement": "bottom",
                "title": "Heading",
                "content": "Heading of our application"
            },
            {
                "target": "error",
                "placement": "right",
                "title": "Error 404",
                "content": "To indicate server could not find what was requested."
            },
            {
                "target": "aurora",
                "placement": "bottom",
                "title": "Your inbox",
                "content": "Messages from other users will appear here."
            }
        ]
    }'
);

-- INSERT QUERIES APPLICATION TABLE
INSERT INTO application VALUES (uuid_generate_v4(),'Greeting App','
    {
        "ae7ebd32-7459-4ee4-ba0a-9c80a7b839fb",
        "59ced0af-360e-437c-a670-400fb1a835cc",
        "156df0a6-2a00-4787-a47c-7a0d84d15c67"
    }'
);