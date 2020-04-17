const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const AulaController = require('./controllers/AulaController');


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/aulas', AulaController.index);
routes.post('/aulas', AulaController.create);

module.exports = routes;