var mapPopupButton = document.querySelector(".map-popup-btn");
var mapPopup = document.querySelector(".modal-map");
var closeMapPopup = mapPopup.querySelector(".close-modal");

mapPopupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

closeMapPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
