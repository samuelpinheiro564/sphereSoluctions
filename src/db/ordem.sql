primeiro crie a tabela da pasta maquinas ,
CREATE TABLE Maquinas (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(150) NOT NULL,
    modelo VARCHAR(150) NOT NULL,
    funcao VARCHAR(150) NOT NULL,
    potencia VARCHAR(150) NOT NULL,
    tipocombustivel VARCHAR(150) NOT NULL,
    quantidade INTEGER NOT NULL,
    usodiariohoras INTEGER NOT NULL,
    dataAquisicao DATE NOT NULL
);
INSERT INTO Maquinas (marca, modelo, funcao, potencia, tipocombustivel, quantidade, usodiariohoras, dataAquisicao) VALUES ('Marca 1', 'Modelo 1', 'Funcao 1', 'Potencia 1', 'Tipo Combustivel 1', 1, 1, '2021-01-01');

segundo crie a tabela da pasta  Empresa ,

CREATE TABLE Emps (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    cep VARCHAR(150) NOT NULL,
    cnpj VARCHAR(150) NOT NULL,
    senha VARCHAR(150) NOT NULL,
id_maquina INTEGER NOT NULL ,
    FOREIGN KEY (id_maquina) REFERENCES Maquinas(id)
);
INSERT INTO Emps (nome, email, cep, cnpj, senha, id_maquina) VALUES ('Nome 1', 'Email 1', 'Cep 1', 'Cnpj 1', 'Senha 1', 1);

terceiro crie a tabela da pasta  dicasEmp ,

CREATE TABLE dicasEmp (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    id_empresa INTEGER NOT NULL,
    estrelas INTEGER NOT NULL,
    FOREIGN KEY (id_empresa) REFERENCES Emps(id)
);
INSERT INTO dicasEmp (titulo, descricao, id_empresa, estrelas)
VALUES ('Dica 1', 'Dica 1', 1, 5);

quarto crie a tabela da pasta  dicasMaq ,

CREATE TABLE dicasMaq (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    id_maquina INTEGER NOT NULL,
    estrelas INTEGER NOT NULL CHECK (estrelas >= 0 AND estrelas <= 5),
    FOREIGN KEY (id_maquina) REFERENCES Maquinas(id)
);
INSERT INTO dicasMaq (titulo, descricao, id_maquina, estrelas)
VALUES ('Dica 1', 'Dica 1', 1, 5);

A qualquer momento pode criar a tabela da pasta UsuariosADM.

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(150) NOT NULL,
    membroequipe VARCHAR(150) NOT NULL
);
INSERT INTO usuarios (nome, email, senha, membroequipe) VALUES ('Nome 1', 'Email 1', 'Senha 1', 'Membro Equipe 1');


se tiver tempo pode criar a tabela da pasta plantasEmps,