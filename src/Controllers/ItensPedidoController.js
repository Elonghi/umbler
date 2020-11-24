const knex = require('../database/database');

module.exports = {
  async index(req, res){
    const results = await knex('itenspedido');
      return res.json(results);
  },
  async get(req, res){
    const { id } = req.params;
    const getIten = await knex.where('id', id).select().into('itenspedido');
    res.json(getIten);
  },
  async store(req, res){
    const { id_pedido, id_produto, status } = req.body;

    var inserts = {
      id_pedido: id_pedido,
      id_produto: id_produto,
      status: status,
    }

    const insert = await knex.insert(inserts).into('itenspedido');

    return res.json(insert);

  },
  async update(req, res){
    const { id_pedido, id_produto, status } = req.body;
    const { id } = req.params;

    var updateValues = {
      id_pedido: id_pedido,
      id_produto: id_produto,
      status: status,
    }

    const update = await knex.where('id', id).update(updateValues).into('itenspedido');

    res.json(update);
  },
  async delete(req, res){
    const { id } = req.params;
    const del = await knex.where('id', id).del().into('itenspedido');
    res.json(del);
  }

}