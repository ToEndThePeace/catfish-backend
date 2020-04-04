const tname = "data_users";
exports.up = function(knex) {
  return knex.schema.createTable(tname, table => {
    table //Primary key
      .increments("user_id")
      .primary()
      .unique()
      .unsigned()
      .notNullable();
    table //Unique username
      .string("username")
      .unique()
      .notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("fname").notNullable();
    table.string("lname").notNullable();
    table.specificType("image_url", "text ARRAY");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tname);
};
