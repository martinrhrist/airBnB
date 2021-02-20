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
      homePage.style.display = "flex";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      myPageTitle.innerText = "Vacation Rentals, Homes, Experiences & Places - Airbnb";
      break;
    }
    case "Experiences": {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      break;
    }
    case "Online-Experiences": {
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
      break;
    }
    default: {
      homePage.style.display = "block";
      expPage.style.display = "none";
      onlineExpPage.style.display = "none";
      break;
    }
  }
}

window.addEventListener("hashchange", Router);
window.addEventListener("DOMContentLoaded", Router);
function showOnlineExperiences(Experiences, container, start, showObjects) {
  container.innerHTML = "";
  for (let i = start; i < showObjects; i++) {
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
