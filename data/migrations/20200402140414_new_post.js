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
      .integer("profile_id")
      .references("profile_id")
      .inTable("data_profiles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("post_id")
      .references("post_id")
      .inTable("data_posts")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
