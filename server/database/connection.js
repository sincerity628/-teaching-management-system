const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19990628',
  database: 'school1'
});

connection.connect(error => {
  if(error) {
    throw error;
    return error;
  }
  console.log('database connected.');
});

module.exports = connection;
