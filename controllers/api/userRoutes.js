const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.userID;
      req.session.logged_in = true;
      req.session.firstName = userData.firstName;
      req.session.lastName = userData.lastName;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {

  console.log('hitting login ========================')
  try {
    const userData = await User.findOne({ where: { emailAddress: req.body.email } });
console.log('----------------------- user data', userData)
  

    console.log(req.body.password, '----------password')
    const validPassword =  userData.checkPassword(req.body.password);
    console.log('valid password ---------------', validPassword)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    } else {

    await req.session.save(() => {
      req.session.user_id = userData.userID;
      req.session.logged_in = true;
      req.session.firstName = userData.firstName;
      req.session.lastName = userData.lastName;

    })
    res.redirect('/homepage')
  
  };
    

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', async  (req, res) => {
  console.log('logged in? ', req.session.logged_in)
  if (req.session.logged_in) {
   await  req.session.destroy();
   res.redirect('/')
}});

module.exports = router;