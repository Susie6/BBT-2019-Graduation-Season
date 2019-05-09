var loadingPage = document.getElementById("loadingPage");
var startingPage = document.getElementById("startingPage");
var mainPage = document.getElementById("mainPage");
var timeCapsule = document.getElementById("timeCapsulePage");
var wishDream = document.getElementById("wishDreamPage");
var photoWall = document.getElementById("photoWallPage");
var creativeMarket = document.getElementById("creativeMarketPage");
var timeStation = document.getElementById("timeStationPage");

function loading() {
    //var imgs = document.getElementsByTagName("img");
    var big_imgs = new Array();
    big_imgs[0] = window.getComputedStyle(startingPage, "").backgroundImage;
    big_imgs[1] = document.getElementById("wel");
    big_imgs[2] = window.getComputedStyle(mainPage, "").backgroundImage;
    big_imgs[3] = document.getElementById("graduation");
    big_imgs[4] = window.getComputedStyle(photoWall, "").backgroundImage;
    big_imgs[5] = window.getComputedStyle(creativeMarket, "").backgroundImage;
    big_imgs[6] = window.getComputedStyle(timeCapsule, "").backgroundImage;
    big_imgs[7] = window.getComputedStyle(timeStation, "").backgroundImage;
    big_imgs[8] = window.getComputedStyle(wishDream, "").backgroundImage;
    console.log(big_imgs[0]);
    var len = 0;
    for (var i = 0; i < big_imgs.length; i++) {
        (function (i) {
            big_imgs[i].onload = function () {
                len++;
                var per = Math.round(len * 100 / big_imgs.length);
                console.log(per);
            }
        })(i);
    }

}
loading();

document.onreadystatechange = loadingAnimation;
function loadingAnimation() {
    if(document.readyState == "complete" ){
        console.log("加载完毕");
        loadingPage.classList.add("fadeOut");
        startingPage.classList.remove("hide");
        startingPage.classList.add("fadeIn");    
    setTimeout(function () {
        loadingPage.classList.add("hide");
    }, 700);    
    }
    // setTimeout(function () {
    //     loadingPage.classList.add("fadeOut");
    //     startingPage.classList.remove("hide");
    //     startingPage.classList.add("fadeIn");
    // }, 2000);
    // setTimeout(function () {
    //     loadingPage.classList.add("hide");
    // }, 3000);
}
//loadingAnimation();