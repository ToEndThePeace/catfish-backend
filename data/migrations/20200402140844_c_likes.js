const tname = "xref_comment_likes";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("c_like_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table
      .integer("comment_id")
      .references("comment_id")
      .inTable("data_comments")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("profile_id")
      .references("profile_id")
      .inTable("data_profiles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("timestamp").defaultTo(knex.fn.now());
    table
      .integer("type_id")
      .references("react_id")
      .inTable("enum_react_types")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
