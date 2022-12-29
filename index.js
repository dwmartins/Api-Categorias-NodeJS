const express = require('express');
const app = express();
const consign = require('consign');

app.use(express.json());

consign()
  .then('./api')
  .then('./routes/routes.js')
  .into(app)

app.listen(3002);