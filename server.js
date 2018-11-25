var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + "/public"));

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Get routes
var routes = require(__dirname + "/controllers/burgers_controllers");
app.use(routes);

// Start server
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });