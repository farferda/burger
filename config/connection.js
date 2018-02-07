var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "ln3cuiq20rt4e45r",
  password: "df71cu1pky99sc23",
  database: "hsbq6z4chzxl9ujl",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;