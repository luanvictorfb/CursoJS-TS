const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeControler');
const contatoController = require('./src/controllers/contatoController');

// Rotas da Home
route.get('/', homeController.pagInicial);
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.pagInicial);


module.exports = route;