const router = require('express').Router();
const { raw } = require('body-parser');
const Amenity = require('../models/Amenity');
const Spring = require('../models/Spring');
const amenityChoice = require('../models/amenityChoice');
const { Op } = require("sequelize");
const { compareSync } = require('bcrypt');



router.get( '/', async (req, res) => {


    const amenityOptions = await amenityChoice.findAll(
        
        {raw: true});
        console.log(amenityOptions)
        res.render('Search', {amenityOptions})
    } )
    
    
    router.post('/', async (req, res) => {
        
        var filters = await amenityChoice.findAll({
            where: {
                amenityType: {[Op.or]: req.body.filters}
            },
            attributes: [['amenityChoiceID', "amenityType"]],
            raw: true
          
    },
        );
        

      var amenities = await  Amenity.findAll({
            where:{
               
                    [Op.or]: filters
                
            },
            attributes: ['Spring'],
            raw: true
        });


        console.log(amenities)

        console.log(amenities.length)
        var unique = []
        var amenityValues = []
        for (var i = 0; i < amenities.length; i++) {
            amenityValues.push(amenities[i].Spring)
        }

        console.log('------- amenity values ---------- \n' + amenityValues)


        for (var i = 0; i < amenityValues.length; i++) {
            if( unique.includes(amenityValues[i]) ) {
             console.log('no')
            } else {
                unique.push(amenityValues[i]);
                
            }
        };

        console.log(`unique --------- ${unique}`)
      
    console.log(`filters--------- ${filters}`)
   var matchingRecords = [];

   for (var a = 0; a < unique.length; a++) {

        var thisSpringAmenityCount = 0;
        for (var b = 0;  b < amenityValues.length; b++) {
            if (amenityValues[b] == unique[a]) {
                thisSpringAmenityCount++
            }
        }
        if (thisSpringAmenityCount == req.body.filters.length) {
          matchingRecords.push(unique[a])  
        }
    }


console.log('--------------------               ' + filters);



console.log(amenities);
console.log(unique);
console.log('------------------------------------ mathcing records \n' + matchingRecords)

var finalResults = await Spring.findAll({
    where: {
        springID: {[Op.or]: matchingRecords}
    }
})

res.send(finalResults);


})













module.exports = router;
