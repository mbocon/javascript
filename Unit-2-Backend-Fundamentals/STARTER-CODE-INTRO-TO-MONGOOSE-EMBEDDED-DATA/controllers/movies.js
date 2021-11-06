const Movie = require('../models/movie');

module.exports = {
  index,
  show,
  new: newMovie,
  create
};

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.render('movies/index', { title: 'All Movies', movies });
  });
}

function show(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    res.render('movies/show', { title: 'Movie Detail', movie });
  });
}

function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // remove empty/blank inputs from req.body
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;

  if (req.body.cast) {
    // remove whitespace next to commas
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    req.body.cast = req.body.cast.split(',')
  };

  Movie.create(req.body, function(err, movie) {
    // one way to handle errors
    if (err) return res.redirect('/movies/new');
    // for now, redirect right back to the "new" view
    res.redirect('/movies');
  });
}
