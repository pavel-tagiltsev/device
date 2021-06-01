var contactPopupLink = document.querySelector(".open-popup-link");
var contactPopup = document.querySelector(".modal-write-us");
var closeContactPopup = contactPopup.querySelector(".close-modal");
var contactForm = contactPopup.querySelector(".contact-form");
var contactName = contactPopup.querySelector("#contact-form-name");
var contactEmail = contactPopup.querySelector("#contact-form-email");
var contactText = contactPopup.querySelector("#contact-form-text");

var isStorageSupport = true;
var storageName = "";
var starageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

contactPopupLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (storageName || storageEmail) {
    contactName.value = storageName;
    contactEmail.value = storageEmail;
    contactText.focus();
  } else {
    contactName.focus();
  }
});

closeContactPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
  if (!contactName.value || !contactEmail.value || !contactText.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", contactName.value);
      localStorage.setItem("email", contactEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});
