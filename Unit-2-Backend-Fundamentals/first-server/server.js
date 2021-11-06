// this file is a module or AKA node module
// server.js is the entry point of our application
// this is the first JS file that gets executed when our server runs
// this is where we configure settings and anything else our server needs

// require dependencies
const express = require('express'); // we use require statements to include code from a node module

// initialize this application
const app = express();

// configure application settings

// configure or "mount" middleware

// define our routes
// think of routes like event listeners - except routes listen for requests for particular resources
app.get('/', (req, res) => {
    res.send('Hello World');
});

// tell the application to listen for requests from the client or browser
app.listen(3000, () => {
    console.log('Express is listening for requests from the browser')
});