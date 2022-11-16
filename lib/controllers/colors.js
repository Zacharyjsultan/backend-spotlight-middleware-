const { Router } = require('express');
const blue = require('../middleware/blue');
const red = require('../middleware/red');
const colors = require('../middleware/colors');
const yellow = require('../middleware/yellow');
// what middleware does this route need to pass?
module.exports = Router()
  .get('/purple', [colors, red, blue], (req, res) => {
    res.json(req.colors);
  })
  .get('/orange', [colors, red, yellow], (req, res) => {
    res.json(req.colors);
  });
