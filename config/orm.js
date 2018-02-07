var connection = require("./connection.js");


var orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    console.log("we are IN")
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function() {
    console.log("insert one")
    
  },
  updateOne: function() {
    console.log("update one")
  },
  
};

module.exports = orm;
