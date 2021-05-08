require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  const env = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS
  }
  res.json(env)
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});