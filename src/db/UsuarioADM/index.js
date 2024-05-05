const express = require("express");
const { Pool } = require("pg");

const appUsuarioADM = express();
const PORT = 4000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "spheresoluctions",
  password: "ds564",
  port: 7007,
});

appUsuarioADM.use(express.json());

appUsuarioADM.listen(PORT, () => {
  console.log(`funcionando normalmente ${PORT}🚀`);
});

appUsuarioADM.get("/usuarios", async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM usuarios");
      res.status(201).json({message:response.rows});
    } catch (error) {
        console.error(error.message);
        res.status(500).send({message:"Erro ao selecionar todos os usuários"});
        }
}
);

appUsuarioADM.get("/usuarios/:id", async (req, res) => {
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

appUsuarioADM.get("/usuarios/:email", async (req, res) => {
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

appUsuarioADM.get("/usuarios/:senha", async (req, res) => {
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

appUsuarioADM.get("/usuarios/:nome", async (req, res) => {
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

appUsuarioADM.get("/usuarios/:id/:email", async (req, res) => {
    try {
        const { id, email } = req.params;

        // Verificar se o usuário com o ID e email fornecidos existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE id = $1 AND email = $2", [id, email]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE id = $1 AND email = $2", [id, email]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por id e email" });
    }
}
);

appUsuarioADM.get("/usuarios/:id/:senha", async (req, res) => {
    try {
        const { id, senha } = req.params;

        // Verificar se o usuário com o ID e senha fornecidos existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE id = $1 AND senha = $2", [id, senha]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE id = $1 AND senha = $2", [id, senha]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por id e senha" });
    }
}
);

appUsuarioADM.get("/usuarios/:id/:nome", async (req, res) => {
    try {
        const { id, nome } = req.params;

        // Verificar se o usuário com o ID e nome fornecidos existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE id = $1 AND nome = $2", [id, nome]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE id = $1 AND nome = $2", [id, nome]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por id e nome" });
    }
}
);

appUsuarioADM.get("/usuarios/:email/:senha", async (req, res) => {
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

appUsuarioADM.get("/usuarios/:email/:nome", async (req, res) => {
    try {
        const { email, nome } = req.params;

        // Verificar se o usuário com o email e nome fornecidos existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE email = $1 AND nome = $2", [email, nome]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE email = $1 AND nome = $2", [email, nome]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por email e nome" });
    }
}
);

appUsuarioADM.get("/usuarios/:senha/:nome", async (req, res) => {
    try {
        const { senha, nome } = req.params;

        // Verificar se o usuário com a senha e nome fornecidos existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE senha = $1 AND nome = $2", [senha, nome]);
        if (checkUsuario.rows.length === 0) {
            // Se o usuário não existe, retorne um erro
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        // Se o usuário existe, retorne os dados do usuário
        const response = await pool.query("SELECT * FROM usuarios WHERE senha = $1 AND nome = $2", [senha, nome]);
        res.status(200).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao selecionar usuário por senha e nome" });
    }
}
);


appUsuarioADM.post("/usuarios", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Verificar se o usuário já existe
        const checkUsuario = await pool.query("SELECT * FROM usuarios WHERE email = $1", [email]);
        if (checkUsuario.rows.length > 0) {
            // Se o usuário já existe, retorne um erro
            return res.status(400).json({ message: "Usuário já existe" });
        }

        // Se o usuário não existe, insira o novo usuário
        const response = await pool.query("INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *", [nome, email, senha]);
        res.status(201).json({ message: response.rows });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Erro ao adicionar usuário" });
    }
}
);

appUsuarioADM.put("/usuarios/:id", async (req, res) => {
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

appUsuarioADM.delete("/usuarios/:id", async (req, res) => {
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





