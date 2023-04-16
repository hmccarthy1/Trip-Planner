const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes');
const amenityRoutes = require('./amenityRoutes.js')
const searchRoutes = require('./searchRoutes');
const reviewRoutes = require('./springReviewRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/amenity', amenityRoutes);
router.use('/search', searchRoutes);
router.use('/review', reviewRoutes)
module.exports = router;
