const router = require('express').Router();
const User = require('../models/User')
const test = "true"

router.get('/', async (req, res) => {
    res.render('homepage', {})
})

router.get('/login', async (req, res) => {
    res.render('login', {})
})

router.get('/register', async (req, res) => {
    res.render('register')
} )

router.post('/register', async (req, res) => {
    try {
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


module.exports = router;