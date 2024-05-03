const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');

const app = express();

// Configurações de conexão com o banco de dados
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'plantasEmps',
  password: 'ds564',
  port: 7007,
});

// Rota para inserir um PDF no banco de dados
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

// Rota para baixar um PDF do banco de dados
app.get('/download-pdf', (req, res) => {
  // Consulta SQL para buscar o PDF na tabela
  const selectQuery = 'SELECT * FROM pdfs WHERE filename = $1';

  // Executar
    pool.query(selectQuery, ['file.pdf'], (err, result) => {
        if (err) {
        console.error('Erro ao buscar o PDF:', err.stack);
        res.status(500).send('Erro ao buscar o PDF no banco de dados.');
        } else {
        // Verificar se o PDF foi encontrado
        if (result.rows.length === 0) {
            console.error('PDF não encontrado.');
            res.status(404).send('PDF não encontrado.');
        } else {
            // Escrever o conteúdo do PDF em um arquivo
            const pdfContent = result.rows[0].content;
            fs.writeFileSync('downloaded-file.pdf', pdfContent);
    
            console.log('PDF baixado com sucesso.');
            res.status(200).send('PDF baixado com sucesso.');
        }
        }
    });
}
);


// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});