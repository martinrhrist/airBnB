"use strict";
//SPA Router
function Router() {
  let url = location.hash.slice(1);

  switch (url) {
    case "PlacesToStay": {
      placesToStay();
      break;
    }
    case "Experiences": {
      experiences();
      break;
    }
    case "Online-Experiences": {
      onlineExperiences();
      break;
    }
    default: {
      defaultCase();
      break;
    }
  }
}
function placesToStay() {
  homePage.style.display = "flex";
  expPage.style.display = "none";
  onlineExpPage.style.display = "none";
  myPageTitle.innerText =
    "Vacation Rentals, Homes, Experiences & Places - Airbnb";
}
function experiences() {
  homePage.style.display = "block";
  expPage.style.display = "none";
  onlineExpPage.style.display = "none";
}
function onlineExperiences() {
  homePage.style.display = "none";
  expPage.style.display = "none";
  onlineExpPage.style.display = "block";
  myPageTitle.innerText = "Online Experiences";
  if (!hasLoaded) {
    showOnlineExperiences(
      myManager.onlineExperiences,
      objectsSection,
      startValue,
      endValue
    );
    hasLoaded = true;
  }
}
function defaultCase() {
  homePage.style.display = "block";
  expPage.style.display = "none";
  onlineExpPage.style.display = "none";
}
window.addEventListener("hashchange", Router);
window.addEventListener("DOMContentLoaded", Router);
