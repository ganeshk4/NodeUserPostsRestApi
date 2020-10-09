let db = require('../models');
let postModel = db.post;

let postController = () => {
  const get = function (req, res) {
    postModel
    .findAll({
      include: db.user
    })
    .then((posts) => {
      res.status(200).json(posts);
    });
  }

  const post = function (req, res) {
    let post = req.body;
    return postModel
    .create({
      content: post.content,
      userId: post.userid,
    })
    .then((post) => {
      res.status(200);
      res.json(post);
    });
  }
  return { get, post };
}

module.exports = postController();