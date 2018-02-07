var express = require("express");
var burgerModel = require("../models/burger.js");
var router = express.Router()

router.get('/', function (req, res) {  
  res.render('index');
});