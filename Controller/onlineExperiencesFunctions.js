//filling all elements into the manager
(function () {
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

  // Initial DOM elements selectors
  let objectsSection = getById(
    "onlineExperience-experiences-section-container"
  );
  let BtnLoadMore = getById("btn-loadMore");
  let filterSectionCategories = getById("filter-section-categories");
  let startValue = 0;
  let endValue = 12;

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
  showOnlineExperiences(
    myManager.onlineExperiences,
    objectsSection,
    startValue,
    endValue
  );

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
})();
