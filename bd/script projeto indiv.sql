create database projetoindiv;

use projetoindiv;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
sobrenome varchar(45),
email varchar (45) unique,
senha varchar (40)
 -- fkGolpe int
);

create table jogo (
idJogo int primary key auto_increment,
derrotas int,
vitorias int,
fkUsuario int,
constraint FkUser foreign key (fkUsuario) references usuario  (idUsuario)
);

create table golpe_favorito (
idGolpe int primary key auto_increment,
fkUsuario int,
NomeGolpe varchar(10),
constraint FkUsu foreign key (fkUsuario) references usuario  (idUsuario)

);

select * from golpe_FAVORITO;
select * from usuario;
select * from jogo;





select nomeGolpe, count(*) quantidade from golpe_Favorito group by nomeGolpe;

 SELECT idUsuario FROM usuario WHERE senha = 'senha' AND email = 'email';
 
  SELECT idUsuario, nome, email FROM usuario WHERE email = 'suzanedias47@gmail.com' AND senha = '12345678';
  