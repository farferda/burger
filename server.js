var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var orm = require("./config/orm.js")
var burgerModel = require("./models/burger.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

burgerModel.selectAll();
burgerModel.insertOne();
burgerModel.updateOne();

