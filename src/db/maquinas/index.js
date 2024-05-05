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

app.get("/Maquinas", async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM Maquinas");
      res.status(201).json({message:response.rows});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao selecionar todas as máquinas"});
        }
}
);

app.get("/Maquinas/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a máquina com o ID fornecido existe
        const checkMaquina = await pool.query("SELECT * FROM Maquinas WHERE id = $1", [id]);
        if (checkMaquina.rows.length === 0) {
            // Se a máquina não existe, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina existe, retorne os dados da máquina
        const response = await pool.query("SELECT * FROM Maquinas WHERE id = $1", [id]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por id" });
    }
}
);

app.get("/Maquinas/:nome", async (req, res) => {
    try {
        const { nome } = req.params;

        // Consulta SQL para buscar a máquina com base no nome
        const response = await pool.query("SELECT * FROM Maquinas WHERE nome = $1", [nome]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por nome" });
    }
}
);

app.get("/Maquinas/:id_maquina/:estrelas", async (req, res) => {
    try {
        const { id_maquina, estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base no ID da máquina e na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE id_maquina = $1 AND estrelas = $2", [id_maquina, estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por id e estrelas" });
    }
}
);

app.get("/Maquinas/id_maquina/:id_maquina", async (req, res) => {
    try {
        const { id_maquina } = req.params;

        // Consulta SQL para buscar as máquinas com base no ID da máquina
        const response = await pool.query("SELECT * FROM Maquinas WHERE id_maquina = $1", [id_maquina]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por id_maquina" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);

app.get("/Maquinas/estrelas/:estrelas", async (req, res) => {
    try {
        const { estrelas } = req.params;

        // Consulta SQL para buscar as máquinas com base na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Maquinas WHERE estrelas = $1", [estrelas]);

        // Verificar se alguma máquina foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma máquina foi encontrada, retorne um erro
            return res.status(404).json({ message: "Máquina não encontrada" });
        }

        // Se a máquina foi encontrada, retorne os dados da máquina
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar máquina por estrelas" });
    }
}
);


app.post("/Maquinas", async (req, res) => {
    try {
        const { id_maquina, nome, estrelas } = req.body;

          // Verificar se a dica já existe com base no titulo
          const checkTip = await pool.query("SELECT * FROM dicasMaq WHERE titulo = $1", [titulo]);

          if (checkTip.rows.length > 0) {
              // Se a dica já existe, retorne um erro
              return res.status(400).json({ message: "Esta dica já está cadastrada." });
          }
  

        // Consulta SQL para inserir uma nova máquina na tabela
        const insertQuery = "INSERT INTO Maquinas (id_maquina, nome, estrelas) VALUES ($1, $2, $3)";

        // Executar a consulta
        await pool.query(insertQuery, [id_maquina, nome, estrelas]);
        res.status(201).json({ message: "Máquina inserida com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao inserir máquina" });
    }
}
);


app.put("/Maquinas/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, estrelas } = req.body;

        // Consulta SQL para atualizar os dados da máquina
        const updateQuery = "UPDATE Maquinas SET nome = $1, estrelas = $2 WHERE id = $3";

        // Executar a consulta
        await pool.query(updateQuery, [nome, estrelas, id]);
        res.status(200).json({ message: "Máquina atualizada com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao atualizar máquina" });
    }
}
);

app.delete("/Maquinas/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Consulta SQL para excluir a máquina com o ID fornecido
        const deleteQuery = "DELETE FROM Maquinas WHERE id = $1";

        // Executar a consulta
        await pool.query(deleteQuery, [id]);
        res.status(200).json({ message: "Máquina excluída com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao excluir máquina" });
    }
}
);
