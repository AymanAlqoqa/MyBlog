BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  password VARCHAR NOT NULL
);
INSERT INTO users (email, first_name, last_name, password) values
('aalqouqa@gmail.com', 'Ayman', 'AlQoqa', '$2b$10$UE5vZ/aMWJksAMCVVSaKZupzs9yGkCrY0utDtnIBuPiXp/HfS/Zbi');
COMMIT;