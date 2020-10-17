let db = require('../models');
let model = db.comment;

let controller = () => {

  const post = function (req, res) {
    let body = req.body;
    return model
    .create({
      content: body.content,
      userId: body.userId,
      postId: body.postId
    })
    .then((comment) => {
      res.status(200);
      res.json(comment);
    });
  }
  return { post };
}

module.exports = controller();