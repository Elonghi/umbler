const knex = require('../database/database');

module.exports = {
  async index(req, res){
    console.log("deu bom");
    const results = await knex('comandas');
      return res.json(results);
  },
  async get(req, res){
    const { id } = req.params;
    const getIten = await knex.where('id', id).select().into('comandas');
    res.json(getIten);
  },
  async store(req, res){
    console.log("deu bom");
    const { nome_comanda } = req.body;


    var inserts = {
      nome_comanda: nome_comanda,
    }

    const insert = await knex.insert(inserts).into('comandas');

    return res.json(insert);

  },
  async update(req, res){
    const { nome_comanda } = req.body;
    const { id } = req.params;

    var updateValues = {
      nome_comanda: nome_comanda,
    }

    const update = await knex.where('id', id).update(updateValues).into('comandas');

    res.json(update);
  },
  async delete(req, res){
    const { id } = req.params;
    const del = await knex.where('id', id).del().into('comandas');
    res.json(del);
  }

}