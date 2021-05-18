create database TechnoSpot;

use TechnoSpot;

CREATE TABLE tbUsuarios (
  idUsuario int AUTO_INCREMENT,
  nome varchar(25),
  sobrenome varchar(25),
  email varchar(45),
  login varchar(20),
  senha varchar(20),
  PRIMARY KEY (idUsuario)
);

SELECT * FROM tbUsuarios;