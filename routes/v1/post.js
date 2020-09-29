let express = require('express');
let router = express.Router();
let db = require('../../models');
let postModel = db.post;

router.get('/all', (req, res) => {
  postModel
    .findAll({
      include: db.user
    })
    .then((posts) => {
      res.status(200).json(posts);
    });
});

router.post('/create', (req, res) => {
  let post = req.body;
  postModel
    .create({
      content: post.content,
      userId: post.userid,
    })
    .then((post) => {
      res.status(200).json(post);
    });
});

module.exports = router;
