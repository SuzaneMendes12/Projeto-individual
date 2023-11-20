create database projetoindiv;
use projetoindiv;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
sobrenome varchar(45),
email varchar (45),
senha varchar (40),
fkSuporte int,
