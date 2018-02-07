<<<<<<< HEAD
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  burgerName VARCHAR(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
=======
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL, 
  burgerName VARCHAR(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
>>>>>>> a390b8f8cb6b2cffb83c4b81d63f6829e4d83d20
);