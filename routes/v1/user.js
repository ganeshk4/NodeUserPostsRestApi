let express = require('express');
let router = express.Router();
let userController = require('../../controllers/user');

module.exports = () => {
  router.route('/')
  .get((req, res) => {
    userController.get(req, res);
  })
  .post((req, res) => {
    userController.post(req, res);
  });

  return router;
};