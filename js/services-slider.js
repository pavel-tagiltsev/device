var sliderControl = document.querySelector('.services-slider-control');
var controlButtons = sliderControl.querySelectorAll('.button');
var sliderContainer = document.querySelector('.services-slider');
var slides = sliderContainer.querySelectorAll('.services-slider-item');

var removeCurrentButton = function() {
  for (var i = 0; i < controlButtons.length; i++) {
    var button = controlButtons[i];
    if (button.classList.contains('current')) {
      button.classList.remove('current');
    }
  };
};

var removeCurrentSlide = function() {
  for (var i = 0; i < slides.length; i++) {
    var slide = slides[i];
    if (slide.classList.contains('services-slider-current')) {
      slide.classList.remove('services-slider-current');
    }
  }
};

var createListener = function(i) {
  var button = controlButtons[i];
  var slide = slides[i];
  button.addEventListener("click", function() {
    removeCurrentButton();
    removeCurrentSlide();
    button.classList.add('current');
    slide.classList.add('services-slider-current');
  });
};

var addListener = function() {
  for (var i = 0; i < controlButtons.length; i++) {
    createListener(i);
  };
};


addListener();
