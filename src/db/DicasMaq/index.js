const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 4000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dicasMaq",
  password: "ds564",
  port: 7007,
});

app.use(express.json());

app.listen(PORT, () => {
  console.log(`funcionando normalmente ${PORT}🚀`);
});

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
