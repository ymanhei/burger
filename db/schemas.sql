DROP DATABASE IF EXISTS burgers_db;
-- Creates the "favorite_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE burgers (
  id INTEGER(10) not null auto_increment,
  burger_name varchar(100) ,
  devoured boolean ,
  primary key (id)
  );