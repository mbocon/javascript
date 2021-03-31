// Load your modules (require() statements)
const express = require('express');
const todoDB = require('./data/todo-db');

// Create or initialize the  express app

const app = express();

//  Configure app settings app.set()

app.set('view engine', 'ejs');

// Mount app middleware  app.use()

// Mount our route handlers

app.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>');
});

app.get('/home', (req, res) => {
	res.render('home');
});

app.get('/todos', (req, res) => {
	res.render('todos/index', {
        todos: todoDB.getAll()
    });
});

// Tell app to listen on a port
app.listen(3000, () => {
	console.log('server listening on port 3000');
});
