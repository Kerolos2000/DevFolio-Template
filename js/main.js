// validation for form
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          console.log("notvalidation");
          event.preventDefault();
          event.stopPropagation();
        } else {
          console.log("Done validation");
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// btn toUP
let toUp = document.querySelector(".toUp");
let nav = document.querySelector("#navbar");
let navi = document.querySelector("#navbar .active");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    nav.style.background = "#FFF";
    nav.classList.add("scroller");
  } else {
    nav.style.background = "transparent";
    nav.classList.remove("scroller");
  }
  if (window.scrollY > 300) {
    toUp.style.opacity = "1";
    toUp.removeAttribute("disabled");
  } else {
    toUp.style.opacity = "0";
    toUp.setAttribute("disabled", true);
  }
  sessionStorage.setItem("scrollY", window.scrollY);
});
toUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
window.onload = function () {
  if (window.scrollY > 100) {
    nav.style.background = "#FFF";
    nav.classList.add("scroller");
  } else {
    nav.style.background = "transparent";
    nav.classList.remove("scroller");
  }
  if (window.scrollY > 300) {
    toUp.style.opacity = "1";
    toUp.removeAttribute("disabled");
  } else {
    toUp.style.opacity = "0";
    toUp.setAttribute("disabled", true);
  }
  window.scrollTo(0, sessionStorage.getItem("scrollY"));


  let body = document.body
  let Allloader = document.querySelector(".Allloader")
  body.style.maxHeight = "auto";
  body.style.overflow = "auto";
  Allloader.style.display = "none";

};

let Allloader = document.querySelector(".Allloader")

