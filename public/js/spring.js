
let player;
function onYouTubeIframeAPIReady() {
    // Call your player initialization function here
    initializePlayer();

    // Set the cookie after the player is initialized
    document.cookie = "cookie_name=cookie_value; SameSite=None; Secure";
  }

  function initializePlayer() {
    // Create and configure your player here
    var playerDiv = document.getElementById('player');
    var iframe = document.createElement('iframe');
    iframe.width = '400';
    iframe.height = '260';
    iframe.src = 'https://www.youtube.com/embed/572Wde50ivs';
    iframe.frameBorder = '0';
    iframe.allowFullscreen = true;
    playerDiv.appendChild(iframe);
  }


  const addButton = $('#addReview');

  

addButton.click(async function(event) {

  var reviewID;
  const fileUpload = document.getElementById('fileUpload')
const userSpringRating = $('#Rating').val();
const reviewText = $('#Comments').val();
const springID = $('#springID').text()
var fileArray = fileUpload.files;
console.log('springID', springID)

  console.log(fileUpload.files);
  var newReview =  await fetch('/review', {
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
  reader.onloadend = function () {
    console.log(reader.result);
    mediaURL = reader.result;
    fetch('/api/reviewMedia', {
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

for (var i =0; i < fileArray.length; i++ )
getBase64(fileArray[i])

})
