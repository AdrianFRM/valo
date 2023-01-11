let clickCount  = 0 ;
function showImage(button) {
  clickCount++;

  if (clickCount % 2 === 0) {
    const buttonId = button.id;
    const charContainer = document.getElementById(buttonId.replace('-button', '-char'));
    charContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

    const buttons = document.querySelectorAll('.text button');
    buttons.forEach(btn => {
      btn.classList.remove("selected");
    });
  
    button.classList.add("selected");
  
  
    const images = document.querySelectorAll('.image');
    images.forEach(img => {
      img.style.visibility = "hidden";
    });
  
    const imgId = button.id.replace('-button', '-img');
    const img = document.getElementById(imgId);
    img.style.visibility = "visible";
  }
  


  function change_video_raze(videoId) {
    // Get all of the buttons and video divs
    var buttons = document.querySelectorAll(".raze-char button");
    var videoDivs = document.querySelectorAll(".raze-char div[id]");
    
    // Loop through all of the buttons
    for (var i = 0; i < buttons.length; i++) {
      // If the current button is the one that was clicked, add the "chosen" class
      if (buttons[i].id == "button-" + videoId) {
        buttons[i].classList.add("chosen");
      } else {
        // Otherwise, remove the "chosen" class
        buttons[i].classList.remove("chosen");
      }
    }
    
    // Loop through all of the video divs
    for (var i = 0; i < videoDivs.length; i++) {
      // If the current div is the one corresponding to the video that was clicked, show it
      if (videoDivs[i].id == videoId) {
        videoDivs[i].style.display = "block";
        // Restart the video
        videoDivs[i].querySelector("video").currentTime = 0;
      } else {
        // Otherwise, hide it
        videoDivs[i].style.display = "none";
      }
    }
  }
  function change_video_fade(videoId) {
    // Get all of the buttons and video divs
    var buttons = document.querySelectorAll(".fade-char button");
    var videoDivs = document.querySelectorAll(".fade-char div[id]");
    
    // Loop through all of the buttons
    for (var i = 0; i < buttons.length; i++) {
      // If the current button is the one that was clicked, add the "chosen" class
      if (buttons[i].id == "button-" + videoId) {
        buttons[i].classList.add("chosen");
      } else {
        // Otherwise, remove the "chosen" class
        buttons[i].classList.remove("chosen");
      }
    }
    
    // Loop through all of the video divs
    for (var i = 0; i < videoDivs.length; i++) {
      // If the current div is the one corresponding to the video that was clicked, show it
      if (videoDivs[i].id == videoId) {
        videoDivs[i].style.display = "block";
        // Restart the video
        videoDivs[i].querySelector("video").currentTime = 0;
      } else {
        // Otherwise, hide it
        videoDivs[i].style.display = "none";
      }
    }
  }
  function change_video_omen(videoId) {
    // Get all of the buttons and video divs
    var buttons = document.querySelectorAll(".omen-char button");
    var videoDivs = document.querySelectorAll(".omen-char div[id]");
    
    // Loop through all of the buttons
    for (var i = 0; i < buttons.length; i++) {
      // If the current button is the one that was clicked, add the "chosen" class
      if (buttons[i].id == "button-" + videoId) {
        buttons[i].classList.add("chosen");
      } else {
        // Otherwise, remove the "chosen" class
        buttons[i].classList.remove("chosen");
      }
    }
    
    // Loop through all of the video divs
    for (var i = 0; i < videoDivs.length; i++) {
      // If the current div is the one corresponding to the video that was clicked, show it
      if (videoDivs[i].id == videoId) {
        videoDivs[i].style.display = "block";
        // Restart the video
        videoDivs[i].querySelector("video").currentTime = 0;
      } else {
        // Otherwise, hide it
        videoDivs[i].style.display = "none";
      }
    }
  }
  function change_video_chamber(videoId) {
    // Get all of the buttons and video divs
    var buttons = document.querySelectorAll(".chamber-char button");
    var videoDivs = document.querySelectorAll(".chamber-char div[id]");
    
    // Loop through all of the buttons
    for (var i = 0; i < buttons.length; i++) {
      // If the current button is the one that was clicked, add the "chosen" class
      if (buttons[i].id == "button-" + videoId) {
        buttons[i].classList.add("chosen");
      } else {
        // Otherwise, remove the "chosen" class
        buttons[i].classList.remove("chosen");
      }
    }
    
    // Loop through all of the video divs
    for (var i = 0; i < videoDivs.length; i++) {
      // If the current div is the one corresponding to the video that was clicked, show it
      if (videoDivs[i].id == videoId) {
        videoDivs[i].style.display = "block";
        // Restart the video
        videoDivs[i].querySelector("video").currentTime = 0;
      } else {
        // Otherwise, hide it
        videoDivs[i].style.display = "none";
      }
    }
  }
  

var modal = document.getElementById("pop-up");
var btn = document.getElementById("pop-up-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}