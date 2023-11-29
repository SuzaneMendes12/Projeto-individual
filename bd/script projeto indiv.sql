create database projetoindiv;

use projetoindiv;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
sobrenome varchar(45),
email varchar (45),
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

-- alter table usuario add constraint fkGolpeFav foreign key (fkGolpe) references golpe_favorito (idGolpe);


 -- drop database projetoindiv;

insert into jogo (fkUsuario ,derrotas, vitorias ) values
(1, 1,0);

select * from usuario;
select * from jogo;
select * from golpe_favorito;





