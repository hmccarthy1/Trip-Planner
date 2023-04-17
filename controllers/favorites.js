const withAuth = require('../utils/auth');
const favoritedSprings = require('../models/favoritedSpring');
const User = require('../models/User');
const Spring = require('../models/Spring');
const springMedia = require('../models/springMedia');


const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
    console.log('logged in? ', req.session.logged_in);
    console.log('userID = ', req.session.user_id);
    var springs = await favoritedSprings.findAll({
        where: {
            User: req.session.user_id
        },
        raw: true
    });

    var user = await User.findByPk(req.session.user_id, {raw: true});
    var userName = user.firstName
    var loggedIn = req.session.logged_in;
    var displaySprings = [];
    
    for (var i = 0; i < springs.length; i++) {
        var springIndex = await Spring.findOne({
                where: {
                    springID: springs[i].Spring
                },
                raw: true
        });
        var displayMedia = await springMedia.findOne({
            where: {
                Spring: springIndex.springID
            },
            attributes: 
                ['mediaURL'],
                raw: true
            
        });

        springIndex.mediaURL = displayMedia.mediaURL;
        displaySprings.push(springIndex)

    }

    console.log('display springs ------------', displaySprings);

    console.log(userName, loggedIn);
    res.render('favorites', {displaySprings, userName, loggedIn})


    

})















module.exports = router