var sliderControlDots = document.querySelector('.promo-slider-control');
var controlDots = sliderControlDots.querySelectorAll('.slider-control-btn');
var sliderWrapper = document.querySelector('.promo-slider');
var promoSlides = sliderWrapper.querySelectorAll('.promo-slider-item');

var deleteCurrentDot = function() {
  for (var i = 0; i < controlDots.length; i++) {
    var dot = controlDots[i];
    if (dot.classList.contains('current')) {
      dot.classList.remove('current');
    }
  };
};

var deleteCurrentSlide = function() {
  for (var i = 0; i < promoSlides.length; i++) {
    var slide = promoSlides[i];
    if (slide.classList.contains('promo-slider-item-current')) {
      slide.classList.remove('promo-slider-item-current');
    }
  }
};

var listener = function(i) {
  var dot = controlDots[i];
  var slide = promoSlides[i];
  dot.addEventListener("click", function() {
    deleteCurrentDot();
    deleteCurrentSlide();
    dot.classList.add('current');
    slide.classList.add('promo-slider-item-current');
  });
};

var putListener = function() {
  for (var i = 0; i < controlDots.length; i++) {
    listener(i);
  };
};


putListener();
