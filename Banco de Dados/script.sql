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

INSERT INTO tbUsuarios (nome, sobrenome, email, login, senha) VALUES
('Joubert', 'Oliveira', 'joubert@gmail.com', 'joubert1', 'jouber123' );


SELECT * FROM tbUsuarios;

CREATE TABLE tbIndicacoes (
  idIndicacao INT AUTO_INCREMENT,
  nomeArtista VARCHAR(45),
  nomeMusica VARCHAR(45),
  fkUsuarioMusica INT,
  PRIMARY KEY (idIndicacao)
) AUTO_INCREMENT = 1000;

SELECT * FROM tbIndicacoes;

INSERT INTO tbIndicacoes (nomeArtista, nomeMusica, fkUsuarioMusica) VALUES
('Artista1', 'Musica1', 1),
('Artista2', 'Musica2', 2),
('Artista1', 'Musica1', 4);

CREATE TABLE tbColaborador (
  idColaborador INT AUTO_INCREMENT,
  nomeColaborador VARCHAR(45),
  emailColaborador VARCHAR(45),
  cargoColaborador VARCHAR(45),
  PRIMARY KEY (idColaborador)
) AUTO_INCREMENT = 2000;

CREATE TABLE tbSuporte (
  idSuporte INT AUTO_INCREMENT,
  dataSuporte DATETIME DEFAULT CURRENT_TIMESTAMP ,
  fkColaborador INT,
  fkUsuarioSuporte INT,
  PRIMARY KEY (idSuporte),
    FOREIGN KEY (fkColaborador)
    REFERENCES tbColaborador (idColaborador),
    FOREIGN KEY (fkUsuarioSuporte)
    REFERENCES tbUsuarios (idUsuario)
) AUTO_INCREMENT = 3000;


CREATE TABLE tbContatos (
  idContato INT AUTO_INCREMENT,
  nomeContato VARCHAR(45),
  emailContato VARCHAR(45),
  telefoneContato VARCHAR(45),
  mensagem TEXT,
  fkColaboradorContato INT,
  PRIMARY KEY (idContato)
) AUTO_INCREMENT = 4000;



SELECT 
tbUsuarios.nome, 
tbUsuarios.sobrenome, 
tbIndicacoes.nomeArtista, 
tbIndicacoes.nomeMusica 
FROM tbUsuarios
JOIN tbIndicacoes 
ON tbIndicacoes.fkUsuarioMusica = tbUsuarios.idUsuario
ORDER BY nomeMusica;


SELECT tbIndicacoes.nomeArtista, tbIndicacoes.nomeMusica, COUNT(nomeMusica) as 'qtdMusica' FROM tbIndicacoes 
GROUP BY nomeMusica 
ORDER BY qtdMusica DESC;

