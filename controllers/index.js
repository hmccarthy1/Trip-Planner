const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const amenityRoutes = require('./amenityRoutes.js')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/amenity', amenityRoutes)
module.exports = router;
