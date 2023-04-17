const router = require("express").Router();
const withAuth = require("../utils/auth");
const springReview = require('../models/springReview');
const favoritedSpring = require("../models/favoritedSpring");




router.post("/", withAuth, async (req, res) => {
  try {
    var reviewingUser = req.session.user_id;
    console.log(req.body, '-------------------')
    console.log(req.session.logged_in, '------logged in?')

    if(!req.session.logged_in) {
      res.redirect('/floridasprings/login');
      return;
    }
    
    const {userSpringRating, reviewText, springID } = req.body;

   

    const createdReview = await springReview.create({
      Spring: springID,
      reviewingUser,
      userSpringRating,
      reviewText,
    });

    console.log(createdReview, 'createddddddddd')

    res.status(201).json(createdReview);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create review" },
    {err: err});
  }
});


router.post('/favorite', withAuth,  async (req, res) => {
  
  try {
  var newFavorite = await favoritedSpring.create({
    User: req.session.user_id,
    Spring: req.body.id
  })


  console.log("------ new favorite ------", newFavorite)



  
  
  
  
  
  console.log('route successful');
  res.status(200).send({message: "Created successfully"})

} catch (err) {
  res.status(400).send({message: "an error occured"})
}


})

module.exports = router;
