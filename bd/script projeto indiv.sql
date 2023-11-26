create database projetoindiv;

use projetoindiv;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
sobrenome varchar(45),
email varchar (45),
senha varchar (40),
fkGolpe int
);

select * from usuario;

create table jogo (
idJogo int primary key auto_increment,
nmrgolpes int,
derrotas int,
vitorias int,
fkUsuario int,
constraint FkUser foreign key (fkUsuario) references usuario  (idUsuario)
);

create table golpe_favorito (
idGolpe int,
idUsuario int,
primary key (idGolpe, idUsuario),
NomeGolpe varchar(10),
CONSTRAINT chGolpe CHECK (NomeGolpe IN ('Soco', 'Chute', 'Joelhada'))
);
 


alter table usuario add constraint fkGolpeFav foreign key (fkGolpe) references golpe_favorito (idGolpe);


insert into usuario (nome, sobrenome, email,senha ) values
('nicolly', 'otaria','nicolybobona@gmail.com','1234');


 -- drop database projetoindiv;






