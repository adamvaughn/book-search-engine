const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/user-routess', userRoutes);

module.exports = router;
