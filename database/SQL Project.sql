create database project;
use project;

create table student(
id                              int not null auto_increment primary key,
nomeCompleto    				varchar (100),
cpf              				varchar(11),
identidade       				varchar(15),
nomeDoPai                       varchar (100),
nomeDaMae                       varchar (100),
dataDeNascimento                varchar (10),
cidadeDeNascimento              varchar (30),
estadoDeNascimento              varchar (2),
emissaoDaIdentidade             varchar (10),
orgaoExpedidorDaIdentidade      varchar (50),
idade                           int (2),
religiao                        varchar (50),
tipoSanguineo                   varchar (2),
numeroCelular		         	varchar (15),
numeroResidencial	        	varchar (11),
numeroDeFamiliar	        	varchar (11),
email					        varchar (50),
cep						        int (9),
rua						        varchar (50),
bairro					        varchar (50),
cidade					        varchar (50),
estado					        varchar (2),
grauDeFormacao                  varchar (20),
anoDeConclusao                  varchar (10),
nomeDaEscola                    varchar (50),
profissaoDoPai                  varchar (50),
profissaoDaMae                  varchar (50),
rendaFamiliar                   int (5),
nomeDaTurma 					varchar(50),
professor						varchar(50)
);

create table class(
id					int not null auto_increment primary key,
nome   		        varchar (50),   
professor   		varchar (50)
);