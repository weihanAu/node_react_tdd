const getTodos = ()=>{
  const todos = [
    { id: 1, name: '学习 Node.js', completed: false },
    { id: 2, name: '写项目', completed: true },
  ];
  return todos;
}

const getSingletodo =(id) =>{
  if(id>=2){
    const error = new Error("notfund");
    error.code = 404;
    throw error;
  }
  const todo = {name:"s",completed:true}
  return todo;
}
module.exports ={
  getTodos,
  getSingletodo
}