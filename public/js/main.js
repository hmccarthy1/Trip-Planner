var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var logoutBtn = $('#logoutLink');

logoutBtn.click(function(event)  {
  fetch('/api/logout', {
    method: 'POST',
    body: "", 
    headers: { 'Content-Type': 'application/json' },
  })
})