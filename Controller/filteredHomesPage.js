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
    let buttonPetsAllowed = document.getElementById("button-petsAllowed-homes");
    let buttonApartments = document.getElementById("button-apartments-homes");
    let buttonCabinsAndCottages = document.getElementById("button-cabinsAndCottages-homes");
    let buttonUniqueHomes = document.getElementById("butoon-unique-homes");

    //arrays 
    let filteredHomes = [];
    let additionallyFilteredHomes = [];

    //test objects
    homes.forEach(home => homeManager.addHome(home));

    //eventlisteners and functions
    filter.addEventListener("submit", (event) => {
        event.preventDefault();
        let filterTown = filterInputTown.value;
        let filterCapacity = filterInputCapacity.value;
        title.innerText = `Choose from the best locations in ${filterTown}!`;
        filteredHomes = { filteredHomes: homeManager.filter(filterTown, filterCapacity) };
        showHomes(filteredHomes);
        filter.reset();
    });

    buttonAscendingPrice.addEventListener("click", () => {
        additionallyFilteredHomes = orderByAscendingPrice(filteredHomes.filteredHomes);
        showHomes(filteredHomes);
    });

    buttonDescendingPrice.addEventListener("click", () => {
        additionallyFilteredHomes = orderByDescendingPrice(filteredHomes.filteredHomes);
        showHomes(filteredHomes);
    });

    buttonCapacity.addEventListener("click", () => {
        additionallyFilteredHomes = orderByCapacity(filteredHomes.filteredHomes);
        showHomes(filteredHomes);
    });

    buttonBooked.addEventListener("click", () => {
        additionallyFilteredHomes = orderByTimesBooked(filteredHomes.filteredHomes);
        showHomes(filteredHomes);
    });

    function showHomes(array) {
        filteredHomesDiv.innerHTML = "";
        let html = template(array);
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




