var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));

//parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


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