var startingPage = document.getElementById("startingPage");
var mainPage = document.getElementById("mainPage");

var btn = document.getElementById("activities");
//导航栏
var activities = {
    timeCapsule: document.getElementById("timeCapsule"),
    wishDream: document.getElementById("wishDream"),
    photoWall: document.getElementById("photoWall"),
    creativeMarket: document.getElementById("creativeMarket"),
    timeStation: document.getElementById("timeStation"),
};
//活动分页面
var timeCapsule = document.getElementById("timeCapsulePage");
var wishDream = document.getElementById("wishDreamPage");
var photoWall = document.getElementById("photoWallPage");
var creativeMarket = document.getElementById("creativeMarketPage");
var timeStation = document.getElementById("timeStationPage");
//返回键
var photoWall_back = document.getElementById("photoWall_back");
var creativeMarket_back = document.getElementById("creativeMarket_back");
var timeCapsule_back = document.getElementById("timeCapsule_back");
var timeStation_back = document.getElementById("timeStation_back");
var wishDream_back = document.getElementById("wishDream_back");
//跳转
var go = {
    goTimeCapsule: document.getElementById("goTimeCapsule"),
    goWishDream: document.getElementById("goWishDream"),
    goPhotoWall: document.getElementById("goPhotoWall"),
};

photoWall_back.addEventListener("click", hidePhotoWall);
creativeMarket_back.addEventListener("click", hideCreateMarket);
timeCapsule_back.addEventListener("click", hideTimeCapsule);
timeStation_back.addEventListener("click", hideTimeStation);
wishDream_back.addEventListener("click", hideWishDream);

btn.addEventListener("click",show);

function show(event) {
    var click = event.target.id;
    var show_this = document.getElementById(click+"Page");
    console.log(show_this);
    mainPage.classList.remove("show");
    mainPage.classList.add("hide");
    show_this.classList.remove("hide");
    show_this.classList.add("show");
}

function hidePhotoWall() {
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    photoWall.classList.remove("show");
    photoWall.classList.add("hide");
}

function hideCreateMarket(){
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    creativeMarket.classList.remove("show");
    creativeMarket.classList.add("hide");
}
function hideTimeCapsule(){
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    timeCapsule.classList.remove("show");
    timeCapsule.classList.add("hide");
}
function hideTimeStation(){
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    timeStation.classList.remove("show");
    timeStation.classList.add("hide");
}
function hideWishDream(){
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    wishDream.classList.remove("show");
    wishDream.classList.add("hide");
}