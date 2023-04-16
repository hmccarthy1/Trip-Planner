let player;
function onYouTubeIframeAPIReady() {
  // Call your player initialization function here
  initializePlayer();

  // Set the cookie after the player is initialized
  document.cookie = "cookie_name=cookie_value; SameSite=None; Secure";
}

// Get the current URL
const currentUrl = window.location.href;

// Extract the ID from the URL
const id = currentUrl.split('/').pop();

videoIndex = ['5V8cM9h4Hv4', '572Wde50ivs', '5J01oZPN_oA', 'DZywLrtbPlU', 'xNn_kek59j4', 'B-mtiykfHao', 'LaADC6I4Ofw', 'k57uK6aNNfg', 'tPzZ5JCfjs0', 'ibULOoGaA', 'Viytwxg0QRc', 'b9PXOXQzs-4'];

function initializePlayer() {
  // Create and configure your player here
  var playerDiv = document.getElementById('player');
  var iframe = document.createElement('iframe');
  iframe.width = '470';
  iframe.height = '260';
  iframe.src = 'https://www.youtube.com/embed/'+videoIndex[id-1];
  iframe.frameBorder = '0';
  iframe.allowFullscreen = true;
  playerDiv.appendChild(iframe);
}

// Get references to the HTML elements
const mediaImage = document.querySelector('#mediaImage');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

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

