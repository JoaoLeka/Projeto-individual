create database twenty;
use twenty;


drop table usuario;
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
integrante_favorito varchar(45)
);
select*from usuario;
select integrante_favorito as nome, count(integrante_favorito) as voto from usuario group by integrante_favorito ;

select count(idUsuario) as numeroDeCadastro from usuario;

insert into usuario values
(null, 'Denise Tupac','denise@outlook.com','12345');





create table album(
idAlbum int primary key auto_increment,
nome varchar(45));

insert into album values
(null, 'vessel'),
(null, 'blurryface'),
(null, 'scaled and icy'),
(null, 'regional at best'),
(null, 'self-titled');

create table votos(
fkAlbum int,
foreign key (fkAlbum) references album (idAlbum));
select*from album;
select*from votos;
select*from usuario;

select count(fkalbum) as trench from votos where fkalbum='1';

select al.nome as album, count(vo.fkalbum) as votos from votos as vo
inner join album as al
on al.idalbum=vo.fkalbum group by vo.fkalbum;