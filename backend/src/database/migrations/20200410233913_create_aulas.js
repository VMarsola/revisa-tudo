exports.up = function(knex) {
    return knex.schema.createTable('aulas', function (table) {
        table.increments();      
        table.string('lesson').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('aulas');
  };