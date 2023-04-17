
var favoriteModal = $('#favoriteModal');


let player;
function onYouTubeIframeAPIReady() {

    // Call your player initialization function here
    const currentUrl = window.location.href;
const id = currentUrl.split('/').pop();
    
    // Get the current URL
    
    // Extract the ID from the URL
    
    const videoIndex = ['5V8cM9h4Hv4', '572Wde50ivs', '5J01oZPN_oA', 'DZywLrtbPlU', 'xNn_kek59j4', 'B-mtiykfHao', 'LaADC6I4Ofw', 'k57uK6aNNfg', 'tPzZ5JCfjs0', 'ibULOoGaA', 'Viytwxg0QRc', 'b9PXOXQzs-4'];
    initializePlayer();
    
function initializePlayer() {
  // Create and configure your player here
  var playerDiv = document.getElementById('player');
  var iframe = document.createElement('iframe');
  iframe.width = '470';
  iframe.height = '260';
  iframe.src = 'https://www.youtube.com/embed/'+ videoIndex[id-1];
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  playerDiv.appendChild(iframe);
}


// Extract the ID from the URL
const id = currentUrl.split('/').pop();

function onYouTubeIframeAPIReady() {

  const videoIndex = ['5V8cM9h4Hv4', '572Wde50ivs', '5J01oZPN_oA', 'DZywLrtbPlU', 'xNn_kek59j4', 'B-mtiykfHao', 'LaADC6I4Ofw', 'k57uK6aNNfg', 'tPzZ5JCfjs0', 'ibULOoGaA', 'Viytwxg0QRc', 'b9PXOXQzs-4'];
  initializePlayer();

  // Call player initialization function here
  function initializePlayer() {
    // Create and configure your player here
    var playerDiv = document.getElementById('player');
    var iframe = document.createElement('iframe');
    iframe.width = '470';
    iframe.height = '260';
    iframe.src = 'https://www.youtube.com/embed/' + videoIndex[id - 1];
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    playerDiv.appendChild(iframe);
  }

  // Set the cookie after the player is initialized
  document.cookie = "cookie_name=cookie_value; SameSite=None; Secure";
}

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

}

for (var i =0; i < fileArray.length; i++ ) {
  getBase64(fileArray[i]);

}
window.location.reload()


})

// Get references to the HTML elements
const mediaImage = document.querySelector('#mediaImage');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Fetch the media data for the current ID
fetch(`${id}/media`)
  .then(response => response.json())
  .then(data => {
    // Set the displayMedia variable
    displayMedia = data;

    // Update the image
    updateImage();
  })
  .catch(error => {
    console.error(error);
  });

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


const currentUrl = window.location.href;

const id = currentUrl.split('/').pop();

// Fetch the media data for the current ID
fetch(`/spring/${id}/media`)
  .then(response => response.json())
  .then(data => {
    // Set the displayMedia variable
    displayMedia = data;

    // Update the image
    updateImage();
  })
  .catch(error => {
    console.error(error);
  });

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