const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());

// 注册路由
app.use('/api', todoRoutes);

// 错误处理器
app.use((err, req, res, next) => {
  const statusCode = err.code || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
