var loadingPage = document.getElementById("loadingPage");
var startingPage = document.getElementById("startingPage");
var mainPage = document.getElementById("mainPage");
var timeCapsule = document.getElementById("timeCapsulePage");
var wishDream = document.getElementById("wishDreamPage");
var photoWall = document.getElementById("photoWallPage");
var creativeMarket = document.getElementById("creativeMarketPage");
var timeStation = document.getElementById("timeStationPage");

var preload;
var preload2;
var mainfest;

function setupManifest() {
    mainfest = [{
        src: "./img/startingPage/p1.svg"
    }, {
        src: "./img/startingPage/p2.svg"
    }, {
        src: "./img/startingPage/p3.svg"
    }, {
        src: "./img/startingPage/p4.svg"
    }, {
        src: "./img/startingPage/p5.svg"
    }, {
        src: "./img/startingPage/p6.svg"
    }, {
        src: "./img/startingPage/p7.svg"
    }, {
        src: "./img/startingPage/p8.svg"
    }, {
        src: "./img/startingPage/p9.svg"
    }, {
        src: "./img/startingPage/p10.svg"
    }, {
        src: "./img/startingPage/hat1.svg"
    }, {
        src: "./img/startingPage/hat2.svg"
    }, {
        src: "./img/startingPage/hat3.svg"
    }, {
        src: "./img/startingPage/hat4.svg"
    }, {
        src: "./img/startingPage/hat5.svg"
    }, {
        src: "./img/graduation.png"
    }, {
        src: "./img/startingPage/redlight.svg"
    }, {
        src: "./img/startingPage/greenlight.svg"
    }, {
        src: "./img/startingPage/background.jpg"
    }, ];
   
}
function setupManifest2(){
     mainfest2 = [{
        src: "./img/mainPage/background.jpg"
    }, {
        src: "./img/sectionPages/photoWall/background.jpg"
    }, {
        src: "./img/sectionPages/timeCapsule/background.jpg"
    }, {
        src: "./img/sectionPages/wishDream/background.jpg"
    }, {
        src: "./img/sectionPages/creativeMarket/background.jpg"
    }, {
        src: "./img/sectionPages/timeStation/background.jpg"
    }, ];
}
function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.addEventListener("progress", handleFileProgress);
    preload.addEventListener("complete", loadComplete);
    preload.setMaxConnections(1);
    preload.loadManifest(mainfest);
}

function startPreload2() {
    preload2 = new createjs.LoadQueue(true);
    preload2.setMaxConnections(1);
    preload2.loadManifest(mainfest2);
}
setupManifest();
startPreload();
function handleFileProgress(event) {
    var per = document.getElementById("percent");
    per.innerHTML = "<p>" + Math.ceil(event.loaded * 100) + "%</p>";
    var bicycle = document.getElementById("bicycle");
    var stripesLoader = document.getElementById("progress");
    var l = event.loaded * 82 + "%";
    var line_per = event.loaded * 72.2 + "%";
    stripesLoader.style.width = line_per;
    bicycle.style.left = l;
}

function loadComplete() {
    loadingPage.classList.add("hide");
    startingPage.classList.remove("hide");
    startingAnimation();
}
//???????????????
var image = new Array();
image[0] = "./img/startingPage/p1.svg";
image[1] = "./img/startingPage/p2.svg";
image[2] = "./img/startingPage/p3.svg";
image[3] = "./img/startingPage/p4.svg";
image[4] = "./img/startingPage/p5.svg";
image[5] = "./img/startingPage/p6.svg";
image[6] = "./img/startingPage/p7.svg";
image[7] = "./img/startingPage/p8.svg";
image[8] = "./img/startingPage/p9.svg";
image[9] = "./img/startingPage/p4.svg";
image[10] = "./img/startingPage/p5.svg";
image[11] = "./img/startingPage/p6.svg";
image[12] = "./img/startingPage/p7.svg";
image[13] = "./img/startingPage/p8.svg";
image[14] = "./img/startingPage/p9.svg";
image[15] = "./img/startingPage/p10.svg";
image[16] = "./img/startingPage/hat1.svg";
image[17] = "./img/startingPage/hat2.svg";
image[18] = "./img/startingPage/hat3.svg";
image[19] = "./img/startingPage/hat4.svg";
image[20] = "./img/startingPage/hat5.svg";

function startingAnimation() {
    var light = document.getElementById("light");
    var stickMan = document.getElementById("stickMan");
    for (var i = 0; i < image.length; i++) {
        setTimeout((function (i) {
            return function () {
                stickMan.setAttribute("src", image[i]);
            }
        })(i), i * 100);
    }
    stickMan.style.animation = "walking linear 1.5s 0s 1 forwards";
    setTimeout(function () {
        light.setAttribute("src", "./img/startingPage/greenlight.svg");
        toMainPage.style.display = "block";
        setupManifest2();
        startPreload2();
    }, 1600);

}
