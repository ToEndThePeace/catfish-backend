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
      .references("data_users.user_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("instance_id")
      .references("data_instances.instance_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .foreign("profile_id")
      .references("data_profiles.profile_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
