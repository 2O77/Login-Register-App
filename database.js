const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "user_informations",
});
