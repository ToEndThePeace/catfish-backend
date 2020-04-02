const tname = "data_profiles";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("profile_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table.string("display_name").notNullable();
    table.string("about");
    table.string("dob");
    table.string("pic_url");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
