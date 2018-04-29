const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Retrieve
const db = 'mongodb://localhost:27017/testdb';

// Connect to the db
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port: ${port}`));

