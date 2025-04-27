const express = require('express');
const { createTodo, getTodos, getSingleTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

router.post('/', createTodo);            // created
router.get('/', getTodos);                // get
router.get('/:id', getSingleTodo);         // get single
router.put('/:id', updateTodo);            // update
router.delete('/:id', deleteTodo);         // delete

module.exports = router;
