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
 tour_name VARCHAR (50) NOT NULL,
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
                "title": "Aurora Northen Lights Image",
                "content": "Can be seen in the high-latitude regions."
            }
        ]
    }'
);

-- INSERT QUERIES APPLICATION TABLE
INSERT INTO application VALUES (uuid_generate_v4(),'Greeting App','
    {
        "3ccf99b8-0406-48cc-be0e-7e22fc1989be",
        "4ba993b5-7a5c-4d97-b8ea-d7d37abe63a1",
        "3fad056e-4685-4b72-a952-4492c048dc1d"
    }'
);