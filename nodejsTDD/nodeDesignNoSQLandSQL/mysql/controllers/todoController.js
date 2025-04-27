const pool = require('../db');

// 新建 todo
exports.createTodo = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const [result] = await pool.execute(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      [title, completed]
    );
    res.status(201).json({ id: result.insertId, title, completed });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 查询所有 todo
exports.getTodos = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM todos');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 查询单个 todo
exports.getTodoById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Todo not found' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 更新 todo
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const [result] = await pool.execute(
      'UPDATE todos SET title = ?, completed = ? WHERE id = ?',
      [title, completed, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 删除 todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.execute('DELETE FROM todos WHERE id = ?', [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
