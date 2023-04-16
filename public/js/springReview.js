document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");

  reviewForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const reviewingUser = document.getElementById("reviewingUser").value;
    const userSpringRating = document.getElementById("userSpringRating").value;
    const reviewText = document.getElementById("reviewText").value;
    const springID = document.getElementById("springID").value;

    const reviewData = {
      reviewingUser,
      userSpringRating,
      reviewText,
      springID,
    };

    try {
      const response = await fetch("/spring/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        console.log("Review submitted successfully");
        alert("Review successfully submitted!");
      } else {
        console.error("Failed to submit review", response);
      }
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  });
});
