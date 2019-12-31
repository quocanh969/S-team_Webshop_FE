create database Nhom14_WebShop;
go
use Nhom14_WebShop;

create table users (
	id int identity primary key,
	email nchar(50) unique,
    password nchar(30),
    dial nchar(11),
    address varchar(255),
    status bit,
    type int default 0
);

create table employees (
	id int primary key,
    foreign key (id) references users (id)
);

create table admins (
	id int primary key,
    foreign key (id) references users (id)
);

create table banking_cards (
	id int identity primary key,
    id_user int unique,
    cardNum bigint unique,
    type int,
    foreign key (id_user) references users (id)
);

create table categories (
	id int identity primary key,
    name nvarchar(30),
    status bit,
);

create table products (
	id int identity primary key,
    id_category int,
    name nvarchar(50),
    imgUrl varchar(max),
    description varchar(max),
    price float,
    status int,
    foreign key (id_category) references categories (id)
);

create table invoices (
	id int identity primary key,
    id_customer int,
    status int,
    createDate date,
    estimatedDeliveryDate date,
    total float,
    foreign key (id_customer) references users (id)
);

create table invoiceDetails (
	id_product int,
    id_invoice int,
    quantity int,
    singlePrice float,
    foreign key (id_product) references products (id),
    foreign key (id_invoice) references invoices (id)
);