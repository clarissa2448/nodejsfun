var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Clarissa Xu",
  password: "Fogo&yam24"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
