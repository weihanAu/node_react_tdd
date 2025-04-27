const todoServices = require('../services/todoServices');

const getTodos = (req, res,next) => {
  try {
    const todos = todoServices.getTodos();
    return res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
}


const getSingletodo = (req, res, next)=>{
  try{
    const todo = todoServices.getSingletodo(req.params.id);
    return res.status(200).json(todo);
  } catch(error){
    next(error);
  }
}

module.exports = {
  getTodos,
  getSingletodo
}