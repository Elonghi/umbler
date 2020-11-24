const express = require('express');
const ProdutosController = require('./Controllers/ProdutosController');
const ComandasController = require('./Controllers/ComandasController');
const PedidosController = require('./Controllers/PedidosController');
const ItensPedidoController = require('./Controllers/ItensPedidoController');

const routes = express.Router();

routes.get('/produtos', ProdutosController.index);
routes.get('/produtos/:id', ProdutosController.get);
routes.post('/produtos', ProdutosController.store);
routes.put('/produtos/:id', ProdutosController.update);
routes.delete('/produtos/:id', ProdutosController.delete);

routes.get('/comandas', ComandasController.index);
routes.get('/comandas/:id', ComandasController.get);
routes.post('/comandas', ComandasController.store);
routes.put('/comandas/:id', ComandasController.update);
routes.delete('/comandas/:id', ComandasController.delete);

routes.get('/pedidos', PedidosController.index);
routes.get('/pedidos/:id', PedidosController.get);
routes.post('/pedidos', PedidosController.store);
routes.put('/pedidos/:id', PedidosController.update);
routes.delete('/pedidos/:id', PedidosController.delete);

routes.get('/itenspedido', ItensPedidoController.index);
routes.get('/itenspedido/:id', ItensPedidoController.get);
routes.post('/itenspedido', ItensPedidoController.store);
routes.put('/itenspedido/:id', ItensPedidoController.update);
routes.delete('/itenspedido/:id', ItensPedidoController.delete);

module.exports = routes;