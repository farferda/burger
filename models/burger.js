<<<<<<< HEAD
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

=======
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

>>>>>>> a390b8f8cb6b2cffb83c4b81d63f6829e4d83d20
module.exports = burgerModel;