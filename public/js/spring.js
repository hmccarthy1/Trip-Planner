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