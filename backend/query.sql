create schema usuarios;
use usuarios;

create table usuario (
	idUser int auto_increment primary key not null,
    name varchar(50) not null,
    lastNames varchar(50) not null,
    email varchar(50) not null,
    password varchar(15) not null
);

create table pedido (
	nroPedido int not null,
    usuario_idUser int
);

alter table pedido add foreign key (usuario_idUser) references usuario(idUser);

-- alter user 'root'@'localhost' identified with mysql_native_password by '1234';
-- flush privileges;

select * from usuario;
select * from pedido;

insert into usuario(name, lastNames, email, password) values 
('Erick', 'Obregón Díaz', 'erick.obregon@gmail.com', '1234'),
('Pablo', 'Torres Cáceres', 'pablo.torres@gmail.com', '5678'),
('Javier', 'Malbran Quiróz', 'javier.malbran@gmail.com', '4321');