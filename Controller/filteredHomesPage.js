(function () {

    // handlebars 
    let homeTemplate = document.getElementById("home-template").innerHTML;
    let template = Handlebars.compile(homeTemplate);

    //elements
    let filteredHomesSection = document.getElementById("homePage-filtered-homes-section");
    let filteredHomesDiv = document.getElementById("homePage-filtered-homes-div");
    let filter = document.getElementById("homePage-filter-form");
    let filterInputTown = document.getElementById("filter-input-location");
    let filterInputCapacity = document.getElementById("filter-input-guests");
    let title = document.getElementById("title-filtered-homes");
    let entireHomesLink = document.getElementById("liveAnywhere-div-entireHomes");
    let cabinsLink = document.getElementById("liveAnywhere-div-cabinsAndCottages");
    let uniqueLink = document.getElementById("liveAnywhere-div-uniqueStays");
    let petsAllowedLink = document.getElementById("liveAnywhere-div-petsWelcome");

    let buttonAscendingPrice = {
        "element": document.getElementById("button-ascending-price-homes"),
        "click": false,
    };
    let buttonDescendingPrice = {
        "element": document.getElementById("button-descending-price-homes"),
        "click": false,
    };
    let buttonCapacity = {
        "element": document.getElementById("button-capacity-homes"),
        "click": false,
    };
    let buttonBooked = {
        "element": document.getElementById("button-booked-homes"),
        "click": false,
    };

    let buttonPetsAllowed = {
        "element": document.getElementById("button-petsAllowed-homes"),
        "click": false,
        "type": "pets",
    };
    let buttonApartments = {
        "element": document.getElementById("button-apartments-homes"),
        "click": false,
        "type": "apartment",
    };
    let buttonCabinsAndCottages = {
        "element": document.getElementById("button-cabinsAndCottages-homes"),
        "click": false,
        "type": "cottage/cabin",
    };
    let buttonUniqueHomes = {
        "element": document.getElementById("butoon-unique-homes"),
        "click": false,
        "type": "unique",
    };

    //elements in detailed home
    let titleOfDetailedHome = document.getElementById("title-detailed-home");
    let peopleReservedThisHome = document.getElementById("people-reserved-this-home");
    let reserveButton = document.getElementById("reserve-home");
    let likeHome = document.getElementById("like-home");
    let descriptionOfHome = document.getElementById("description-detailed-home");
    let detailedHomeImage = document.getElementById("detailed-home-image");
    let parkingAmenities = {
        "grey": document.getElementById("parkingGreyColorOfAmenities"),
        "white": document.getElementById("parkingWhiteColorOfAmenities"),
    }
    let swimmingPoolAmenities = {
        "grey": document.getElementById("swimmingGreyColorOfAmenities"),
        "white": document.getElementById("swimmingWhiteColorOfAmenities"),
    }
    let smokingAmenities = {
        "grey": document.getElementById("smokingGreyColorOfAmenities"),
        "white": document.getElementById("smokingWhiteColorOfAmenities"),
    }
    let bathAmenities = {
        "grey": document.getElementById("bathGreyColorOfAmenities"),
        "white": document.getElementById("bathWhiteColorOfAmenities"),
    }
    let airConditioningAmenities = {
        "grey": document.getElementById("airGreyColorOfAmenities"),
        "white": document.getElementById("airWhiteColorOfAmenities"),
    }
    let wifiAmenities = {
        "grey": document.getElementById("wifiGreyColorOfAmenities"),
        "white": document.getElementById("wifiWhiteColorOfAmenities"),
    }
    let tvAmenities = {
        "grey": document.getElementById("tvGreyColorOfAmenities"),
        "white": document.getElementById("tvWhiteColorOfAmenities"),
    }
    let coffeeMachineAmenities = {
        "grey": document.getElementById("coffeeGreyColorOfAmenities"),
        "white": document.getElementById("coffeeWhiteColorOfAmenities"),
    }
    let accessibilityAmenities = {
        "grey": document.getElementById("accessibilityGreyColorOfAmenities"),
        "white": document.getElementById("accessibilityWhiteColorOfAmenities"),
    }
    let basicAmenities = {
        "grey": document.getElementById("basicGreyColorOfAmenities"),
        "white": document.getElementById("basicWhiteColorOfAmenities"),
    }

    //arrays 
    let filteredHomes;
    let additionallyFilteredHomes;
    let arrayWithButtonsForFilter = [buttonApartments, buttonCabinsAndCottages, buttonUniqueHomes];
    let arrayWithButtonsForSort = [buttonAscendingPrice, buttonDescendingPrice, buttonCapacity, buttonBooked];

    //test objects
    homes.forEach(home => homeManager.addHome(home));

    //eventlisteners and functions

    filter.addEventListener("submit", (event) => {
        event.preventDefault();
        let filterTown = filterInputTown.value;
        let filterCapacity = filterInputCapacity.value;
        title.innerText = `Choose from the best locations in ${filterTown}!`;
        filteredHomes = { homes: homeManager.filter(filterTown, filterCapacity) };
        additionallyFilteredHomes = { homes: homeManager.filter(filterTown, filterCapacity) };
        showHomes(additionallyFilteredHomes);

        filter.reset();
    });

    //eventListeners for filters
    buttonAscendingPrice.element.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByAscendingPrice(additionallyFilteredHomes.homes);
        changeWeightOfTheText(buttonAscendingPrice);
        showHomes(additionallyFilteredHomes);
    });

    buttonDescendingPrice.element.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByDescendingPrice(additionallyFilteredHomes.homes);
        changeWeightOfTheText(buttonDescendingPrice);
        showHomes(additionallyFilteredHomes);
    });

    buttonCapacity.element.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByCapacity(additionallyFilteredHomes.homes);
        changeWeightOfTheText(buttonCapacity);
        showHomes(additionallyFilteredHomes);
    });

    buttonBooked.element.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByTimesBooked(additionallyFilteredHomes.homes);
        changeWeightOfTheText(buttonBooked);
        showHomes(additionallyFilteredHomes);
    });

    buttonPetsAllowed.element.addEventListener("click", () => {
        changeWeightOfTheText(buttonPetsAllowed);
        createCustomArrayfromHomesWithPets();
    });

    buttonApartments.element.addEventListener("click", () => {
        changeWeightOfTheText(buttonApartments);
        createCustomArrayfromHomes();
    });

    buttonCabinsAndCottages.element.addEventListener("click", () => {
        changeWeightOfTheText(buttonCabinsAndCottages);
        createCustomArrayfromHomes();
    });

    buttonUniqueHomes.element.addEventListener("click", () => {
        changeWeightOfTheText(buttonUniqueHomes);
        createCustomArrayfromHomes();
    });

    // eventListeners for links in Home Page
    entireHomesLink.addEventListener("click", () => {
        filteredHomes = { homes: homeManager.homes };
        additionallyFilteredHomes = { homes: homeManager.homes };
        showHomes(additionallyFilteredHomes);
        title.innerText = "Explore Entire Homes";
    });
    cabinsLink.addEventListener("click", () => {
        filteredHomes = { homes: filterByType(homeManager.homes, "cottage/cabin") };
        additionallyFilteredHomes = { homes: filterByType(homeManager.homes, "cottage/cabin") };
        showHomes(additionallyFilteredHomes);
        title.innerText = "Explore Cabins And Cottages";
        buttonApartments.element.style.display = "none";
        buttonCabinsAndCottages.element.style.display = "none";
        buttonUniqueHomes.element.style.display = "none";
    });
    uniqueLink.addEventListener("click", () => {
        filteredHomes = { homes: filterByType(homeManager.homes, "unique") };
        additionallyFilteredHomes = { homes: filterByType(homeManager.homes, "unique") };
        showHomes(additionallyFilteredHomes);
        title.innerText = "Explore Unique Places";
        buttonApartments.element.style.display = "none";
        buttonCabinsAndCottages.element.style.display = "none";
        buttonUniqueHomes.element.style.display = "none";
    });
    petsAllowedLink.addEventListener("click", () => {
        filteredHomes = { homes: homeManager.homes.filter(home => home.pets === true) };
        additionallyFilteredHomes = { homes: homeManager.homes.filter(home => home.pets === true) };
        showHomes(additionallyFilteredHomes);
    });


    function createCustomArrayfromHomesWithPets() {
        if (buttonPetsAllowed.click === true) {
            additionallyFilteredHomes.homes = additionallyFilteredHomes.homes.filter(home => home.pets === true);
            showHomes(additionallyFilteredHomes);
        } else {
            createCustomArrayfromHomes();
        }
    }

    function createCustomArrayfromHomes() {
        additionallyFilteredHomes.homes = [];
        let counterClick = 0;
        arrayWithButtonsForFilter.forEach(button => {
            if (button.click === true) {
                counterClick++;
                let array = filterByType(filteredHomes.homes, button.type);
                additionallyFilteredHomes.homes.push(...array);
            }
        });
        if (counterClick === 0) {
            additionallyFilteredHomes.homes.push(...filteredHomes.homes);
        }
        showHomes(additionallyFilteredHomes);
    }

    function showHomes(object) {
        filteredHomesDiv.innerHTML = "";
        let html = template(object);
        filteredHomesDiv.innerHTML = html;
        eventListenersForHomes();
    }

    function orderByAscendingPrice(array) {
        let ascendingPrice = array.sort((a, b) => a.price - b.price);
        return ascendingPrice;
    }

    function orderByDescendingPrice(array) {
        let descendingPrice = array.sort((a, b) => b.price - a.price);
        return descendingPrice;
    }

    function filterByType(array, type) {
        let filteredHomesByType = array.filter(home => home.type === type);
        return filteredHomesByType;
    }

    function orderByTimesBooked(array) {
        let orderedByTimesBooked = array.sort((a, b) => b.booked - a.booked);
        return orderedByTimesBooked;
    }

    function orderByCapacity(array) {
        let orderedByCapacity = array.sort((a, b) => a.capacity - b.capacity);
        return orderedByCapacity;
    }
    function changeWeightOfTheText(object) {
        object.click === true ? object.click = false : object.click = true;
        arrayWithButtonsForSort.forEach(button => {
            if (button === object) {
                return;
            } else {
                button.click = false;
                button.element.style.fontWeight = "normal";
            }
        });
        object.click ? object.element.style.fontWeight = "bold" : object.element.style.fontWeight = "normal";
    }
    function eventListenersForHomes() {
        additionallyFilteredHomes.homes.forEach(home => {
            let stringId = String(home.id);
            let element = document.getElementById(stringId);
            element.addEventListener("click", () => {
                location.hash = stringId + "-home";
                showDetailedHome();
            });
        });
    }
    //EventListeners for Detailed Home
    window.addEventListener("hashchange", showDetailedHome);

    //functions for Detailed Home
    function showDetailedHome() {
        let homeId = parseInt(location.hash.slice(1));
        let indexOfHome = homeManager.homes.findIndex(home => home.id === homeId);
        let homeObject = homeManager.homes[indexOfHome];

        titleOfDetailedHome.innerText = homeObject.name;
        peopleReservedThisHome.innerText = homeObject.booked + " people booked this home";
        descriptionOfHome.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        detailedHomeImage.src = homeObject.image;
        changeColorOfAmenities(homeObject);
    }

    function changeColorOfAmenities(home) {
        for (let property in home.equipment) {
            console.log(property);
            switch (property) {
                case "parking":
                    (home.equipment[property]) ? parkingAmenities.grey.style.display = 'none': parkingAmenities.white.style.display = 'none';
                    break;
                case "swimmingPool":
                    (home.equipment[property]) ? swimmingPoolAmenities.grey.style.display = "none" : swimmingPoolAmenities.white.style.display = "none";
                    break;
                case "smoking":
                    (home.equipment[property]) ? smokingAmenities.grey.style.display = 'none' : smokingAmenities.white.style.display = 'none';
                    break;
                case "bath":
                    (home.equipment[property]) ? bathAmenities.grey.style.display = 'none' : bathAmenities.white.style.display = 'none';
                    break;
                case "airConditioning":
                    (home.equipment[property]) ? airConditioningAmenities.grey.style.display = 'none' : airConditioningAmenities.white.style.display = 'none';
                    break;
                case "wifi":
                    (home.equipment[property]) ? wifiAmenities.grey.style.display = 'none' : wifiAmenities.white.style.display = 'none';
                    break;
                case "tv":
                    (home.equipment[property]) ? tvAmenities.grey.style.display = 'none' : tvAmenities.white.style.display = 'none';
                    break;
                case "coffeeMachine":
                    (home.equipment[property]) ? coffeeMachineAmenities.grey.style.display = 'none' : coffeeMachineAmenities.white.style.display = 'none';
                    break;
                case "accessibility":
                    (home.equipment[property]) ? accessibilityAmenities.grey.style.display = 'none' : accessibilityAmenities.white.style.display = 'none';
                    break;
                case "basicAmenities":
                    (home.equipment[property]) ? basicAmenities.grey.style.display = 'none' : basicAmenities.white.style.display = 'none';
                    break;
            }
        }
    }

})();




