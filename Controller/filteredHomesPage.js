(function () {

    // handlebars 
    let homeTemplate = document.getElementById("home-template").innerHTML;
    let template = Handlebars.compile(homeTemplate);

    //elements
    let filteredHomesDiv = document.getElementById("homePage-filtered-homes-div");
    let filter = document.getElementById("homePage-filter-form");
    let filterInputTown = document.getElementById("filter-input-location");
    let filterInputCapacity = document.getElementById("filter-input-guests");
    let title = document.getElementById("title-filtered-homes");
    let buttonAscendingPrice = document.getElementById("button-ascending-price-homes");
    let buttonDescendingPrice = document.getElementById("button-descending-price-homes");
    let buttonCapacity = document.getElementById("button-capacity-homes");
    let buttonBooked = document.getElementById("button-booked-homes");

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

    //arrays 
    let filteredHomes;
    let additionallyFilteredHomes;
    let arrayWithButtons = [buttonApartments, buttonCabinsAndCottages, buttonUniqueHomes];

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

    buttonAscendingPrice.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByAscendingPrice(additionallyFilteredHomes.homes);
        showHomes(additionallyFilteredHomes);
    });

    buttonDescendingPrice.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByDescendingPrice(additionallyFilteredHomes.homes);
        showHomes(additionallyFilteredHomes);
    });

    buttonCapacity.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByCapacity(additionallyFilteredHomes.homes);
        showHomes(additionallyFilteredHomes);
    });

    buttonBooked.addEventListener("click", () => {
        additionallyFilteredHomes.homes = orderByTimesBooked(additionallyFilteredHomes.homes);
        showHomes(additionallyFilteredHomes);
    });

    buttonPetsAllowed.element.addEventListener("click", () => {
        buttonPetsAllowed.click === true ? buttonPetsAllowed.click = false : buttonPetsAllowed.click = true;
        buttonPetsAllowed.click ? buttonPetsAllowed.element.style.fontWeight = "bold" : buttonPetsAllowed.element.style.fontWeight = "normal";
        createCustomArrayfromHomesWithPets();
    });

    buttonApartments.element.addEventListener("click", () => {
        buttonApartments.click === true ? buttonApartments.click = false : buttonApartments.click = true;
        buttonApartments.click ? buttonApartments.element.style.fontWeight = "bold" : buttonApartments.element.style.fontWeight = "normal";
        createCustomArrayfromHomes();

    });

    buttonCabinsAndCottages.element.addEventListener("click", () => {
        buttonCabinsAndCottages.click === true ? buttonCabinsAndCottages.click = false : buttonCabinsAndCottages.click = true;
        buttonCabinsAndCottages.click ? buttonCabinsAndCottages.element.style.fontWeight = "bold" : buttonCabinsAndCottages.element.style.fontWeight = "normal";
        createCustomArrayfromHomes();

    });

    buttonUniqueHomes.element.addEventListener("click", () => {
        buttonUniqueHomes.click === true ? buttonUniqueHomes.click = false : buttonUniqueHomes.click = true;
        buttonUniqueHomes.click ? buttonUniqueHomes.element.style.fontWeight = "bold" : buttonUniqueHomes.element.style.fontWeight = "normal";
        createCustomArrayfromHomes();

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
        arrayWithButtons.forEach(button => {
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

})();




