const router = require("express").Router();
const springReview = require("../models/springReview");
const withAuth = require("../utils/auth");

router.use(express.json());

// router.get("/spring/reviews", async (req, res) => {
//   springReview.findAll({
//     attributes: ["Spring", "reviewingUser", "userSpringRating", "reviewText"],
//   })
//     .then((reviewData) => {
//       const reviews = reviewData.map((post) => post.get({ plain: true }));

//       res.render("springReviewForm")
//     })
// });

router.post("/:springID/reviews", withAuth, async (req, res) => {
  try {
    const { reviewingUser, userSpringRating, reviewText, springID } = req.body;

    if (!reviewingUser || !userSpringRating || !reviewText || !springID) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const createdReview = await springReview.create({
      Spring: springID,
      reviewingUser,
      userSpringRating,
      reviewText,
    });

    res.status(201).json(createdReview);
    alert("Review successfully submitted.");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create review" });
  }
});

module.exports = router;
