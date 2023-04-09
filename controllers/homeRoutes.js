const router = require('express').Router();
const User = require('../models/User')
const test = "true";
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // We will show the Springs here
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
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

    res.render('login', {})

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
    // const userData = await User.create(req.body);

    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.logged_in = true;
    //   res.status(200).json(userData);

    // });
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

module.exports = router;