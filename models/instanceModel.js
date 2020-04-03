const db = require("../data/dbConfig");

async function addInstance(instance) {
  const newInstance = await db("data_instances")
    .insert(instance)
    .returning("*")
    .then(data => data[0]);
  return newInstance;
}

async function findInstance(id) {
  const instance = await db("data_instances").where(
    "data_instances.instance_id",
    id
  );
  return instance;
}

async function getInstancebyId(id) {
  const instance = await db("data_instances")
    .where("instance_id", id)
    .select("*")
    .first();
  return instance;
}

async function getInstances() {
  const instance = await db("data_instances")
    .select("*")
    .returning("*");
  return instance;
}

module.exports = {
  addInstance,
  getInstancebyId,
  getInstances,
  findInstance
};
