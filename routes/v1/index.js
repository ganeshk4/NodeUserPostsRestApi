let express = require('express');
let router = express.Router();
let userRouter = require('./user');
let postRouter = require('./post');

router.use('/user', userRouter());
router.use('/post', postRouter);

module.exports = router;