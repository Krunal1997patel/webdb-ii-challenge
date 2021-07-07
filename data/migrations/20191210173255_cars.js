
exports.up = function(knex) {
  return knex.schema.createTable('carInfo', table => {
      table.increments();

      table.string('vin').notNullable();

      table.string('make').notNullable();

      table.string('model').notNullable();

      table.integer('mileage').notNullable();

      table.string('transmission')

      table.string('titleStatus')

      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists ('carInfo')
};
