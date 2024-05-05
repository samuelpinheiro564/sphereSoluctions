CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    senha VARCHAR(150) NOT NULL,
    membroequipe VARCHAR(150) NOT NULL
);
INSERT INTO usuarios (nome, email, senha, membroequipe) VALUES ('Nome 1', 'Email 1', 'Senha 1', 'Membro Equipe 1');