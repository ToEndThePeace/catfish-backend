const db = require("../data/dbConfig");

async function addUser(user) {
  const newUser = await db("data_users")
    .insert(user)
    .returning("*")
    .then((data) => data[0]);
  return newUser;
}

async function getUserbyId(id) {
  const user = await "data_users"
    .where("user_id", id)
    .select("phone", "email", "fname", "lname", "image_url")
    .first();
  return user;
}

async function updateUser(changes, id) {
  const user = await db("data_users")
    .where({ id })
    .update(changes)
    .returning(["email", "fname", "lname", "image_url"])
    .then((update) => update[0]);
  return user;
}

// I don't think we need this, ******
// we're pulling PROFILES not necessarily users
async function getUsersInInstance(id) {
  const users = await db("data_users")
    .join("xref_new_profile", "data_users.id", "xref_new_profile.user_id")
    .join(
      "data_instances",
      "data_instances.instance_id",
      "xref_new_profile.instance_id"
    )
    .select(
      "data_users.email",
      "data_users.fname",
      "data_users.lname",
      "data_users.image_url"
    )
    .where("instance_id", id);

  return users;
}

module.exports = {
  addUser,
  getUserbyId,
  updateUser,
  getUsersInInstance,
};
