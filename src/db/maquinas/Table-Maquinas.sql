CREATE TABLE Maquinas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    marca VARCHAR(150) NOT NULL,
    modelo VARCHAR(150) NOT NULL,
    funcao VARCHAR(150) NOT NULL,
    potencia VARCHAR(150) NOT NULL,
    tipocombustivel VARCHAR(150) NOT NULL,
    quantidade INTEGER NOT NULL,
    usodiariohoras INTEGER NOT NULL,
    dataAquisicao DATE NOT NULL,
    id_planta INTEGER NOT NULL,
    FOREIGN KEY (id_planta) REFERENCES Plantas(id)
);
INSERT INTO Maquinas (nome, descricao, id_planta)
VALUES ('Maquina 1', 'Maquina 1', 1);