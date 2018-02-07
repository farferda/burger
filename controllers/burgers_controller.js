<<<<<<< HEAD
var express = require("express");
var burgerModel = require("../models/burger.js");
var router = express.Router()

router.get('/', function (req, res) {  
  res.render('index');
=======
var express = require("express");
var burgerModel = require("../models/burger.js");
var router = express.Router()

router.get('/', function (req, res) {  
  res.render('index');
>>>>>>> a390b8f8cb6b2cffb83c4b81d63f6829e4d83d20
});