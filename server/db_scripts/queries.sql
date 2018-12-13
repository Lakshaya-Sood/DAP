-- INSTALLING UUID PG EXTENTION
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- APPLICATION TABLE CREATE
CREATE TABLE application(
 app_id uuid DEFAULT uuid_generate_v4(),
 app_name VARCHAR (20) NOT NULL,
 styles JSON NOT NULL,
 created_on TIMESTAMP NOT NULL,
 updated_on TIMESTAMP NOT NULL
);

-- TOUR TABLE CREATE
CREATE TABLE tour(
 tour_id uuid DEFAULT uuid_generate_v4(),
 tour_name VARCHAR (50) NOT NULL,
 app_id VARCHAR(36) NOT NULL,
 created_on TIMESTAMP NOT NULL,
 steps JSON NOT NULL
);

-- INSERT QUERIES APPLICATION TABLE
INSERT INTO application VALUES (uuid_generate_v4(),'Greeting App','{"fontSize":"16px","fontFamily":"arial"}',current_timestamp,current_timestamp);

-- INSERT QUERIES TOUR TABLE
INSERT INTO tour VALUES (uuid_generate_v4(),'First Tour','90cf4642-2f52-41b3-aebd-f46eacc2bfc5',current_timestamp,'
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
INSERT INTO tour VALUES (uuid_generate_v4(),'Second Tour','90cf4642-2f52-41b3-aebd-f46eacc2bfc5',current_timestamp,'
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
INSERT INTO tour VALUES (uuid_generate_v4(),'Third Tour','90cf4642-2f52-41b3-aebd-f46eacc2bfc5',current_timestamp,'
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