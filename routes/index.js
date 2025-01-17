const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('restful api for contacts');
});

routes.use('/contacts',require('./contacts'));


module.exports = routes;