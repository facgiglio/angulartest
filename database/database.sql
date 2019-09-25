CREATE DATABASE angulartest
use angulartest

CREATE TABLE game
(
    id INT (11) NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR
    (180),
    description VARCHAR
    (255),
    image VARCHAR
    (200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
