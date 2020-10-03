let db = require('../models');
let userModel = db.user;

let userController = () => {
  const get = function (req, res) {
    userModel.findAll()
    .then((users) => {
      res.status(200).json(users);
    });
  }

  const post = function (req, res) {
    let newUser = req.body;
    userModel.create({
      name: newUser.name
    })
    .then((user) => {
      res.status(200).json(user);
    });
  }
  return { get, post };
}

module.exports = userController();