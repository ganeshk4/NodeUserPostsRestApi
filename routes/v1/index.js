let express = require('express');
let router = express.Router();
let userRoutes = require('./user')

router.use('/user', userRoutes);

module.exports = router;