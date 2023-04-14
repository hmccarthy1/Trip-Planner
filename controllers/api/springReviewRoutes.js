const router = require("express").Router();
const springReview = require("../models/springReview");

router.use(express.json());

router.post("/spring/reviews", async (req, res) => {
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
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create review" });
  }
});

module.exports = router;
