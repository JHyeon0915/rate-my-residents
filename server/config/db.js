const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user : "root",
  password: "password",
  database:"rate_my_residents"
});

db.connect(function(err){
  if(err) throw err;
  console.log("Connected!");
});

module.exports = db;