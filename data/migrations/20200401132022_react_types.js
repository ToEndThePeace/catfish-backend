const tname = "enum_react_types";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("react_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table.string("react_type").notNullable;
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists(tname)
};
