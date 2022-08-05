## 계정 생성 / groupware : 1234
create user 'groupware'@'localhost' identified by '1234';
flush privileges;

## database 생성
create database groupware;

## 계정 권한 부여
grant select, insert, update, delete, create, drop, alter on groupware.* to 'groupware'@'localhost';