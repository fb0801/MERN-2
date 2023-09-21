const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = 'mongodb://127.0.0.1:27017/Mern'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

/*const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);*/

/*app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});*/