const knex = require('../database/database');

module.exports = {
  async index(req, res){
    const results = await knex('produtos');
      return res.json(results);
  },
  async get(req, res){
    const { id } = req.params;
    const getIten = await knex.where('id', id).select().into('produtos');
    res.json(getIten);
  },
  async store(req, res){
    const { nome_produto, valor_produto, cozinha } = req.body;

    var inserts = {
      nome_produto: nome_produto,
      valor_produto: valor_produto,
      cozinha: cozinha,
    }

    const insert = await knex.insert(inserts).into('produtos');

    return res.json(insert);

  },
  async update(req, res){
    const { nome_produto, valor_produto, cozinha } = req.body;
    const { id } = req.params;

    var updateValues = {
      nome_produto: nome_produto,
      valor_produto: valor_produto,
      cozinha: cozinha,
    }

    const update = await knex.where('id', id).update(updateValues).into('produtos');

    res.json(update);
  },
  async delete(req, res){
    const { id } = req.params;
    const del = await knex.where('id', id).del().into('produtos');
    res.json(del);
  }

}