const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'root',
  database: 'plataforma_enem',
  ssl: false,
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados como id ' + connection.threadId);
});

module.exports = connection;
