var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Get routes
var routes = require("./controllers/burgers_controllers");
app.use(routes);

// Start server
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });