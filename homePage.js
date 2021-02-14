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

//EventListeners
homePageFilterLocationDiv.addEventListener("click", function () {
    if (homePageFilterLocationParagraph.style.visibility === "hidden") {
        homePageFilterLocationParagraph.style.visibility = "visible";
        homePageFilterLocation.style.visibility = "hidden";
    } else {
        homePageFilterLocationParagraph.style.visibility = "hidden";
        homePageFilterLocation.style.visibility = "visible";
    }
});

homePageFilterCheckInDiv.addEventListener("click", function () {
    if (homePageFilterCheckInParagraph.style.visibility === 'hidden') {
        homePageFilterCheckInParagraph.style.visibility = 'visible';
        homePageFilterCheckIn.style.visibility = 'hidden';
    } else {
        homePageFilterCheckInParagraph.style.visibility = "hidden";
        homePageFilterCheckIn.style.visibility = 'visible';
    }
});

homePageFilterCheckOutDiv.addEventListener("click", function () {
    if (homePageFilterCheckOutParagraph.style.visibility === 'hidden') {
        homePageFilterCheckOutParagraph.style.visibility = 'visible';
        homePageFilterCheckOut.style.visibility = 'hidden';
    } else {
        homePageFilterCheckOutParagraph.style.visibility = 'hidden';
        homePageFilterCheckOut.style.visibility = 'visible';
    }
});

homePageFilterGuestsDiv.addEventListener("click", function () {
    if (homePageFilterGuestsParagraph.style.visibility === 'hidden') {
        homePageFilterGuestsParagraph.style.visibility = 'visible';
        homePageFilterGuests.style.visibility = 'hidden';
    } else {
        homePageFilterGuestsParagraph.style.visibility = 'hidden';
        homePageFilterGuests.style.visibility = 'visible';
    }
});