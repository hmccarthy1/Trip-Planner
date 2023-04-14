const router = require('express').Router();
const amenityChoice = require('../models/amenityChoice');


router.get( '/', async (req, res) => {

    const amenityOptions = await amenityChoice.findAll(
        
        {raw: true});
    console.log(amenityOptions)
    res.render('Search', {amenityOptions})
} )
















module.exports = router;
