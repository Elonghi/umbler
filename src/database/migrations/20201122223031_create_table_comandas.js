
exports.up = knex => knex.schema.createTable('comandas', table => {
  table.increments('id')
  table.string('nome_comanda').notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('comandas')

