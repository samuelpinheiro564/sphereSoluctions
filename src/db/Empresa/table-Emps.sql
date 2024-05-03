CREATE TABLE Emps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    cep VARCHAR(150) NOT NULL,
    cnpj VARCHAR(150) NOT NULL,
    id_planta INTEGER NOT NULL,
    FOREIGN KEY (id_planta) REFERENCES Plantas(id),
id_maquina INTEGER NOT NULL ,
    FOREIGN KEY (id_maquina) REFERENCES Maquinas(id)
);
INSERT INTO Emps (nome, email, cep, cnpj, id_planta, id_maquina)
VALUES ('Empresa 1', 'empresa1@gmail.com', 12345678, 12345678901234, 1, 1);