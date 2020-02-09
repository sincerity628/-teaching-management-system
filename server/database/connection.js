const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'ip',
  user: 'becca',
  password: '******',
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
