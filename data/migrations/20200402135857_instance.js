const tname = "data_instances";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("instance_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table.string("title").notNullable();
    table.timestamp("start_time").defaultTo(knex.fn.now());
    table
      .integer("duration")
      .unsigned()
      .notNullable()
      .defaultTo(7);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
