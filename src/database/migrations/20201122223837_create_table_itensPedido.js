
exports.up = knex => knex.schema.createTable('itensPedido', table => {
  table.increments('id')
  table.integer('id_pedido').notNullable()
  table.integer('id_produto').notNullable()
  table.boolean('status').notNullable()

  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.timestamp('updated_at').defaultTo(knex.fn.now())

})

exports.down = knex => knex.schema.dropTable('itensPedido')

