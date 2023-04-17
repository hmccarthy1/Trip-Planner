const router = require('express').Router();
const { raw, json } = require('body-parser');
const Amenity = require('../models/Amenity');
const Spring = require('../models/Spring');
const amenityChoice = require('../models/amenityChoice');
const { Op } = require("sequelize");
const { compareSync } = require('bcrypt');
const Sequelize = require('sequelize');
const { sequelize } = require('../config/connection');
const { route } = require('./api');
require('dotenv').config();
const springMedia = require('../models/springMedia')



router.get('/a/:body', async (req, res) => {


    var loggedIn;
    if (req.session.logged_in != true) {
       loggedIn = false;
       userName = ""
    } else {
      loggedIn = true;
      console.log(
        '================================== logged IN ====================='
      )
      userName = req.session.firstName
    }

            console.log(req.params.body);
            console.log('request JSON', JSON.parse(req.params.body))
            jsonBody = JSON.parse(req.params.body);
           
            var nameFilter = jsonBody.nameFilter;
            console.log('FILTERS', jsonBody.filters)

            console.log('body ------------------------------------- ' + req.params.body)
        var filters = await amenityChoice.findAll({
            where: {
                amenityType: {[Op.or]: jsonBody.filters},
               
            
            },
            attributes: [['amenityChoiceID', "amenityType"]],
            raw: true
          
    },
        );
        console.log('--------------------filter------------------------', filters)
        

      var amenities = await  Amenity.findAll({
            where:{
               
                    [Op.or]: filters,
                
            },
            attributes: ['Spring'],
            raw: true,
            limit: 7
        });




        console.log(amenities, amenities)

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

        console.log(`unique ---------,${unique}`)
      
    console.log(`filters---------, ${filters}`)
   var matchingRecords = [-1];

   for (var a = 0; a < unique.length; a++) {

        var thisSpringAmenityCount = 0;
        for (var b = 0;  b < amenityValues.length; b++) {
            if (amenityValues[b] == unique[a]) {
                thisSpringAmenityCount++
            }
        }
        if (thisSpringAmenityCount == jsonBody.filters.length) {
          matchingRecords.push(unique[a])  
        }
    }


console.log('--------------------               ' + filters);
console.log(`name filters ----------\n` + req.params.body.nameFilter)


console.log(amenities);
console.log(unique);
console.log('------------------------------------ mathcing records \n' + matchingRecords)



var finalResults = await Spring.findAll({
    where: {
        springID: {[Op.or]: matchingRecords},
        springName: {[Op.startsWith]: nameFilter}
       
    
    },
   
        raw: true
      
});

var handleMedia = [];
for (var i = 0; i < finalResults.length; i++ ) {
    var firstMedia; 
      var mediaCheck;
      mediaCheck = await springMedia.findOne({
          where: {
            Spring: finalResults[i].springID
          },
          attributes: [
            'mediaURL'
          ],
          raw: true
        });

        if (mediaCheck) {
          firstMedia = mediaCheck.mediaURL
        } else {
          firstMedia = 'https://res.cloudinary.com/dsvmviwkc/image/upload/v1681646450/vpccfifvivyikxov5xsb.png'
        };

        handleMedia.push(firstMedia)
       
    }
    
    for (var i = 0; i < handleMedia.length; i ++ ) {
      finalResults[i].URL = handleMedia[i]
    }





console.log('----------------------------------------final--------------------------------------', finalResults );

res.render('results', {finalResults, loggedIn, userName})
return

        

    })





    
    router.get( '/', async function (req, res)  {
    
    
        const amenityOptions = await amenityChoice.findAll(
            
            {raw: true});
            console.log(amenityOptions)
            res.render('Search', {amenityOptions})
        } )
        








module.exports = router;
