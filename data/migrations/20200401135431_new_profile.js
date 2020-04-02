const tname = "xref_new_profile";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table
      .increments("xref_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table
      .foreign("user_id")
      .unsigned()
      .references("data_users.user_id");
    table
      .foreign("instance_id")
      .unsigned()
      .references("data_instances.instance_id");
    table
      .foreign("profile_id")
      .unsigned()
      .references("data_profiles.profile_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
