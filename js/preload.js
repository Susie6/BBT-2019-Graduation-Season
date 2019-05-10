var loadingPage = document.getElementById("loadingPage");
var startingPage = document.getElementById("startingPage");
var mainPage = document.getElementById("mainPage");
var timeCapsule = document.getElementById("timeCapsulePage");
var wishDream = document.getElementById("wishDreamPage");
var photoWall = document.getElementById("photoWallPage");
var creativeMarket = document.getElementById("creativeMarketPage");
var timeStation = document.getElementById("timeStationPage");

var preload;
var mainfest;

function setupManifest() {
    mainfest = [{
        src: "/Propagation/img/startingPage/p1.svg"
    }, {
        src: "/Propagation/img/startingPage/p2.svg"
    }, {
        src: "/Propagation/img/startingPage/p3.svg"
    }, {
        src: "/Propagation/img/startingPage/p4.svg"
    }, {
        src: "/Propagation/img/startingPage/p5.svg"
    }, {
        src: "/Propagation/img/startingPage/p6.svg"
    }, {
        src: "/Propagation/img/startingPage/p7.svg"
    }, {
        src: "/Propagation/img/startingPage/p8.svg"
    }, {
        src: "/Propagation/img/startingPage/p9.svg"
    }, {
        src: "/Propagation/img/startingPage/p10.svg"
    }, {
        src: "/Propagation/img/startingPage/hat1.svg"
    }, {
        src: "/Propagation/img/startingPage/hat2.svg"
    }, {
        src: "/Propagation/img/startingPage/hat3.svg"
    }, {
        src: "/Propagation/img/startingPage/hat4.svg"
    }, {
        src: "/Propagation/img/startingPage/hat5.svg"
    }, {
        src: "/Propagation/img/graduation.png"
    }, {
        src: "/Propagation/img/startingPage/redlight.svg"
    }, {
        src: "/Propagation/img/startingPage/greenlight.svg"
    }, {
        src: "/Propagation/img/startingPage/background.jpg"
    }, {
        src: "/Propagation/img/mainPage/background.jpg"
    }, {
        src: "/Propagation/img/sectionPages/photoWall/background.jpg"
    }, {
        src: "/Propagation/img/sectionPages/timeCapsule/background.jpg"
    }, {
        src: "/Propagation/img/sectionPages/wishDream/background.jpg"
    }, {
        src: "/Propagation/img/sectionPages/creativeMarket/background.jpg"
    }, {
        src: "/Propagation/img/sectionPages/timeStation/background.jpg"
    }, {
        src: "/Propagation/img/graduation.png"
    }, {
        src: "/Propagation/img/startingPage/redlight.svg"
    }, {
        src: "/Propagation/img/startingPage/greenlight.svg"
    }, ];
}

function startPreload() {
    preload = new createjs.LoadQueue(true);
    preload.addEventListener("progress", handleFileProgress);
    preload.addEventListener("complete", loadComplete);
    preload.setMaxConnections(1);
    preload.loadManifest(mainfest);
}

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
//火柴人动画
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
    }, 1600);

}
setupManifest();
startPreload();