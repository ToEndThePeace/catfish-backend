const tname = "xref_post_likes";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("p_like_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table
      .integer("post_id")
      .references("post_id")
      .inTable("data_posts")
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
