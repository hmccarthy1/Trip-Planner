const router = require('express').Router();
const User = require('../models/User');
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
    console.log('session ------- ', req.session.logged_in);

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

  console.log('HiTTING=======================================')


    var  top5 = await Spring.findAll({
      limit: 5,
      raw: true,
      order: [
        ['springID', 'DESC']
      ]
    
    },
    
    );

console.log('top 5', top5, "length: ", top5.length)
    

top5[0].URL = 'https://res.cloudinary.com/dsvmviwkc/image/upload/v1681441564/ginnieMain_vsq9ht.jpg';
top5[1].URL = "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681680355/hu9ow4bb4kpsbrhp9rtf.jpg";
top5[2].URL = "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443092/8696137743_530350a358_b_xtdprv.jpg";
top5[3].URL = "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681443580/7e17e2e44eb5c913e2c585bc05ad0145_ba4i5k.jpg";
top5[4].URL = "https://res.cloudinary.com/dsvmviwkc/image/upload/v1681442901/Blue-Springs-State-Park_084e5789-a552-d6e7-6866fc9f12ece6b1_fwc7qw.jpg";


console.log('   usernaem =====================', userName);
console.log('================================ logged in', loggedIn)
    res.render('homepage', 
    { top5, loggedIn, userName});
  } catch (err) {
    res.status(500);
  }
});

router.get('/login', async (req, res) => {

  try {
    // If the user is already logged in, redirect the request to the user dashboard
    if (req.session.logged_in) {
      res.redirect('/');
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
      res.redirect('/');
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

    const springData = await Spring.findAll({
      where: {
        springID: req.params.id,
      },
      attributes: [
        'springID', 
        'springName',
        'springDescription' 
      ],
      raw: true
    });
    console.log('found spring ------', springData)
    //Added photos

    console.log('----- test spring media find all ----- ')

   const displayMedia = await springMedia.findOne({
    where: {
      Spring: req.params.id
    },
    attributes: ['mediaURL'],
    raw:true
   })
   


    console.log('------- passed spring media test ------')

    console.log('springMedia ------', displayMedia)
    const allReviews = await springReview.findAll({
      where: {
        Spring: req.params.id
      },
      raw: true,
      attributes: ['springReviewID', 'reviewText']
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
      allReviews[i].URL = handleMedia[i]
    }

    console.log( '------- handle media ------', handleMedia)

    //Get amenities for the spring

    const amenities = await Amenity.findAll({
      where: {
        Spring: req.params.id
      }, raw: true,
      attributes: [
        'amenityID', 'Spring', 'amenityType', 'amenityDescription', 'amenityTitle'
      ]
    })


    console.log('passed amenities ---------------------', amenities)

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
    res.render('spring', {
      springData,
      displayMedia,
      allReviews,
      media,
      loggedIn,
      userName
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

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard');

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;