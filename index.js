"use strict";
//filling all elements into the manager
myObjects.forEach(function (object) {
  let onlineExperience = new OnlineExperiences(
    object.picture,
    object.rating,
    object.title,
    object.visitedTimes,
    object.location,
    object.price,
    object.category,
    object.id
  );
  myManager.addExperience(onlineExperience);
});
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

let homePage = getById("PlacesToStay");
let expPage = getById("Experiences");
let onlineExpPage = getById("Online-Experiences");
let OnlineExpLogo = getById("online-exp-logo");
let locationExperiences = getById("location");
let myPageTitle = getById("page-title");
let objectsSection = getById("onlineExperience-experiences-section-container");
let BtnLoadMore = getById("btn-loadMore");
let filterSectionCategories = getById("filter-section-categories");
let btnEntertainment = getById("btn-category-entertainment");
let btnMagic = getById("btn-category-magic");
let hasLoaded = false;
let startValue = 0;
let endValue = 12;

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
  homePage.style.display = "none";
  expPage.style.display = "none";
  detailedHomeElement.style.display = "none";
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
  if(url) {
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


function showOnlineExperiences(Experiences, container, start, showObjects) {
  container.innerHTML = "";
  for (let i = start; i < showObjects; i++) {
    let current = Experiences[i];
    let experienceCard = createEl("div");
    experienceCard.style.marginRight = "1vw";
    experienceCard.style.marginBottom = "1vw";
    experienceCard.style.cursor = "pointer";
    experienceCard.class = "experience-card";
    let img = createEl("img");
    img.style.width = "14vw";
    img.style.height = "18.5vw";
    img.style.borderRadius = "1vw";
    img.alt = "snimka";
    img.src = current.picture;
    let expTitle = createEl("p", current.title);
    expTitle.style.width = "12vw";
    let firstRowDiv = createEl("div");
    firstRowDiv.style.display = "flex";
    firstRowDiv.style.fontSize = "0.9vw";
    firstRowDiv.style.marginBottom = "0.5vw";
    let starIcon = createEl("i");
    starIcon.className = "far fa-star";
    starIcon.style.color = "red";
    let expRating = createEl("p", current.rating);
    expRating.style.marginRight = "0.3vw";
    let expVisited = createEl("p", "(" + current.visitedTimes + ") . ");
    expVisited.style.opacity = "0.6";
    let expLocation = createEl("p", current.location);
    expLocation.style.opacity = "0.6";
    expLocation.style.marginLeft = "0.3vw";

    let expPrice = createEl("p", "From " + current.price + "лв./ person");
    expPrice.style.fontWeight = "bold";
    container.append(experienceCard);
    experienceCard.append(img);
    experienceCard.append(firstRowDiv);
    firstRowDiv.append(starIcon);
    firstRowDiv.append(expRating);
    firstRowDiv.append(expVisited);
    firstRowDiv.append(expLocation);
    experienceCard.append(expTitle);
    experienceCard.append(expPrice);
  }
  endValue += 6;
  if (endValue > Experiences.length) {
    BtnLoadMore.style.display = "none";
  }
}

BtnLoadMore.addEventListener("click", () => {
  showOnlineExperiences(
    myManager.onlineExperiences,
    objectsSection,
    startValue,
    endValue
  );
});
function addFilterButtons(filterSectionCategs) {
  for (let i = 0; i < filterSectionCategs.length; i++) {
    let current = filterSectionCategs[i];
    current.addEventListener("click", () => {
      myManager.filterBy("category", current.innerText);
      showOnlineExperiences(
        myManager.filtered,
        objectsSection,
        startValue,
        myManager.filtered.length
      );
    });
  }
}
addFilterButtons(filterSectionCategories.children);

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