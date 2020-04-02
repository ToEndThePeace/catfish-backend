const db = require("../data/dbConfig");

async function addComment(comment) {
  const newComment = await db("data_comments")
    .insert(comment)
    .returning("*")
    .then(data => data[0]);
  return newComment;
}

module.exports = {
  addComment
};
