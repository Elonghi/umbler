const knex = require('../database/database');

module.exports = {
  async index(req, res){
    const results = await knex('pedidos');
      return res.json(results);
  },
  async get(req, res){
    const { id } = req.params;
    const getIten = await knex.where('id', id).select().into('pedidos');
    res.json(getIten);
  },

  async store(req, res){
    const { id_comanda, nome_cliente, hora_pedido, status } = req.body;

    var inserts = {
      id_comanda: id_comanda,
      nome_cliente: nome_cliente,
      hora_pedido: hora_pedido,
      status: status,
    }

    const insert = await knex.insert(inserts).into('pedidos');

    return res.json(insert);

  },

  async update(req, res){
    const { id_comanda, nome_cliente, hora_pedido, status } = req.body;
    const { id } = req.params;

    var updateValues = {
      id_comanda: id_comanda,
      nome_cliente: nome_cliente,
      hora_pedido: hora_pedido,
      status: status,
    }

    const update = await knex.where('id', id).update(updateValues).into('pedidos');

    res.json(update);
  },
  async delete(req, res){
    const { id } = req.params;
    const del = await knex.where('id', id).del().into('pedidos');
    res.json(del);
  }

}