const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

// define our todos routes

// we are already at /todos

router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.show);


module.exports = router;