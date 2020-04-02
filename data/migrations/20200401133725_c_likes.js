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
      .unsigned()
      .references("data_comments.comment_id");
    table
      .foreign("profile_id")
      .unsigned()
      .references("data_profiles.profile_id");
    table.timestamp("timestamp").defaultTo(knex.fn.now());
    table
      .foreign("type_id")
      .unsigned()
      .references("enum_react_types.react_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
