// elements
let homePageFilterLocation = getById("filter-input-location");
let homePageFilterCheckIn = getById("filter-input-checkIn");
let homePageFilterCheckOut = getById("filter-input-checkOut");
let homePageFilterGuests = getById("filter-input-guests");

let homePageFilterLocationDiv = getById("location");
let homePageFilterCheckInDiv = getById("homePage-filter-checkIn-div");
let homePageFilterCheckOutDiv = getById("homePage-filter-checkOut-div");
let homePageFilterGuestsDiv = getById("homePage-filter-guests-div");

let homePageFilterLocationParagraph = document.getElementById("homePage-filter-location-secondText");
let homePageFilterCheckInParagraph = document.getElementById("homePage-filter-checkIn-secondText");
let homePageFilterCheckOutParagraph = document.getElementById("homePage-filter-checkOut-secondText");
let homePageFilterGuestsParagraph = document.getElementById("homePage-filter-guests-secondText");

let profileInHeader = getById("profileInHeader");
let dropdownProfileInHeader = getById("dropdown-profileInHeader");
let logIn = getById("homePage-logIn");
let linkLogIn = getById("dropdown-logIn");
let closeButtonLogIn = getById("close-logIn-homePage");


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