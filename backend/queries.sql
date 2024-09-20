PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS ad (
	id INTEGER PRIMARY KEY,
   	title TEXT NOT NULL,
    description TEXT NOT NULL,
    author TEXT NOT NULL,
    price REAL NOT NULL,
    creation_date TEXT NOT NULL,
    img_url TEXT NOT NULL,
    city TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS category (
    id INTEGER PRIMARY KEY,
   	name TEXT NOT NULL
);






/*
ALTER TABLE ad ADD COLUMN category_id INTEGER REFERENCES category(id);
SELECT * FROM ad WHERE city = 'Bordeaux';
SELECT * FROM ad;
DELETE FROM ad WHERE price > 600;
SELECT AVG(price) FROM ad where city = 'Paris';
INSERT INTO category (name) VALUES ('vetement');
INSERT INTO category (name) VALUES ('voiture');
INSERT INTO category (name) VALUES ('autre');
UPDATE ad SET category_id = 1;

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Bordeaux'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Bordeaux'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Bordeaux'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Bordeaux'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Bordeaux'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Paris'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);

INSERT INTO ad (
    title,
    description,
    author,
    price,
    creation_date,
    img_url,
    city
)
VALUES (
    'Bike',
    'Bike in good condition',
    'John',
    100,
    '2021-01-01',
    'https://www.bike.com',
    'Lyon'
);