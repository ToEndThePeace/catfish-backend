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
      .foreign("comment_id")
      .references("data_comments.comment_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("profile_id")
      .references("data_profiles.profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("timestamp").defaultTo(knex.fn.now());
    table
      .foreign("type_id")
      .references("enum_react_types.react_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
