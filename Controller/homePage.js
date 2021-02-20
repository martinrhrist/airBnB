(function(){
    
    // inputs
    let homePageFilterLocation = getById("filter-input-location");
    let homePageFilterCheckIn = getById("filter-input-checkIn");
    let homePageFilterCheckOut = getById("filter-input-checkOut");
    let homePageFilterGuests = getById("filter-input-guests");

    // divs
    let homePageFilterLocationDiv = getById("location");
    let homePageFilterCheckInDiv = getById("homePage-filter-checkIn-div");
    let homePageFilterCheckOutDiv = getById("homePage-filter-checkOut-div");
    let homePageFilterGuestsDiv = getById("homePage-filter-guests-div");

    // paragraphs
    let homePageFilterLocationParagraph = document.getElementById("homePage-filter-location-secondText");
    let homePageFilterCheckInParagraph = document.getElementById("homePage-filter-checkIn-secondText");
    let homePageFilterCheckOutParagraph = document.getElementById("homePage-filter-checkOut-secondText");
    let homePageFilterGuestsParagraph = document.getElementById("homePage-filter-guests-secondText");

    // elements who open and close
    let profileInHeader = getById("profileInHeader");
    let dropdownProfileInHeader = getById("dropdown-profileInHeader");
    let logIn = getById("homePage-logIn");
    let linkLogIn = getById("dropdown-logIn");
    let closeButtonLogIn = getById("close-logIn-homePage");

    //filter
    let filter = document.getElementById("homePage-filter-form");

    // sections in Home Page
    let header = document.getElementById("homePage-header");
    let towns = document.getElementById("homePage-towns");
    let liveAnywhere = document.getElementById("homePage-liveAnywhere");
    let onlineExperiences = document.getElementById("homePage-onlineExperiences");
    let joinHosts = document.getElementById("homePage-joinHosts");
    let filteredHomes = document.getElementById("homePage-filtered-homes");

    // elements in header who change after user submit filter form
    let filterDiv = document.getElementById("homePage-filter");
    let headerText = document.getElementById("homePage-header-text");
    let headerButton = document.getElementById("homePage-header-button");


    //EventListeners
    homePageFilterLocationDiv.addEventListener("click", function () {
        homePageFilterLocationParagraph.style.display = "none";
        homePageFilterLocation.style.display = "block";
    });

    homePageFilterCheckInDiv.addEventListener("click", function () {
        homePageFilterCheckInParagraph.style.display = 'none';
        homePageFilterCheckIn.style.display = 'block';
    });

    homePageFilterCheckOutDiv.addEventListener("click", function () {
        homePageFilterCheckOutParagraph.style.display = 'none';
        homePageFilterCheckOut.style.display = 'block';
    });

    homePageFilterGuestsDiv.addEventListener("click", function () {
        homePageFilterGuestsParagraph.style.display = 'none';
        homePageFilterGuests.style.display = 'block';
    });


    profileInHeader.addEventListener("click", () => { dropdownProfileInHeader.style.visibility === 'hidden' ? dropdownProfileInHeader.style.visibility = 'visible' : dropdownProfileInHeader.style.visibility = "hidden" });

    linkLogIn.addEventListener("click", () => {
        logIn.style.display = 'block';
        dropdownProfileInHeader.style.visibility = "hidden";
    });

    closeButtonLogIn.addEventListener("click", () => logIn.style.display = 'none');

    filter.addEventListener("submit", (event) => {
        event.preventDefault();
        changeHomePage();
    });

    function changeHomePage() {
        header.style.height = "7vw";
        filterDiv.style.display = "none";
        headerText.style.display = "none";
        headerButton.style.display = "none";
        towns.style.display = "none";
        liveAnywhere.style.display = "none";
        onlineExperiences.style.display = "none";
        joinHosts.style.display = "none";
    }
})();
