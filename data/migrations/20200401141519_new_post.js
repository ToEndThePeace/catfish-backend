const tname = "xref_new_post";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("xref_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table
      .foreign("profile_id")
      .unsigned()
      .references("data_profiles.profile_id");
    table
      .foreign("post_id")
      .unsigned()
      .references("data_posts.post_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
