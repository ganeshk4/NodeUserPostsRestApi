let express = require('express');
let router = express.Router();
let commentController = require('../../controllers/comment');


router.get('/', (req, res) => {
  // commentController.get(req, res);
});

router.post('/', (req, res) => {
  commentController.post(req, res);
});

module.exports = router;
