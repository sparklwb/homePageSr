var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const Router = require("./routes");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PATCH,PUT,DELETE,POST, GET, OPTIONS");
  res.header("Access-Control-Allow-Headers", req.headers["access-control-request-headers"]);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Router(app);

app.listen(1510);
