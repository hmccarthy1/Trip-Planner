
var favoriteModal = $('#favoriteModal');
const currentUrl = window.location.href;

const id = currentUrl.split('/').pop();



// Extract the ID from the URL



  // Set the cookie after the player is initialized


const addButton = $('#addReview');

addButton.click(async function (event) {

  var reviewID;
  const fileUpload = document.getElementById('fileUpload')
  const userSpringRating = $('#Rating').val();
  const reviewText = $('#Comments').val();
  const springID = $('#springID').text()
  var fileArray = fileUpload.files;
  console.log('springID', springID)

  console.log(fileUpload.files);
  var newReview = await fetch('/review', {
    method: 'POST',
    body: JSON.stringify({
      userSpringRating,
      reviewText,
      springID

    }),

    headers: { 'Content-Type': 'application/json' },

  }).then(res => res.json()).then(data => {
    reviewID = data.springReviewID
  })

  console.log('reviewID', reviewID);


async function getBase64(file)  {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = async function () {
    console.log(reader.result);
    mediaURL = reader.result;
   var results = await fetch('/api/reviewMedia', {
        method: 'POST', 

        body: JSON.stringify({
          mediaURL: mediaURL,

          Review: reviewID
        }),
        headers: { 'Content-Type': 'application/json' },


      })
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  };
  for (var i =0; i < fileArray.length; i++ ) {
    await getBase64(fileArray[i]);
  
  }
  window.location.reload()
})






// Get references to the HTML elements
const mediaImage = document.querySelector('#mediaImage');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Fetch the media data for the current ID
// fetch(`${id}/media`)
//   .then(response => response.json())
//   .then(data => {
//     // Set the displayMedia variable
//     displayMedia = data;

//     // Update the image
//     updateImage();
//   })
//   .catch(error => {
//     console.error(error);
//   });

// displayMedia is an array of objects that saves the data received in the fetch and
//that is parsed as JSON.
function updateImage() {
  mediaImage.src = displayMedia[currentIndex].mediaURL;
}

prevButton.addEventListener('click', function onPrevClick() {
  currentIndex = (currentIndex - 1 + displayMedia.length) % displayMedia.length;
  updateImage();
});

nextButton.addEventListener('click', function onNextClick() {
  currentIndex = (currentIndex + 1) % displayMedia.length;
  updateImage();
});




// // Fetch the media data for the current ID
// fetch(`/spring/${id}/media`)
//   .then(response => response.json())
//   .then(data => {
//     // Set the displayMedia variable
//     displayMedia = data;

//     // Update the image
//     updateImage();
//   })
//   .catch(error => {
//     console.error(error);
//   });

var callFavorite = $('#favoriteSpring');

callFavorite.click(async function(event) {
  fetch('/review/favorite', {
    method: 'POST', 
    body: JSON.stringify({id: id}),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json()).then(data => {
    console.log(data);

    if (data.message == "Created successfully") {
      document.location.reload()
    }
  
  
  
  })

})