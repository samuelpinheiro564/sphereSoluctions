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