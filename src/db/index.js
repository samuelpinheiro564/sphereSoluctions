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
app.get("/Emps", async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM Emps");
      res.status(201).json({message:response.rows});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao selecionar todas as empresas"});
        }
}
);

app.get("/Emps/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a empresa com o ID fornecido existe
        const checkEmpresa = await pool.query("SELECT * FROM Emps WHERE id = $1", [id]);
        if (checkEmpresa.rows.length === 0) {
            // Se a empresa não existe, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa existe, retorne os dados da empresa
        const response = await pool.query("SELECT * FROM Emps WHERE id = $1", [id]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por id" });
    }
}
);

app.get("/Emps/:id_empresa/:estrelas", async (req, res) => {
    try {
        const { id_empresa, estrelas } = req.params;

        // Consulta SQL para buscar as empresas com base no ID da empresa e na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Emps WHERE id_empresa = $1 AND estrelas = $2", [id_empresa, estrelas]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por id e estrelas" });
    }
}
);
// Iniciar o servidor

app.get("/Emps/:id_empresa/:estrelas", async (req, res) => {
    try {
        const { id_empresa, estrelas } = req.params;

        // Consulta SQL para buscar as empresas com base no ID da empresa e na quantidade de estrelas
        const response = await pool.query("SELECT * FROM Emps WHERE id_empresa = $1 AND estrelas = $2", [id_empresa, estrelas]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por id e estrelas" });
    }
}
);

app.get("/Emps/id_empresa/:id_empresa", async (req, res) => {
    try {
        const { id_empresa } = req.params;

        // Consulta SQL para buscar as empresas com base no ID da empresa
        const response = await pool.query("SELECT * FROM Emps WHERE id_empresa = $1", [id_empresa]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por id" });
    }
}
);

app.get("/Emps/nome/:nome", async (req, res) => {
    try {
        const { nome } = req.params;

        // Consulta SQL para buscar as empresas com base no nome
        const response = await pool.query("SELECT * FROM Emps WHERE nome = $1", [nome]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por nome" });
    }
}
);

app.get("/Emps/cnpj/:cnpj", async (req, res) => {
    try {
        const { cnpj } = req.params;

        // Consulta SQL para buscar as empresas com base no CNPJ
        const response = await pool.query("SELECT * FROM Emps WHERE cnpj = $1", [cnpj]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por CNPJ" });
    }
}
);

app.get("/Emps/endereco/:endereco", async (req, res) => {
    try {
        const { endereco } = req.params;

        // Consulta SQL para buscar as empresas com base no endereço
        const response = await pool.query("SELECT * FROM Emps WHERE endereco = $1", [endereco]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por endereço" });
    }
}
);

app.get("/Emps/telefone/:telefone", async (req, res) => {
    try {
        const { telefone } = req.params;

        // Consulta SQL para buscar as empresas com base no telefone
        const response = await pool.query("SELECT * FROM Emps WHERE telefone = $1", [telefone]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por telefone" });
    }
}
);

app.get("/Emps/email/:email", async (req, res) => {
    try {
        const { email } = req.params;

        // Consulta SQL para buscar as empresas com base no email
        const response = await pool.query("SELECT * FROM Emps WHERE email = $1", [email]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por email" });
    }
}
);

app.get("/Emps/telefone/:telefone", async (req, res) => {
    try {
        const { telefone } = req.params;

        // Consulta SQL para buscar as empresas com base no telefone
        const response = await pool.query("SELECT * FROM Emps WHERE telefone = $1", [telefone]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por telefone" });
    }
}
);

app.get("/Emps/email/:email", async (req, res) => {
    try {
        const { email } = req.params;

        // Consulta SQL para buscar as empresas com base no email
        const response = await pool.query("SELECT * FROM Emps WHERE email = $1", [email]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por email" });
    }
}
);

app.get("/Emps/telefone/:telefone", async (req, res) => {
    try {
        const { telefone } = req.params;

        // Consulta SQL para buscar as empresas com base no telefone
        const response = await pool.query("SELECT * FROM Emps WHERE telefone = $1", [telefone]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por telefone" });
    }
}
);

app.get("/Emps/email/:email", async (req, res) => {
    try {
        const { email } = req.params;

        // Consulta SQL para buscar as empresas com base no email
        const response = await pool.query("SELECT * FROM Emps WHERE email = $1", [email]);

        // Verificar se alguma empresa foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma empresa foi encontrada, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Se a empresa foi encontrada, retorne os dados da empresa
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar empresa por email" });
    }
}
);


app.post("/Emps", async (req, res) => {
    try {
        const { nome, cnpj, endereco, telefone, email } = req.body;

        // Verificar se o nome da empresa já existe
        const checkEmpresa = await pool.query("SELECT * FROM Emps WHERE nome = $1", [nome]);
        if (checkEmpresa.rows.length > 0) {
            // Se a empresa já existe, retorne um erro
            return res.status(400).json({ message: "Empresa já cadastrada" });
        }

        // Consulta SQL para inserir uma nova empresa
        const insertQuery = "INSERT INTO Emps (nome, cnpj, endereco, telefone, email) VALUES ($1, $2, $3, $4, $5) RETURNING *";

        // Executar a consulta
        const response = await pool.query(insertQuery, [nome, cnpj, endereco, telefone, email]);
        res.status(201).json({ message: response.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao cadastrar empresa" });
    }
}
);

app.put("/Emps/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cnpj, endereco, telefone, email } = req.body;

        // Verificar se a empresa com o ID fornecido existe
        const checkEmpresa = await pool.query("SELECT * FROM Emps WHERE id = $1", [id]);
        if (checkEmpresa.rows.length === 0) {
            // Se a empresa não existe, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Consulta SQL para atualizar os dados da empresa
        const updateQuery = "UPDATE Emps SET nome = $1, cnpj = $2, endereco = $3, telefone = $4, email = $5 WHERE id = $6 RETURNING *";

        // Executar a consulta
        const response = await pool.query(updateQuery, [nome, cnpj, endereco, telefone, email, id]);
        res.status(200).json({ message: response.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao atualizar empresa" });
    }
}
);

app.delete("/Emps/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a empresa com o ID fornecido existe
        const checkEmpresa = await pool.query("SELECT * FROM Emps WHERE id = $1", [id]);
        if (checkEmpresa.rows.length === 0) {
            // Se a empresa não existe, retorne um erro
            return res.status(404).json({ message: "Empresa não encontrada" });
        }

        // Consulta SQL para excluir a empresa
        const deleteQuery = "DELETE FROM Emps WHERE id = $1";

        // Executar a consulta
        await pool.query(deleteQuery, [id]);
        res.status(200).json({ message: "Empresa excluída com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao excluir empresa" });
    }
}
);

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

app.get("/dicasMaq", async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM dicasMaq");
      res.status(201).json({message:response.rows});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao selecionar todas as dicas"});
        }
});

app.get("/dicasMaq/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a dica com o ID fornecido existe
        const checkDica = await pool.query("SELECT * FROM dicasMaq WHERE id = $1", [id]);
        if (checkDica.rows.length === 0) {
            // Se a dica não existe, retorne um erro
            return res.status(404).json({ message: "Dica não encontrada" });
        }

        // Se a dica existe, retorne os dados da dica
        const response = await pool.query("SELECT * FROM dicasMaq WHERE id = $1", [id]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar dica por id" });
    }
});

app.get("/dicasMaq/:id_maquina/:estrelas", async (req, res) => {
    try {
        const { id_maquina, estrelas } = req.params;

        // Consulta SQL para buscar as dicas com base no ID da máquina e na quantidade de estrelas
        const response = await pool.query("SELECT * FROM dicasMaq WHERE id_maquina = $1 AND estrelas = $2", [id_maquina, estrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada para o ID da máquina e quantidade de estrelas fornecidos" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por ID da máquina e quantidade de estrelas" });
    }
});


app.get("/dicasMaq/id_maquina/:id_maquina", async (req, res) => {
    try {
        const { id_maquina } = req.params;

        // Consulta SQL para buscar as dicas com base no ID da máquina
        const response = await pool.query("SELECT * FROM dicasMaq WHERE id_maquina = $1", [id_maquina]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada para o ID da máquina fornecido" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por ID da máquina" });
    }
});


app.get("/dicasMaq/titulo/:titulo", async (req, res) => {
    try {
        const { titulo } = req.params;

        // Consulta SQL para buscar a dica pelo título
        const response = await pool.query("SELECT * FROM dicasMaq WHERE titulo = $1", [titulo]);

        // Verificar se a dica foi encontrada
        if (response.rows.length === 0) {
            // Se a dica não foi encontrada, retorne um erro
            return res.status(404).json({ message: "Dica não encontrada" });
        }

        // Se a dica foi encontrada, retorne os dados da dica
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dica por título" });
    }
});
app.get("/dicasMaq/estrelas/:quantidadeEstrelas", async (req, res) => {
    try {
        const { quantidadeEstrelas } = req.params;

        // Consulta SQL para buscar as dicas com a quantidade de estrelas fornecida
        const response = await pool.query("SELECT * FROM dicasMaq WHERE estrelas = $1", [quantidadeEstrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada com a quantidade de estrelas fornecida" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por quantidade de estrelas" });
    }
});

app.get("/dicasMaq/estrelas/:quantidadeEstrelas", async (req, res) => {
    try {
        const { quantidadeEstrelas } = req.params;

        // Consulta SQL para buscar as dicas com a quantidade de estrelas fornecida
        const response = await pool.query("SELECT * FROM dicasMaq WHERE estrelas = $1", [quantidadeEstrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada com a quantidade de estrelas fornecida" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por quantidade de estrelas" });
    }
}
);

app.get("/dicasMaq/estrelas/:quantidadeEstrelas", async (req, res) => {
    try {
        const { quantidadeEstrelas } = req.params;

        // Consulta SQL para buscar as dicas com a quantidade de estrelas fornecida
        const response = await pool.query("SELECT * FROM dicasMaq WHERE estrelas = $1", [quantidadeEstrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada com a quantidade de estrelas fornecida" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por quantidade de estrelas" });
    }
}
);

app.get("/dicasMaq/estrelas/:quantidadeEstrelas", async (req, res) => {
    try {
        const { quantidadeEstrelas } = req.params;

        // Consulta SQL para buscar as dicas com a quantidade de estrelas fornecida
        const response = await pool.query("SELECT * FROM dicasMaq WHERE estrelas = $1", [quantidadeEstrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada com a quantidade de estrelas fornecida" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por quantidade de estrelas" });
    }
}
);

app.get("/dicasMaq/estrelas/:quantidadeEstrelas", async (req, res) => {
    try {
        const { quantidadeEstrelas } = req.params;

        // Consulta SQL para buscar as dicas com a quantidade de estrelas fornecida
        const response = await pool.query("SELECT * FROM dicasMaq WHERE estrelas = $1", [quantidadeEstrelas]);

        // Verificar se alguma dica foi encontrada
        if (response.rows.length === 0) {
            // Se nenhuma dica foi encontrada, retorne um erro
            return res.status(404).json({ message: "Nenhuma dica encontrada com a quantidade de estrelas fornecida" });
        }

        // Se as dicas forem encontradas, retorne os dados das dicas
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao buscar dicas por quantidade de estrelas" });
    }
}
);

app.post("/dicasMaq", async (req, res) => { 
    try {
        const { titulo, descricao, id_maquina } = req.body;

        // Verificar se a dica já existe com base no titulo
        const checkTip = await pool.query("SELECT * FROM dicasMaq WHERE titulo = $1", [titulo]);

        if (checkTip.rows.length > 0) {
            // Se a dica já existe, retorne um erro
            return res.status(400).json({ message: "Esta dica já está cadastrada." });
        }

        // Se a dica não existir, adicione-a ao banco de dados
        const response = await pool.query("INSERT INTO dicasMaq (titulo, descricao, id_maquina) VALUES ($1, $2, $3)", [titulo, descricao, id_maquina]);

       if(response.rowCount == 0){
            return res.status(400).json({ message: "Erro ao adicionar dica" });
       }
        res.status(201).json({ message: "Dica adicionada com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao adicionar dica"});
    }
});

app.put("/dicasMaq/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, id_maquina } = req.body;

        const response = await pool.query("UPDATE dicasMaq SET titulo = $1, descricao = $2, id_maquina = $3 WHERE id = $4", [titulo, descricao, id_maquina, id]);

        app.put("/dicasMaq/:id", async (req, res) => {
            try {
                const { id } = req.params;
                const { titulo, descricao, id_maquina } = req.body;
        
                // Verificar se já existe uma dica com o mesmo título e descrição
                const checkDica = await pool.query("SELECT * FROM dicasMaq WHERE titulo = $1 AND descricao = $2 AND id != $3", [titulo, descricao, id]);
                if (checkDica.rows.length > 0) {
                    // Se já existir, retorne um erro
                    return res.status(400).json({ message: "Já existe uma dica com esse título e descrição." });
                }
                // Atualizar a dica
                const response = await pool.query("UPDATE dicasMaq SET titulo = $1, descricao = $2, id_maquina = $3 WHERE id = $4", [titulo, descricao, id_maquina, id]);
        
                // Verificar se a dica foi atualizada com sucesso
                if (response.rowCount === 0) {
                    return res.status(400).json({ message: "Erro ao atualizar dica" });
                }
        
                res.status(201).json({ message: "Dica atualizada com sucesso" });
            } catch (error) {
                console.error(error.message);
                res.status(500).send({ message: "Erro ao atualizar dica" });
            }
        });
        

        if(response.rowCount == 0){
            return res.status(400).json({ message: "Erro ao atualizar dica" });
       }
        res.status(201).json({ message: "Dica atualizada com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao atualizar dica"});
    }
});

app.delete("/dicasMaq/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se a dica com o ID fornecido existe
        const checkDica = await pool.query("SELECT * FROM dicasMaq WHERE id = $1", [id]);
        if (checkDica.rows.length === 0) {
            // Se a dica não existe, retorne um erro
            return res.status(404).json({ message: "Dica não encontrada" });
        }

        // Excluir a dica
        const response = await pool.query("DELETE FROM dicasMaq WHERE id = $1", [id]);

        // Verificar se a dica foi excluída com sucesso
        if (response.rowCount === 0) {
            return res.status(400).json({ message: "Erro ao deletar dica" });
        }

        res.status(201).json({ message: "Dica deletada com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao deletar dica" });
    }
});

app.get("/usuarios", async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM usuarios");
      res.status(201).json({message:response.rows});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao selecionar todos os usuários"});
        }
}
);

app.get("/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se o usuário com o ID fornecido existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por id" });
    }
});

app.get("/usuarios/email/:email", async (req, res) => {
    try {
        const { email } = req.params;

        // Verificar se o usuário com o email fornecido existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por email" });
    }
}
);

app.get("/usuarios/senha/:senha", async (req, res) => {
    try {
        const { senha } = req.params;

        // Verificar se o usuário com a senha fornecida existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE senha = $1", [senha]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE senha = $1", [senha]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por senha" });
    }
}
);

app.get("/usuarios/nome/:nome", async (req, res) => {
    try {
        const { nome } = req.params;

        // Verificar se o usuário com o nome fornecido existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE nome = $1", [nome]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE nome = $1", [nome]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por nome" });
    }
}
);


app.get("/usuarios/email/senha/:email/:senha", async (req, res) => {
    try {
        const { email, senha } = req.params;

        // Verificar se o usuário com o email e senha fornecidos existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE email = $1 AND senha = $2", [email, senha]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE email = $1 AND senha = $2", [email, senha]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por email e senha" });
    }
}
);

app.post("/usuarios", async (req, res) => {
    try {
        const { nome, email, senha,membroequipe } = req.body;

        // Verificar se o usuário já existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
        if (checkUsuario.rows.length > 0) {
            // Se o usuário já existe, retorne um erro
            return res.status(400).json({ message: "Usuário já existe" });
        }

        // Se o usuário não existe, insira o novo usuário
        const response = await pool.query("INSERT INTO usuarios (nome, email, senha,membroequipe) VALUES ($1, $2, $3,$4) RETURNING *", [nome, email, senha , membroequipe]);
        res.status(201).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao adicionar usuário" });
    }
}
);

app.put("/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        // Verificar se o usuário com o ID fornecido existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, atualize os dados do usuário
        const response = await pool.query("UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *", [nome, email, senha, id]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao atualizar usuário" });
    }
}
);

app.delete("/usuarios/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar se o usuário com o ID fornecido existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE id = $1", [id]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, exclua o usuário
        const response = await pool.query("DELETE FROM usuarios WHERE id = $1", [id]);
        res.status(200).json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao excluir usuário" });
    }
}
);

