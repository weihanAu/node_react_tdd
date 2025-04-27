const express = require("express");
const router = express.Router();
const todoControllers = require("../controllers/todoControllers");

router.get("/todos", todoControllers.getTodos);
router.get("/todos/:id", todoControllers.getSingletodo);

module.exports = router;