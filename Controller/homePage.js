(function () {

    // inputs
    let homePageFilterLocation = document.getElementById("filter-input-location");
    let homePageFilterCheckIn = document.getElementById("filter-input-checkIn");
    let homePageFilterCheckOut = document.getElementById("filter-input-checkOut");
    let homePageFilterGuests = document.getElementById("filter-input-guests");

    // divs
    let homePageFilterLocationDiv = document.getElementById("location");
    let homePageFilterCheckInDiv = document.getElementById("homePage-filter-checkIn-div");
    let homePageFilterCheckOutDiv = document.getElementById("homePage-filter-checkOut-div");
    let homePageFilterGuestsDiv = document.getElementById("homePage-filter-guests-div");
    let homePageLoginDiv = document.getElementById("homePage-login-external-div");
    let homePageSignInDiv = document.getElementById("homePage-signIn-external-div");

    // paragraphs
    let homePageFilterLocationParagraph = document.getElementById("homePage-filter-location-secondText");
    let homePageFilterCheckInParagraph = document.getElementById("homePage-filter-checkIn-secondText");
    let homePageFilterCheckOutParagraph = document.getElementById("homePage-filter-checkOut-secondText");
    let homePageFilterGuestsParagraph = document.getElementById("homePage-filter-guests-secondText");

    // elements who open and close
    let profileInHeader = document.getElementById("profileInHeader");
    let dropdownProfileInHeader = document.getElementById("dropdown-profileInHeader");
    let logIn = document.getElementById("homePage-logIn");
    let linkLogIn = document.getElementById("dropdown-logIn");
    let closeButtonLogIn = document.getElementById("close-logIn-homePage");
    let linkSignUp = document.getElementById("dropdown-signIn");
    let closeButtonSignIn = document.getElementById("close-signIn-homePage");
    let signIn = document.getElementById("homePage-signIn");

    //filter
    let filter = document.getElementById("homePage-filter-form");

    // elements who goes to filtered homes 
    let entireHomesLink = document.getElementById("liveAnywhere-div-entireHomes");
    let cabinsLink = document.getElementById("liveAnywhere-div-cabinsAndCottages");
    let uniqueLink = document.getElementById("liveAnywhere-div-uniqueStays");
    let petsAllowedLink = document.getElementById("liveAnywhere-div-petsWelcome");

    let logo = document.getElementById("homePage-logo");

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

    linkSignUp.addEventListener("click",() => {
        homePageSignInDiv.style.display = "block";
        signIn.style.display = 'flex';
        window.addEventListener('scroll', scroll);
        dropdownProfileInHeader.style.visibility = "hidden";
    })
    linkLogIn.addEventListener("click", () => {
        homePageLoginDiv.style.display = "block";
        logIn.style.display = 'flex';
        window.addEventListener('scroll', scroll);
        dropdownProfileInHeader.style.visibility = "hidden";
    });

    closeButtonLogIn.addEventListener("click", () => {
        homePageLoginDiv.style.display = 'none';
        logIn.style.display = 'none';
        window.removeEventListener('scroll', scroll);
    });
    
    closeButtonSignIn.addEventListener("click", () => {
        homePageSignInDiv.style.display = 'none';
        signIn.style.display = 'none';
        window.removeEventListener('scroll', scroll);
    });

    filter.addEventListener("submit", (event) => {
        event.preventDefault();
        location.hash = "homePage-filtered-homes-section";
        homePageFilterLocationParagraph.style.display = "flex";
        homePageFilterLocation.style.display = "none";
        homePageFilterCheckInParagraph.style.display = 'flex';
        homePageFilterCheckIn.style.display = 'none';
        homePageFilterCheckOutParagraph.style.display = 'flex';
        homePageFilterCheckOut.style.display = 'none';
        homePageFilterGuestsParagraph.style.display = 'flex';
        homePageFilterGuests.style.display = 'none';
    });

    logo.addEventListener("click", () => {
        location.hash = 'PlacesToStay';
    });

    entireHomesLink.addEventListener("click", () => {
        location.hash = "homePage-filtered-homes-section";
    });
    cabinsLink.addEventListener("click", () => {
        location.hash = "homePage-filtered-homes-section";
    });
    uniqueLink.addEventListener("click", () => {
        location.hash = "homePage-filtered-homes-section";
    });
    petsAllowedLink.addEventListener("click", () => {
        location.hash = "homePage-filtered-homes-section";
    });

    function scroll() {
        window.scrollTo(0, 0);
    }
})();
