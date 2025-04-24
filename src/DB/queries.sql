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

INSERT INTO users (name, email, age, country, isDisable) 
VALUES 
  ('Ayesha', 'ayesha@mail.com', 27, 'Bangladesh', false),
  ('Rahim', 'rahim123@gmail.com', 35, 'India', true),
  ('Sara', 'sara.uk@gmail.com', 29, 'UK', false),
  ('Mehedi', 'mehedi.ca@gmail.com', 31, 'Canada', false),
  ('Nadia', 'nadia123@gmail.com', 26, 'Australia', true);


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

SELECT * FROM users WHERE country = 'Bangladesh';

SELECT * FROM users WHERE name = 'Ayesha';

SELECT * FROM users WHERE name ILIKE '%ay%';  -- PostgreSQL: ILIKE is case-insensitive

SELECT * FROM users WHERE email = 'rahim123@gmail.com';

SELECT * FROM users
ORDER BY id
LIMIT 10 OFFSET 0;  -- Page 1 (rows 1-10)

SELECT * FROM users
ORDER BY id
LIMIT 10 OFFSET 2;  -- Page 2 (rows 11-20)


SELECT * FROM users
WHERE country = 'Canada'
ORDER BY id
LIMIT 5 OFFSET 0;  -- First 5 users from Canada







