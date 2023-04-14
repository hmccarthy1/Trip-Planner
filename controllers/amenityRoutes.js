
const router = require('express').Router();
const Amenity = require('../models/Amenity');
const amenityMedia = require('../models/amenityMedia');
const amenityChoice = require('../models/amenityChoice');
const Spring = require('../models/Spring');


router.get('/:amenityID', async (req, res) => {

    console.log(req.params.amenityID)
    var displayAmenity = await Amenity.findByPk(req.params.amenityID, {raw: true});
    const mainImage = await amenityMedia.findOne({
        where: {
            Amenity: req.params.amenityID,
            mainImage: true
        }
    }, {raw: true})
    res.render('Amenity', {displayAmenity, mainImage})


    

})






module.exports = router;