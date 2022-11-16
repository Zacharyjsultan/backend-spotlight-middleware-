const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res) => {
    res.status(418).send('Erruh message');
  })

  .get('/payment', (req, res) => {
    res.status(402).send('Erruh message');
  });
