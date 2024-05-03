const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 4000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Emps",
  password: "ds564",
  port: 7007,
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`funcionando normalmente ${PORT}🚀`);
});

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


