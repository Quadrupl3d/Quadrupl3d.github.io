$(document).ready(function() {
    var text = "Hub to develop divine omnipotence in Offensive Security.";
    var delay = 100; // Delay between each character (in milliseconds)
    animateText("h1", text, delay);
  });
  
  function animateText(element, text, delay) {
    var i = 0;
    var interval = setInterval(function() {
      $(element).text(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
      }
    }, delay);
  }
  
  // Access the video element
  var videoPlayer = document.getElementById('video-player');

  // Add event listeners or additional functionality as needed
    videoPlayer.addEventListener('play', function() {
    console.log('Video started playing');
    // Add any custom actions you want when the video starts playing
  });

  videoPlayer.addEventListener('ended', function() {
    console.log('Video playback ended');
    // Add any custom actions you want when the video ends
  });

  // You can add more event listeners or customize the player further as per your requirements
 
























  

  

  











    


    

    



  