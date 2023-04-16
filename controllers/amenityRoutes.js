
const router = require('express').Router();
const Amenity = require('../models/Amenity');
const amenityMedia = require('../models/amenityMedia');
const amenityChoice = require('../models/amenityChoice');
const Spring = require('../models/Spring');
const sequelize = require('../config/connection');
const springMedia = require('../models/springMedia');


router.get('/:amenityID', async (req, res) => {

    console.log(req.params.amenityID)
    var displayAmenity = await Amenity.findByPk(req.params.amenityID, {raw: true});
    const mainImage = await amenityMedia.findOne({
        where: {
            Amenity: req.params.amenityID,
            
            mainImage: true}}, {raw: true});
    const displayMedia =  amenityMedia.findAll({
        where: {
            Amenity: req.params.amenityID,
            
        },
    
    })



    
    res.render('Amenity', {displayAmenity, mainImage, displayMedia})


    return

})






module.exports = router;