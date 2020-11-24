
exports.up = knex => knex.schema.createTable('pedidos', table => {
  table.increments('id')
  table.integer('id_comanda').notNullable()
  table.text('nome_cliente').nullable()
  table.time('hora_pedido').notNullable()
  table.boolean('status').notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('pedidos')

