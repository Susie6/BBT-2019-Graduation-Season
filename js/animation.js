var loadingPage = document.getElementById("loadingPage");
var startingPage = document.getElementById("startingPage");
var mainPage = document.getElementById("mainPage");
var mainPageTitle = document.getElementById("mainPageTitle");
var activities = {
    timeCapsule: document.getElementById("timeCapsule"),
    wishDream: document.getElementById("wishDream"),
    photoWall: document.getElementById("photoWall"),
    creativeMarket: document.getElementById("creativeMarket"),
    timeStation: document.getElementById("timeStation"),
};
var sectionPages = {
    timeCapsulePage: document.getElementById("timeCapsulePage"),
    wishDreamPage: document.getElementById("wishDreamPage"),
    photoWallPage: document.getElementById("photoWallPage"),
    creativeMarketPage: document.getElementById("creativeMarketPage"),
    timeStationPage: document.getElementById("timeStationPage"),
};
var goBack = document.getElementById("goBack");
var go = {
    goTimeCapsule: document.getElementById("goTimeCapsule"),
    goWishDream: document.getElementById("goWishDream"),
    goPhotoWall: document.getElementById("goPhotoWall"),
    goCreativeMarket: document.getElementById("goCreativeMarket"),
    goTimeStation: document.getElementById("goTimeStation"),
};
activities.addEventListener("click", showPage);
goBack.addEventListener("click", hidePage);
var loading = setTimeout(startAnimation, 15000);
window.addEventListener("load", function () {
    loadingPage.classList.add("fadeOut");
    setTimeout(startAnimation, 2000);
    clearTimeout(loading);
})