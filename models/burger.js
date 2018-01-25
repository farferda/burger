var orm = require("../config/orm.js")




var burgerModel  = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    console.log("we are IN burgermodel");
    orm.selectAll();
    
  },
  insertOne: function() {
    console.log("insert one");
    orm.insertOne();
    
  },
  updateOne: function() {
    console.log("update one");
    orm.updateOne();
  },
  
};

module.exports = burgerModel;