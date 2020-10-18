let db = require('../models');
let postModel = db.post;

let postController = () => {
  const get = async function (req, res) {
    const commentCount = await postModel
      .findAll({
        attributes: [
          'id',
          [db.Sequelize.fn("COUNT", db.Sequelize.col("comments.id")), "commentCount"]
        ],
        include: [
          {
            model: db.comment,
            attributes: []
          }],
        group: ['post.id']
      });

    const posts = await postModel
      .findAll({
        include: [
          {
            model: db.user,
            as: 'createdBy'
          },
          {
            model: db.comment,
            limit: 1,
            include: [ db.user ]
          }],
        group: ['post.id']
      });

    for (const post of posts) {
      const count = (commentCount.find(countedPost => countedPost.dataValues.id === post.dataValues.id)).dataValues.commentCount;
      post.dataValues["commentCount"] = count;
    }
    res.status(200);
    res.json(posts);
  }

  const post = function (req, res) {
    let post = req.body;
    return postModel
      .create({
        content: post.content,
        userId: post.userId,
      })
      .then((post) => {
        res.status(200);
        res.json(post);
      });
  }
  return { get, post };
}

module.exports = postController();