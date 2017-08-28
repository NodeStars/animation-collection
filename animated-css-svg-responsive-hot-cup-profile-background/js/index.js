/*just for toggling animation on hover*/
var toggle = 0;
var button = document.querySelector(".toggle-button");
var icon = document.querySelector(".ac-animated-svg-icon");
button.addEventListener("click", function() {
  if (toggle == 0) { toggle = 1; } else { toggle = 0; }
  if (toggle == 1) {
    button.className = "toggle-button toggle-on";
    icon.className = "ac-animated-svg-icon";
  } else {
    button.className = "toggle-button";
    icon.className = "ac-animated-svg-icon ac-svg-animated";
  }
});