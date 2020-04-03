const tname = "data_users";
exports.up = function (knex) {
  return knex.schema.createTable(tname, (table) => {
    table //Primary key
      .string("user_id")
      .primary()
      .unique()
      .notNullable();
    table.string("email").notNullable();
    table.string("fname").notNullable();
    table.string("lname").notNullable();
    table.string("phone").notNullable();
    table.specificType("image_url", "text ARRAY");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists(tname);
};
