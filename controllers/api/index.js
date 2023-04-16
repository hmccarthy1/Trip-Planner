const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewMedia = require('./reviewMedia');

router.use('/users', userRoutes);
router.use('/reviewMedia', reviewMedia);


module.exports = router;