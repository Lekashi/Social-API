const router = require('express').Router();
const users = require('./usersRoutes');
const thoughts = require('./thoughtsRoutes');

router.use('/users', users);
router.use('/thoughts', thoughts);

module.exports = router;