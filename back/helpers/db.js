const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'moimoi',
  database : 'user'
});
module.exports  =  connection;

// const connection = require('./helpers/db.js');
// Appel pour autre fichier<<<
