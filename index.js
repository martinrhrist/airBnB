"use strict";
//Util Functions
function getById(id) {
  return document.getElementById(id);
}
function createEl(el, text) {
  let newEl = document.createElement(el);
  if (text) {
    newEl.innerText = text;
  }
  return newEl;
}
//Initial DOM elements selectors
let homePage = getById("PlacesToStay");
let expPage = getById("Experiences");
let onlineExpPage = getById("Online-Experiences");
let homePageMenu = getById("homePage-filter-menu");
let experiencesPageMenu = getById("experiencesPage-filter-menu");
let filtered = getById("filter");
//SPA Router
function Router() {
  let url = location.hash.slice(1);
  switch (url) {
    case "PlacesToStay": {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      homePageMenu.style.display = "flex";
      experiencesPageMenu.style.display = "none";
      filtered.style.display = "flex";
      break;
    }
    case "Experiences": {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      homePageMenu.style.innerHTML = "";
      experiencesPageMenu.style.display = "flex";
      filtered.style.display = "none";
      break;
    }
    case "Online-Experiences": {
      homePage.style.display = "none";
      expPage.style.display = "none";
      onlineExpPage.style.display = "block";
      break;
    }
    default: {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      experiencesPageMenu.style.display = "none";
      break;
    }
  }
}
window.addEventListener("hashchange", Router);
window.addEventListener("DOMContentLoaded", Router);