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
      .integer("user_id")
      .references("user_id")
      .inTable("data_users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("instance_id")
      .references("instance_id")
      .inTable("data_instances")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("profile_id")
      .references("profile_id")
      .inTable("data_profiles")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
