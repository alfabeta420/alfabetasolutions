function changevolume(amount) {
    var audioobject = document.getElementsByTagName("audio")[0];
    audioobject.volume = amount;
  }

var myAudio = document.getElementById("player");
myAudio.volume = 0.5;
var isPlaying = false;

function togglePlay() {
  if(isPlaying) {
    document.getElementById("toggle").setAttribute("class", "fa-solid fa-play play");
    myAudio.pause()
  }  else {
    document.getElementById("toggle").setAttribute("class", "fa-solid fa-pause play");
    myAudio.play()
  }
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
