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
      .foreign("post_id")
      .unsigned()
      .references("data_posts.post_id");
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
