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