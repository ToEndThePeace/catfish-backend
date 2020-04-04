const db = require("../data/dbConfig");

async function addPost(post, ref) {
  const newPost = await db("data_posts")
    .insert(post)
    .returning("*")
    .then(data => data[0]);

  await db("xref_new_post").insert({
    profile_id: ref.profile_id,
    post_id: newPost.post_id
  });
  return newPost;
}

async function getPosts() {
  const posts = await db("data_posts")
    .join("xref_new_post", "xref_new_post.post_id", "data_posts.post_id")
    .join(
      "data_profiles",
      "data_profiles.profile_id",
      "xref_new_post.profile.id"
    )
    .select(
      "data_posts.post_content",
      "data_posts.post_image_url",
      "data_posts.post_timestamp"
    );

  return posts;
}

async function getPostsbyProfileId(id) {
  const posts = await db("data_posts")
    .join("xref_new_post", "xref_new_post.post_id", "data_posts.post_id")
    .join(
      "data_profiles",
      "data_profiles.profile_id",
      "xref_new_post.profile.id"
    )
    .select(
      "data_posts.post_content",
      "data_posts.post_image_url",
      "data_posts.post_timestamp"
    )
    .where("data_profiles.profile_id", id);

  return posts;
}

async function getPostsbyInstanceId(id) {
  const posts = await db("data_posts")
    .join("xref_new_post", "xref_new_post.post_id", "data_posts.post_id")
    .join(
      "data_profiles",
      "data_profiles.profile_id",
      "xref_new_post.profile.id"
    )
    .join(
      "xref_new_profile",
      "xref_new_profile.profile_id",
      "data_profiles.profile_id"
    )
    .select(
      "data_profiles.pic_url",
      "data_profiles.display_name",
      "data_posts.post_content",
      "data_posts.post_image_url",
      "data_posts.post_timestamp"
    )
    .where("xref_new_profile.instance_id", id);

  return posts;
}

module.exports = {
  addPost,
  getPosts,
  getPostsbyProfileId,
  getPostsbyInstanceId
};
