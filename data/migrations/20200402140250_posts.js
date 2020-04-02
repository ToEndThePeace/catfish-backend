const tname = "data_posts";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("post_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table.string("post_content").notNullable();
    table.string("post_image_url");
    table.timestamp("post_timestamp").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
