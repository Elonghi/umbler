
exports.up = knex => knex.schema.createTable('produtos', table => {
    table.increments('id')
    table.text('nome_produto').notNullable()
    table.integer('valor_produto').nullable()
    table.boolean('cozinha').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })

exports.down = knex => knex.schema.dropTable('produtos')

