const express = require("express");
const { Pool } = require("pg");
const fs = require("fs");

const app = express();

// Configurações de conexão com o banco de dados
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "plantasEmps",
  password: "ds564",
  port: 7007,
});

app.use(express.json());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

app.get("/plantasEmps", async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM plantasEmps");
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao selecionar todas as plantas" });
  }
});

app.get("/plantasEmps/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const checkPlanta = await pool.query(
      "SELECT * FROM plantasEmps WHERE id = $1",
      [id]
    );
    if (checkPlanta.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id = $1",
      [id]
    );
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao selecionar planta por id" });
  }
});

app.get("/plantasEmps/:id_empresa", async (req, res) => {
  try {
    const { id_empresa } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_empresa = $1",
      [id_empresa]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao selecionar planta por id da empresa" });
  }
});

app.get("/plantasEmps/:nome", async (req, res) => {
  try {
    const { nome } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE nome = $1",
      [nome]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao selecionar planta por nome" });
  }
});
app.get("/plantasEmps/:id_maquina/:estrelas", async (req, res) => {
  try {
    const { id_maquina, estrelas } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_maquina = $1 AND estrelas = $2",
      [id_maquina, estrelas]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao selecionar planta por id da máquina e estrelas",
      });
  }
});
app.get("/plantasEmps/:id_maquina", async (req, res) => {
  try {
    const { id_maquina } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_maquina = $1",
      [id_maquina]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao selecionar planta por id da máquina" });
  }
});

app.get("/plantasEmps/:id_empresa/:estrelas", async (req, res) => {
  try {
    const { id_empresa, estrelas } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_empresa = $1 AND estrelas = $2",
      [id_empresa, estrelas]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao selecionar planta por id da empresa e estrelas",
      });
  }
});

app.get("/plantasEmps/:id_empresa", async (req, res) => {
  try {
    const { id_empresa } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_empresa = $1",
      [id_empresa]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao selecionar planta por id da empresa" });
  }
});

app.get("/plantasEmps/:nome", async (req, res) => {
  try {
    const { nome } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE nome = $1",
      [nome]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao selecionar planta por nome" });
  }
});

app.get("/plantasEmps/:id_maquina/:estrelas", async (req, res) => {
  try {
    const { id_maquina, estrelas } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_maquina = $1 AND estrelas = $2",
      [id_maquina, estrelas]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao selecionar planta por id da máquina e estrelas",
      });
  }
});

app.get("/plantasEmps/:id_maquina", async (req, res) => {
  try {
    const { id_maquina } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_maquina = $1",
      [id_maquina]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao selecionar planta por id da máquina" });
  }
});

app.get("/plantasEmps/:id_empresa/:estrelas", async (req, res) => {
  try {
    const { id_empresa, estrelas } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_empresa = $1 AND estrelas = $2",
      [id_empresa, estrelas]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao selecionar planta por id da empresa e estrelas",
      });
  }
});

app.get("/plantasEmps/:id_empresa", async (req, res) => {
  try {
    const { id_empresa } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_empresa = $1",
      [id_empresa]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao selecionar planta por id da empresa" });
  }
});

app.get("/plantasEmps/:nome", async (req, res) => {
  try {
    const { nome } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE nome = $1",
      [nome]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao selecionar planta por nome" });
  }
});

app.get("/plantasEmps/:id_maquina/:estrelas", async (req, res) => {
  try {
    const { id_maquina, estrelas } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_maquina = $1 AND estrelas = $2",
      [id_maquina, estrelas]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao selecionar planta por id da máquina e estrelas",
      });
  }
});

app.get("/plantasEmps/:id_maquina", async (req, res) => {
  try {
    const { id_maquina } = req.params;

    const response = await pool.query(
      "SELECT * FROM plantasEmps WHERE id_maquina = $1",
      [id_maquina]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json(response.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao selecionar planta por id da máquina" });
  }
});

app.post('/upload-pdf', (req, res) => {
    // Ler o conteúdo do arquivo PDF
    const pdfPath = 'path/to/your/file.pdf';
    const pdfContent = fs.readFileSync(pdfPath);
  
    // Consulta SQL para inserir o PDF na tabela
    const insertQuery = 'INSERT INTO pdfs (filename, content) VALUES ($1, $2)';
  
    // Executar a consulta
    pool.query(insertQuery, ['file.pdf', pdfContent], (err, result) => {
      if (err) {
        console.error('Erro ao inserir o PDF:', err.stack);
        res.status(500).send('Erro ao inserir o PDF no banco de dados.');
      } else {
        console.log('PDF inserido com sucesso:', result.rows);
        res.status(200).send('PDF inserido com sucesso.');
      }
    });
  });
  

app.put("/plantasEmps/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { id_empresa, nome, descricao, estrelas } = req.body;

    const response = await pool.query(
      "UPDATE plantasEmps SET id_empresa = $1, nome = $2, descricao = $3, estrelas = $4 WHERE id = $5",
      [id_empresa, nome, descricao, estrelas, id]
    );
    
    if (response.rows.length > 0) {
        // Se a dica já existe, retorne um erro
        return res.status(400).json({ message: "Esta dica já está cadastrada." });
    }
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar planta" });
  }
});

app.delete("/plantasEmps/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const response = await pool.query("DELETE FROM plantasEmps WHERE id = $1", [
      id,
    ]);
    if (response.rows.length > 0) {
        // Se a dica já existe, retorne um erro
        return res.status(400).json({ message: "Esta planta já está cadastrada." });
    }
    if (response.rowCount === 0) {x
      return res.status(404).json({ message: "Planta não encontrada" });
    }

    res.status(200).json({ message: "Planta deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar planta" });
  }
});
