var express = require("express");
var bodyParser = require("body-parser");

//set up express
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("public"));

//parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get routes
var routes = require("./controllers/burgers_controllers");
app.use(routes);

//Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start server
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });