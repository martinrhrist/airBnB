"use strict";
//Initial object manager
let myManager = new OnlineExperiencesManager();
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
let homePage = getById("PlacesToStay");
let expPage = getById("Experiences");
let onlineExpPage = getById("Online-Experiences");
let homePageMenu = getById("homePage-filter-menu");
let experiencesPageMenu = getById("experiencesPage-filter-menu");
let filtered = getById("filter");
let homePageTowns = getById("homePage-towns");
let homePageLiveAnywhere = getById("homePage-liveAnywhere");
let homePageOnlineExperiences = getById("homePage-onlineExperiences");
let homePageJoinHosts = getById("homePage-joinHosts");
let OnlineExpLogo = getById("online-exp-logo");
let locationExperiences = getById("location");
let myPageTitle = getById("page-title");
let objectsSection = getById("onlineExperience-experiences-section-container");
//SPA Router
function Router() {
  let url = location.hash.slice(1);

  switch (url) {
    case "PlacesToStay": {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      homePageMenu.style.display = "flex";
      homePageJoinHosts.style.display = "block";
      homePageTowns.style.display = "flex";
      homePageOnlineExperiences.style.display = "block";
      experiencesPageMenu.style.display = "none";
      filtered.style.display = "flex";
      myPageTitle.innerText =
        "Vacation Rentals, Homes, Experiences & Places - Airbnb";
      break;
    }
    case "Experiences": {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      homePageJoinHosts.style.display = "block";
      homePageMenu.style.innerHTML = "";
      experiencesPageMenu.style.display = "flex";
      filtered.style.display = "none";

      break;
    }
    case "Online-Experiences": {
      homePage.style.display = "none";
      expPage.style.display = "none";
      onlineExpPage.style.display = "block";
      homePageTowns.style.display = "none";
      homePageLiveAnywhere.style.display = "none";
      homePageOnlineExperiences.style.display = "none";
      homePageJoinHosts.style.display = "none";
      myPageTitle.innerText = "Online Experiences";
      break;
    }
    default: {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      experiencesPageMenu.style.display = "none";
      homePageJoinHosts.style.display = "block";
      homePageTowns.style.display = "flex";
      homePageOnlineExperiences.style.display = "block";
      filtered.style.display = "flex";
      break;
    }
  }
}

window.addEventListener("hashchange", Router);
window.addEventListener("DOMContentLoaded", Router);
function showOnlineExperiences(Experiences, container) {
  for (let i = 0; i < Experiences.length; i++) {
    let current = Experiences[i];
    let experienceCard = createEl("div");
    experienceCard.style.marginRight = "1vw";
    experienceCard.style.marginBottom = "1vw";
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
}
showOnlineExperiences(myManager.onlineExperiences, objectsSection);
