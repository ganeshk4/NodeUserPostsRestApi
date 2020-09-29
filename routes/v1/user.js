let express = require('express');
let router = express.Router();
let db = require('../../models');
let userModel = db.user;

router.get('/all',(req, res) => {
  userModel.findAll()
    .then((users) => {
      res.status(200).json(users);
    });
});

router.post('/create',(req, res) => {
  let newUser = req.body;
  userModel.create({
    name: newUser.name
  })
  .then((user) => {
     res.status(200).json(user);
  });
});

module.exports = router;