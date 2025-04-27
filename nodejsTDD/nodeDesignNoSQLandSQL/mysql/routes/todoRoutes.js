const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// 增
router.post('/todos', todoController.createTodo);

// 查全部
router.get('/todos', todoController.getTodos);

// 查单个
router.get('/todos/:id', todoController.getTodoById);

// 改
router.put('/todos/:id', todoController.updateTodo);

// 删
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
