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
            src: "../img/startingPage/background.jpg"
        },
        {
            src: "../img/mainPage/background.jpg"
        }, {
            src: "../img/sectionPages/photoWall/background.jpg"
        },
        {
            src: "../img/sectionPages/timeCapsule/background.jpg"
        }, {
            src: "../img/sectionPages/wishDream/background.jpg"
        },
        {
            src: "../img/sectionPages/creativeMarket/background.jpg"
        }, {
            src: "../img/sectionPages/timeStation/background.jpg"
        },
        {
            src: "../img/graduation.png"
        }, {
            src: "../img/startingPage/redlight.svg"
        },
        {
            src: "../img/startingPage/greenlight.svg"
        }, {
            src: "../img/startingPage/p1.svg"
        },
        {
            src: "../img/startingPage/p2.svg"
        }, {
            src: "../img/startingPage/p3.svg"
        },
        {
            src: "../img/startingPage/p4.svg"
        }, {
            src: "../img/startingPage/p5.svg"
        },
        {
            src: "../img/startingPage/p6.svg"
        }, {
            src: "../img/startingPage/p7.svg"
        },
        {
            src: "../img/startingPage/p8.svg"
        }, {
            src: "../img/startingPage/p9.svg"
        },
        {
            src: "../img/startingPage/p10.svg"
        }, {
            src: "../img/startingPage/hat1.svg"
        },
        {
            src: "../img/startingPage/hat2.svg"
        }, {
            src: "../img/startingPage/hat3.svg"
        },
        {
            src: "../img/startingPage/hat4.svg"
        }, {
            src: "../img/startingPage/hat5.svg"
        },
    ];
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
    per.innerHTML = "<p>loading..." + Math.ceil(event.loaded * 100) + "%</p>";
    console.log(event.loaded);
}

function loadComplete() {
    loadingPage.classList.add("hide");
    startingPage.classList.remove("hide");
}
setupManifest();
startPreload();