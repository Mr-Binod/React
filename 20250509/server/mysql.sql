-- Active: 1746758475443@@127.0.0.1@3306
select * from hello;

-- board(id, name)
create table board(id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) not NULL);

DESC hello;

drop table hello;

INSERT INTO board (name) values ('점심먹기');


select * from board