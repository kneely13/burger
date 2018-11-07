-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;

USE sofs3ws8waea34a1;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
id INT AUTO_INCREMENT,
burger_name VARCHAR (25),
devoured BOOLEAN,
PRIMARY KEY(id)
);

SELECT * FROM burgers;