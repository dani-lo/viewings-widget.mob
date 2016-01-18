/**
 * Module dependencies
 */
var express = require("express"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    flash = require("express-flash"),
    methodOverride = require("method-override"),
    errorhandler = require("errorhandler"),
    morgan = require("morgan"),
    views = require("./routes/views"),
    api = require("./routes/api"),
    http = require("http"),
    path = require("path");

var appConf = require("./local_modules/conf"),
    appUtil = require("./local_modules/util"),
    userModel = require("./local_modules/user"),
    hello = require("./local_modules/hello.js");

// not needd on this project, but backend functionality
// should in theory be included for a full blown app ..
var mongo = require("mongodb"),
    monk = require("monk"),
    db = monk(appConf.dbconn);

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
app.use(morgan("dev"));
app.use(bodyParser());
app.use(methodOverride());
app.use(flash());


app.use(session({
  secret: appConf.secret,
  cookie: { maxAge: 60000 * 60 },
  resave: false,
  saveUninitialized: true
}));

// Make the db handle accessible to the routes
app.use(function(req,res,next){
    "use strict";
    req.db = db;
    next();
});

/*
app.use(function (req, res, next) {
  //
  "use strict";
  var user = new userModel({
    email: "foo@foo.net",
    password: "foobar"
  });

  user.getUser(function () {
    console.log(user.toObject());
  });

  next();
});
*/
/* Handle Login (Local and Github) */
var env = process.env.NODE_ENV || "development";

// development only
if (env === "development") {
  app.use(errorhandler());
  app.use(express.static(path.join(__dirname, "build")));
}

// production only
if (env === "production") {
  // TODO
  app.use(express.static(path.join(__dirname, "dist")));
}

app.use(express.static(path.join(__dirname, "fonts")));

/**
 * Routes
 */
app.get("/home", views.index);
app.get("/bookings", views.bookings);
// JSON API
app.get("/api/jobs", api.jobs);
// JSON API
app.get("/api/experience", api.experience);


app.get("/", function (req, res) {
  "use strict";
  res.redirect("/home");
});

/**
 * Start Server
 */

http.createServer(app).listen(app.get("port"), function () {
  "use strict";
  hello("Devinteractive React CV", app.get("port"), env);
});
