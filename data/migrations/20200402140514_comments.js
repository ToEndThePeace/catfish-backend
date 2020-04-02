const tname = "data_comments";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("comment_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table.string("comment_content").notNullable();
    table.timestamp("timestamp").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
