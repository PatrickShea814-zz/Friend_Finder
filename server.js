// DEPENDENCIES
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");

// CREATE EXPRESS APP
// ==============================================================================
var app = express();

var PORT = process.env.PORT || 8080;

// BodyParser is a part of Express and makes it easy for our server to interpret data sent to it.
// parse application
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// ROUTING
// These routes give our server a "map" of how to respond when users visit visits specific URL's
// ================================================================================
var apiRouting = require("./app/routing/apiRoutes");
var htmlRouting = require("./app/routing/htmlRoutes");
apiRouting(app);
htmlRouting(app);

// LISTENER
// Start our server.
// ==============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
