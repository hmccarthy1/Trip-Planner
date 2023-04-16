const router = require('express').Router();
const User = require('../models/User');
const test = "true";
const withAuth = require('../utils/auth');
const Spring = require('../models/Spring');
const springMedia = require('../models/springMedia');
const reviewMedia = require('../models/reviewMedia');
const springReview = require('../models/springReview')
const amenityMedia = require('../models/amenityMedia');
const Amenity = require('../models/Amenity');
const amenityChoice = require('../models/amenityChoice');

router.get('/', async (req, res) => {
  try {
    // We will show the Springs here

    const user = {};


    if (req.session.logged_in) {
      console.log("it's logged");
      const username = req.session.firstName + ' ' + req.session.lastName;
      console.log("username: " + username);
      user.username = username;
      user.logged_in = true;
    }
    res.render('homepage', user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {

  try {
    // If the user is already logged in, redirect the request to the user dashboard
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }

    res.render('login', { logged_in: req.session.logged_in })

  } catch (err) {
    res.status(500).json(err);
  }

})

router.get('/register', async (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  try {

    // If the user is already logged in, redirect the request to the dashboard
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);

    });
  } catch (err) {
    res.status(400).json(err);
  }
}
)

router.get('/homepage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
      // include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('homepage', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Temporary route for testing
router.get('/spring',  async (req, res) => {
  // find a single spring by its `id`
  try {
    // const springId = await Spring.findByPk(req.params.id,{
    //   include: [{
    //        model: Spring
    //     }]
    // });

    // res.status(200).json(springId);
console.log(req.session.user_id)
    res.render('spring');

  } catch (err) {
    res.status(400).json(err);
  }
});

//Spring with ID - Commenting middleware withAuth for testing
router.get('/spring/:id',/*withAuth ,*/ async (req, res) => {
  // find a single spring by its `id`
  try {
    console.log('hitting')
    const springData = await Spring.findByPk(req.params.id);
    console.log('found spring ------', springData)
    //Added photos
    const displayMedia = await springMedia.findAll({
      where: {
        Spring: req.params.id,
      },      
      raw: true
    });

    console.log('springMedia ------', displayMedia)
    const allReviews = await springReview.findAll({
      where: {
        Spring: req.params.id
      },
      raw: true
    });

    console.log('---- all reviews -----', allReviews)

    var handleMedia = [];

    for (var i = 0; i < allReviews.length; i++) {
      var firstMedia; 
      var mediaCheck;
      mediaCheck = await reviewMedia.findOne({
          where: {
            Review: allReviews[i].springReviewID
          },
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
      allReviews[i].URL = handleMedia[i]
    }

    console.log( '------- handle media ------', handleMedia)

    //Get amenities for the spring

    const amenities = Amenity.findAll({
      where: {
        Spring: req.params.id
      }, raw: true
    })



    let media = [];
    for (let i = 0; i < amenities.length; i++){
      
      let mediaToAdd = await amenityChoice.findOne({
        where: {
          amenityChoiceID: amenities[i].amenityType,
        }, raw: true
      });
      console.log('mediaToAdd', i," ", mediaToAdd)
      media.push(mediaToAdd.amenityIcon);
    }

    console.log('----- media icons -----', media);
    const spring = springData.get({ plain: true });
    const springID = req.params.id
    console.log('SPING ID--------------', springID)
console.log('req.session.logged_in ------ ', req.session.logged_in)
    res.render('spring', {
      ...spring,
      displayMedia,
      logged_in: req.session.logged_in,
      allReviews,
     
      media,
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// This route was created to fetch the spring.js that will save this data to an array
router.get('/spring/:id/media', async (req, res) => {
  try {
    const displayMedia = await springMedia.findAll({
      where: {
        Spring: req.params.id,
      },
    });
    res.json(displayMedia);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Contact Us route
router.get('/contactUs', async (req, res) => {
  try {
    res.render('contactUs');

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;