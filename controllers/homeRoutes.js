const router = require('express').Router();
const User = require('../models/User');
const test = "true";
const withAuth = require('../utils/auth');
const Spring = require('../models/Spring');
const springMedia = require('../models/springMedia');

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
      res.redirect('/dashboard');
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
      res.redirect('/dashboard');
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

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] }
      // include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Temporary route for testing
router.get('/spring',/*withAuth ,*/ async (req, res) => {
  // find a single spring by its `id`
  try {
    // const springId = await Spring.findByPk(req.params.id,{
    //   include: [{
    //        model: Spring
    //     }]
    // });

    // res.status(200).json(springId);

    res.render('spring');

  } catch (err) {
    res.status(400).json(err);
  }
});

//Spring with ID - Commenting middleware withAuth for testing
router.get('/spring/:id',/*withAuth ,*/ async (req, res) => {
  // find a single spring by its `id`
  try {
    const springData = await Spring.findByPk(req.params.id);

    const displayMedia = await springMedia.findAll({
      where: {
        Spring: req.params.id,
      },      
    })

    const spring = springData.get({ plain: true });

    res.render('spring', {
      ...spring,
      displayMedia,
      logged_in: req.session.logged_in
    });

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