create database AgenciaViagens;

use AgenciaViagens;

create table Cliente (
  id_cli int auto_increment,
  nome varchar(50) not null,
  rg varchar(10) not null,
  cpf char(11) not null,
  dt_nasc date not null,
  email varchar(30) not null,
  senha varchar(30) binary not null,
  constraint pk_cli primary key (id_cli)
);

create table Destino (
  id_dest int,
  cidade varchar(30) not null,
  uf char(2) not null,
  loc_desemb varchar(30) not null,
  constraint pk_dest primary key (id_dest)
);

create table Promocao (
  id_promo int auto_increment,
  destino int,
  desconto decimal(3,2) not null,
  vencimento datetime not null,
  constraint pk_promo primary key (id_promo),
  constraint fk_promo_dest foreign key (destino) references Destino (id_dest)
);

create table Viagem (
  id_viag int auto_increment,
  destino int not null,
  partida datetime not null,
  chegada datetime not null,
  vlr_padrao decimal(7,2) not null,
  constraint pk_viag primary key (id_viag),
  constraint fk_viag_dest foreign key (destino) references Destino (id_dest)
);

create table Adquire (
  id_adq int auto_increment,
  cliente int not null,
  viagem int not null,
  promocao int,
  constraint pk_adq primary key (id_adq),
  constraint fk_adq_cli foreign key (cliente) references Cliente (id_cli),
  constraint fk_adq_viag foreign key (viagem) references Viagem (id_viag),
  constraint fk_adq_promo foreign key (promocao) references Promocao (id_promo)
);

create table Contato (
  id_ctt int auto_increment,
  email varchar(30) not null,
  assunto varchar(100) not null,
  corpo varchar(1000) not null,
  constraint pk_ctt primary key (id_ctt)
);

insert into Destino (id_dest, cidade, uf, loc_desemb) values 
(1, 'São Paulo','SP','Aeroporto de Guarulhos'),
(2, 'Rio de Janeiro','RJ','Aeroporto do Galeão'),
(3, 'Belo Horizonte','MG','Aeroporto de Confins'),
(4, 'Brasília','DF','Aeroporto de Brasília'),
(5, 'Salvador','BA','Aeroporto de Salvador'),
(6, 'Recife','PE','Aeroporto de Recife'),
(7, 'Fortaleza','CE','Aeroporto de Fortaleza');

insert into Promocao (destino, desconto, vencimento) values 
(1,0.5,convert('2021-12-31 00:00:00',datetime)),
(null,0.25,convert('2022-01-05 00:00:00',datetime)),
(6,0.15,convert('2022-01-01 09:00:00',datetime));

insert into Viagem (destino, partida, chegada, vlr_padrao) values 
(1,convert('2021-12-29 08:00:00',datetime),convert('2021-12-29 09:00:00',datetime),250),
(1,convert('2021-12-30 09:00:00',datetime),convert('2021-12-30 10:00:00',datetime),270),
(2,convert('2021-12-30 09:30:00',datetime),convert('2021-12-30 10:20:00',datetime),290),
(2,convert('2021-12-31 14:30:00',datetime),convert('2021-12-31 15:20:00',datetime),290),
(3,convert('2022-01-01 09:30:00',datetime),convert('2022-01-01 10:50:00',datetime),290),
(3,convert('2022-01-02 09:00:00',datetime),convert('2022-01-02 10:05:00',datetime),290),
(4,convert('2021-12-30 11:30:00',datetime),convert('2021-12-30 12:45:00',datetime),290),
(4,convert('2021-12-31 12:30:00',datetime),convert('2021-12-31 13:15:00',datetime),290),
(5,convert('2021-12-29 18:30:00',datetime),convert('2021-12-29 19:15:00',datetime),290),
(5,convert('2021-12-30 16:30:00',datetime),convert('2021-12-30 17:35:00',datetime),290),
(6,convert('2021-12-29 15:45:00',datetime),convert('2021-12-29 16:35:00',datetime),290),
(6,convert('2021-12-31 14:15:00',datetime),convert('2021-12-31 15:30:00',datetime),290),
(7,convert('2021-12-30 09:30:00',datetime),convert('2021-12-30 10:35:00',datetime),290),
(7,convert('2021-12-30 19:05:00',datetime),convert('2021-12-30 20:25:00',datetime),290),
(1,convert('2021-12-31 07:35:00',datetime),convert('2021-12-31 08:45:00',datetime),290);