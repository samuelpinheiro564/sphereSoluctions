const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 4000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "spheresoluctions",
  password: "ds564",
  port: 7007,
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`funcionando normalmente ${PORT}🚀`);
});

app.get("/dicasEmp", async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM dicasEmp");
      res.status(201).json({message:response.rows});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao selecionar todas as dicas"});
        }
}
);

app.get("/dicasEmp/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a dica com o ID fornecido existe
        const checkDica = await pool.query("SELECT * FROM dicasEmp WHERE id = $1", [id]);
        if (checkDica.rows.length === 0) {
            // Se a dica não existe, retorne um erro
            return res.status(404).json({ message: "Dica não encontrada" });
        }

        // Se a dica existe, retorne os dados da dica
        const response = await pool.query("SELECT * FROM dicasEmp WHERE id = $1", [id]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar dica por id" });
    }
}
);

app.get("/dicasEmp/:id_empresa/:estrelas", async (req, res) => {
    try {
        const { id_empresa, estrelas } = req.params;

        // Consulta SQL para buscar as dicas com base no ID da empresa e na quantidade de estrelas
        const response = await pool.query("SELECT * FROM dicasEmp WHERE id_empresa = $1 AND estrelas = $2", [id_empresa, estrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada" });
        }

        // Se a dica foi encontrada, retorne os dados da dica
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por empresa e estrelas" });
    }
}
);


app.get("/dicasEmp/id_empresa/:id_empresa", async (req, res) => {
    try {
        const { id_empresa } = req.params;

        // Consulta SQL para buscar as dicas com base no ID da empresa
        const response = await pool.query("SELECT * FROM dicasEmp WHERE id_empresa = $1", [id_empresa]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada" });
        }

        // Se a dica foi encontrada, retorne os dados da dica
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por empresa" });
    }
}
);

app.post("/dicasEmp", async (req, res) => {
    try {
        const { id_empresa, titulo, descricao, estrelas } = req.body;

        // Verificar se a dica já existe com base no título
        const checkDica = await pool.query("SELECT * FROM dicasEmp WHERE titulo = $1", [titulo]);

        if (checkDica.rows.length > 0) {
            // Se a dica já existe, retorne um erro
            return res.status(400).json({ message: "Esta dica já está cadastrada." });
        }

        // Se a dica não existir, adicione-a ao banco de dados
        const response = await pool.query("INSERT INTO dicasEmp (id_empresa, titulo, descricao, estrelas) VALUES ($1, $2, $3, $4)", [id_empresa, titulo, descricao, estrelas]);

        if(response.rowCount == 0){
            return res.status(400).json({ message: "Erro ao adicionar dica" });
        }
        res.status(201).json({ message: "Dica adicionada com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao adicionar dica" });
    }
}
);

app.put("/dicasEmp/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, estrelas } = req.body;

        const response = await pool.query("UPDATE dicasEmp SET titulo = $1, descricao = $2, estrelas = $3 WHERE id = $4", [titulo, descricao, estrelas, id]);

        if(response.rowCount == 0){
            return res.status(400).json({ message: "Erro ao atualizar dica" });
        }
        res.status(201).json({ message: "Dica atualizada com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao atualizar dica" });
    }
}
);

app.delete("/dicasEmp/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a dica com o ID fornecido existe
        const checkDica = await pool.query("SELECT * FROM dicasEmp WHERE id = $1", [id]);
        if (checkDica.rows.length === 0) {
            // Se a dica não existe, retorne um erro
            return res.status(404).json({ message: "Dica não encontrada" });
        }

        // Se a dica existe, exclua-a do banco de dados
        const response = await pool.query("DELETE FROM dicasEmp WHERE id = $1", [id]);

        if(response.rowCount == 0){
            return res.status(400).json({ message: "Erro ao excluir dica" });
        }
        res.status(201).json({ message: "Dica excluída com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao excluir dica" });
    }
}
);
