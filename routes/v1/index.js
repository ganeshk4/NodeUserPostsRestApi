let express = require('express');
let router = express.Router();
let userRouter = require('./user');
let postRouter = require('./post');
let commentRouter = require('./comment');

router.use('/user', userRouter());
router.use('/post', postRouter);
router.use('/comment', commentRouter);

module.exports = router;