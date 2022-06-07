create database twenty;
use twenty;



create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
integrante_favorito varchar(45)
);

create table galeria(
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
imagem varchar (1000));

select*from usuario;

select us.nome as nome, ga.imagem as arte from galeria as ga
inner join usuario as us
on us.idUsuario=ga.fkusuario;



select*from usuario;

-- contagem dos integrantes
select integrante_favorito as nome, count(integrante_favorito) as voto from usuario group by integrante_favorito ;







create table album(
idAlbum int primary key auto_increment,
nome varchar(45));

insert into album values
(null, 'trench'),
(null, 'blurryface'),
(null, 'scaled and icy'),
(null, 'regional at best'),
(null, 'self-titled'),
(null, 'vessel');

create table votos(
fkAlbum int,
foreign key (fkAlbum) references album (idAlbum));

select*from votos;
insert into votos values
('1'),
('2'),
('3'),
('4'),
('5'),
('6');

select*from album;
select*from votos;
select*from usuario;


-- votos dos albuns
select al.nome as album, count(vo.fkalbum) as votos from votos as vo
inner join album as al
on al.idalbum=vo.fkalbum group by vo.fkalbum;