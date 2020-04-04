const db = require("../data/dbConfig");

async function addProfile(profile, ref) {
  const newProfile = await db("data_profiles")
    .insert(profile)
    .returning("*")
    .then(data => data[0]);

  //add entry to reference table
  await db("xref_new_profile").insert({
    instance_id: ref.instance_id,
    user_id: ref.user_id,
    profile_id: newProfile.profile_id
  });
  return newProfile;
}

async function getProfilesByInstanceId(id) {
  const profiles = await db("data_profiles")
    .join(
      "xref_new_profile",
      "xref_new_profile.profile_id",
      "data_profiles.profile_id"
    )
    .join(
      "data_instances",
      "data_instances.instance_id",
      "xref_new_profile.instance_id"
    )
    .select(
      "data_profiles.display_name",
      "data_profiles.about",
      "data_profiles.dob",
      "data_profiles.pic_url"
    )
    .where("data_instances.instance_id", id);
  return profiles;
}

module.exports = {
  addProfile,
  getProfilesByInstanceId
};
