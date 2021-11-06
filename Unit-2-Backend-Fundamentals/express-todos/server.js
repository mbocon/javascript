// require our modules (like express)
const express = require('express');
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

// initialize the express app
const app = express();

// configure application settings app.set()
app.set('view engine', 'ejs');


// mount our middleware


// mount our routes

app.use('/', indexRouter);
app.use('/todos', todosRouter);


// tell the app to listen on a port for requests
// port will be used to run node process
app.listen(3000, function() {
    console.log('Express is listening for requests from the browser');
});
