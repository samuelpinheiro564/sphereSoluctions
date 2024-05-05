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



