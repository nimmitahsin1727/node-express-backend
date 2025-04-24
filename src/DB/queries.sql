-- Create users table
CREATE TABLE users (
id SERIAL PRIMARY KEY, 
name VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
age INT NOT NULL,
country VARCHAR(50) NOT NULL,
isDisable BOOLEAN NOT NULL DEFAULT false
)

-- Select all users
SELECT * from users;

-- Insert users
INSERT INTO users (name, email, age, country) 
VALUES ('Arif', 'b@gmail.com', 28, 'Bangladesh');

INSERT INTO users (name, email, age, country, isDisable) 
VALUES ('Lina', 'lina.bd@gmail.com', 25, 'Bangladesh', false);

INSERT INTO users (name, email, age, country, isDisable) 
VALUES ('Karim', 'karim786@gmail.com', 32, 'Canada', true);

INSERT INTO users (name, email, age, country, isDisable) 
VALUES ('Tania', 'tania.world@gmail.com', 30, 'UK', false);

INSERT INTO users (name, email, age, country, isDisable) 
VALUES ('Taia', 'taia.world@hotmail.com', 30, 'KSA', false);

-- Drop users table
DROP TABLE users;

-- Alter new constraint
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);

-- Different types of queries
SELECT * from users WHERE id = 6;

SELECT * from users WHERE country = 'UK';

SELECT * from users WHERE email LIKE '%@gmail.com';

-- Update users
UPDATE users SET email = 'alamariful1727@gmail.com' where id = 6;

-- Delete users
DELETE from users WHERE id = 5;

