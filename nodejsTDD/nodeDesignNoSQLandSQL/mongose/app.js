const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json()); //  JSON 


app.use('/api/todos', todoRoutes);

// mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/tododb')
  .then(() => {
    console.log('MongoDB connected!');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  })
  .catch(err => console.error(err));
