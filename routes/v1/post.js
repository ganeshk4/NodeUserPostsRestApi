let express = require('express');
let router = express.Router();
let postController = require('../../controllers/post');


router.get('/', (req, res) => {
  postController.get(req, res);
});

router.post('/', (req, res) => {
  postController.post(req, res);
});

module.exports = router;
