const tname = "xref_new_comment";
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
      .references("data_profiles.profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("post_id")
      .references("data_posts.post_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("comment_id")
      .references("data_comments.comment_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
