const router = require('express').Router();
const apiRoutes = require('./api')
const home = require('./homeRoutes');
const amenityRoutes = require('./amenityRoutes.js')
const searchRoutes = require('./searchRoutes');
const reviewRoutes = require('./springReviewRoutes')
const favorites = require('./favorites');


router.use('/',   home);
router.use('/api', apiRoutes);
router.use('/amenity', amenityRoutes);
router.use('/search', searchRoutes);
router.use('/review', reviewRoutes);
router.use('/favorites', favorites)

module.exports = router;
