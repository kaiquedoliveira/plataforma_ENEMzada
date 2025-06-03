const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1', // Ou o IP do seu servidor de banco de dados
  user: 'root', // Seu usuário do MySQL

  password: 'password', // Sua senha do MySQL, caso tenha
  database: 'plataforma_enem', // O nome do banco de dados que você criou
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
