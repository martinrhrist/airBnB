"use strict";
(function () {
  //SPA Router
  // Initial DOM elements selectors
  let homePage = getById("PlacesToStay");
  let expPage = getById("Experiences");
  let onlineExpPage = getById("Online-Experiences");
  let myPageTitle = getById("page-title");
  let objectsSection = getById("onlineExperience-experiences-section-container");
  let filter = document.getElementById("homePage-filter-form");
  let header = document.getElementById("homePage-header");
  let filterDiv = document.getElementById("homePage-filter");
  let headerText = document.getElementById("homePage-header-text");
  let headerButton = document.getElementById("homePage-header-button");
  let towns = document.getElementById("homePage-towns");
  let liveAnywhere = document.getElementById("homePage-liveAnywhere");
  let onlineExperiencesHomePage = document.getElementById("homePage-onlineExperiences");
  let joinHosts = document.getElementById("homePage-joinHosts");
  let filteredHomes = document.getElementById("homePage-filtered-homes-section");
  let detailedHomeElement = document.getElementById("detailed-home");
  let hasLoaded = false;
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
      case "homePage-filtered-homes-section": {
        changeHomePage();
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
    header.style.height = "45vw";
    filterDiv.style.display = "flex";
    headerText.style.display = "flex";
    headerButton.style.display = "flex";
    towns.style.display = "flex";
    liveAnywhere.style.display = "flex";
    onlineExperiencesHomePage.style.display = "flex";
    joinHosts.style.display = "block";
    filteredHomes.style.display = "none";
    detailedHomeElement.style.display = "none";
  }
  function experiences() {
    homePage.style.display = "block";
    expPage.style.display = "none";
    onlineExpPage.style.display = "none";
    detailedHomeElement.style.display = "none";
  }
  function onlineExperiences() {
    detailedHomeElement.style.display = "none";
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
    let url = location.hash.slice(1);
    parseInt(url, 10);
    if (url) {
      detailedHome();
    } else {
      placesToStay();
    }
  }
  window.addEventListener("hashchange", Router);
  window.addEventListener("DOMContentLoaded", () => {
    location.hash = "PlacesToStay";
    Router();
  });

  function changeHomePage() {
    expPage.style.display = "none";
    onlineExpPage.style.display = "none";
    header.style.height = "7vw";
    filterDiv.style.display = "none";
    headerText.style.display = "none";
    headerButton.style.display = "none";
    towns.style.display = "none";
    liveAnywhere.style.display = "none";
    onlineExperiencesHomePage.style.display = "none";
    joinHosts.style.display = "none";
    filteredHomes.style.display = "flex";
    detailedHomeElement.style.display = "none";
  }

  function detailedHome() {
    expPage.style.display = "none";
    onlineExpPage.style.display = "none";
    header.style.height = "7vw";
    filterDiv.style.display = "none";
    headerText.style.display = "none";
    headerButton.style.display = "none";
    towns.style.display = "none";
    liveAnywhere.style.display = "none";
    onlineExperiencesHomePage.style.display = "none";
    joinHosts.style.display = "none";
    filteredHomes.style.display = "none";
    detailedHomeElement.style.display = "flex";
  }
})();
