CREATE TABLE plantasEmps (
    id SERIAL PRIMARY KEY ,
     pdfplanta VARCHAR(299),
    id_empresa INTEGER NOT NULL ,
    FOREIGN KEY (id_empresa) REFERENCES Emps(id)
);
INSERT INTO plantasEmps (pdfplanta, id_empresa)
VALUES ('pdfplanta', 1);