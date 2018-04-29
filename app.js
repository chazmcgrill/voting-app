const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// Retrieve
const db = process.env.DATABASE_URI;

// Connect to the db
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port: ${port}`));

