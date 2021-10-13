create database projeto_entra21;

use projeto_entra21;

create table aluno(
idAluno          int not null auto_increment primary key,
nomeCompleto     varchar (100),
cpf              varchar(11),
identidade       varchar(15)
);

create table dadoPessoal(
idAluno					        int not null,
nomeDoPai                       varchar (100),
nomeDaMae                       varchar (100),
dataDeNascimento                date,
cidadeDeNascimento              varchar (30),
estadoDeNascimento              varchar (2),
dataEmissaoDaIdentidade         date,
orgaoExpedidorDaIdentidade      varchar (50),
idade                           int (2),
religiao                        varchar (50),
tipoSanguineo                   varchar (2)
);

create table contato(
idAluno				    int not null,
numeroCelular			int (11),
numeroResidencial		int (11),
numeroDeFamiliar		int (11),
email					varchar (50)
);

create table endereco(
idAluno			    	int not null,
cep						int (8),
rua						varchar (50),
bairro					varchar (50),
cidade					varchar (50),
estado					Varchar (2)
);

create table escolaridade(
idAluno						   int not null,
ensinoMedioSuperior            varchar (20),
anoDeConclusaoEscola           date,
escola_onde_concluiu           varchar (50)
);

create table renda(
idAluno				  int not null,
profissaoDoPai        varchar (50),
profissaoDaMae        varchar (50),
rendaFamiliar         int (5)
);

create table turma(
idTurma				int not null primary key,
nome   		        varchar (50),   
professor   		varchar (50),   
idAluno                int not null
);


alter table contato 
add constraint FK_CONTATOALUNO
foreign key (idAluno) references aluno(idAluno);

alter table endereco 
add constraint FK_CONTATOENDERECO
foreign key (idAluno) references aluno(idAluno);

alter table escolaridade 
add constraint FK_CONTATOESCOLARIDADE
foreign key (idAluno) references aluno(idAluno);

alter table renda 
add constraint FK_CONTATORENDA
foreign key (idAluno) references aluno(idAluno);

alter table dadoPessoal 
add constraint FK_DADOSALUNO
foreign key (idAluno) references aluno(idAluno);

alter table turma
add constraint FK_TURMAALUNO
foreign key (idAluno) references aluno(idAluno);


-- insert into aluno ( nomeCompleto, cpf, identidade )
-- values ( "Welinton Aires", "12345678912", "123456798123456", 123456);
-- 
-- insert into aluno ( nomeCompleto, cpf, identidade, numeroInscricao )
-- values ( "Maycon Mendes", "12345678912", "123456798123456", 123456);
-- 
-- insert into contato ( idAluno, numeroCelular, numeroResidencial, numeroDeFamiliar, email )
-- values ( 1, 123456789, 123456789, 123456789, "asdlfkajsdflkasdj@gmail.com");
-- 
-- insert into endereco ( idAluno, cep, rua, bairro, cidade, estado )
-- values ( 1, 12345612, "123456789", "123456789", "123456789", "sc");
-- 
-- insert into escolaridade ( idAluno, ensinoMedioSuperior, anoDeConclusaoEscola, escolaOndeConcluiu )
-- values ( 1, "asdlfkadlfka" , "2011/11/11", "asdfasdfa");
-- 
-- insert into renda ( idAluno, profissaoDo_pai, profissaoDaMae, rendaFamiliar)
-- values ( 1, "sdfsdfad", "asdfasdfa", 5000 );
-- 
-- insert into turma ( idTurma, idAluno )
-- values ( 001, 1, 2 );


select * from aluno;
select * from contato;
select * from endereco;
select * from escolaridade;
select * from renda;
select * from turma;


-- drop table contato;
-- drop table endereco;
-- drop table escolaridade;
-- drop table renda;
-- drop table turma;
