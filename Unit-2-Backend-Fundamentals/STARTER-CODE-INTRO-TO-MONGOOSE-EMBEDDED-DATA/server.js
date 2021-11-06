const express = require('express');
const morgan = require('morgan');
const port = 3000;
require('./config/database');

const indexRouter = require('./routes/index');
const moviesRouter = require('./routes/movies');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/movies', moviesRouter);


app.listen(port, function() {
  console.log(`Express is listening on port:${port}`)
});
