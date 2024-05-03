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