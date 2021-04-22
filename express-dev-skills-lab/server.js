// Require Modules
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const indexRouter = require("./routes/index");
const skillsRouter = require("./routes/skills");

// Create the Express App
const app = express();

// Configure the App (app.set)
// We'll use the ejs view engine
app.set("view engine", "ejs");

// Mount Middleware (app.use)

app.use(function(req, res, next) {
  // console.log('Hello Intrepid Learner!');
  req.time = new Date().toLocaleTimeString();
  next();
});

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); // creates req.body -> {our form data}
app.use(methodOverride("_method"));
// Mount Routes
app.use("/", indexRouter);
app.use("/skills", skillsRouter);

// Tell the App to Listen on Port 3000
app.listen(3000, function () {
  console.log("Express is listening on port 3000");
});
