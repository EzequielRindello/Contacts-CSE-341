const routes = require('express').Router();

routes.use('/', require('./swagger'));

routes.get('/', (req, res) => {
  //#swagger.tags = ['Contacts']
  res.send('restful api for contacts');
});

routes.use('/contacts',require('./contacts'));


module.exports = routes;