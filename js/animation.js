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
var iconTimeStation = document.getElementById("timeStation_icon");
var iconWishDream = document.getElementById("wishDream_icon");
var iconTimeCapsule = document.getElementById("timeCapsule_icon");

iconTimeStation.addEventListener("click", goTimeStation);
iconWishDream.addEventListener("click", goWishDream);
iconTimeCapsule.addEventListener("click", goTimeCapsule);

photoWall_back.addEventListener("click", hidePhotoWall);
creativeMarket_back.addEventListener("click", hideCreateMarket);
timeCapsule_back.addEventListener("click", hideTimeCapsule);
timeStation_back.addEventListener("click", hideTimeStation);
wishDream_back.addEventListener("click", hideWishDream);

btn.addEventListener("click", show);

var toMainPage = document.getElementById("toMainPage");
toMainPage.addEventListener("click",mainPage);

function mainPage(){
    startingPage.classList.add("fadeOut");
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    mainPage.classList.add("fadeFromRight");
    setTimeout(function () {
        startingPage.classList.add("hide");
        startingPage.classList.remove("fadeOut");
        mainPage.classList.remove("fadeFromRight");
    }, 2000);
    console("页面切换");
}

function startingAnimation(){
    var red = document.getElementById("red_light");
    var green = document.getElementById("green_light");
    green.style.display = "none";
    setTimeout(function () {
        red.style.display = "none";
        green.style.display = "block";
        toMainPage.style.display = "block";
    }, 2000);
}
function show(event) {
    var click = event.target.id;
    var show_this = document.getElementById(click + "Page");
    console.log(show_this);
    if(mainPage.classList.contains("fadeFromRight")){
        mainPage.classList.remove("fadeFromRight");
    }
    mainPage.classList.remove("show");
    mainPage.classList.add("hide");
    show_this.classList.remove("hide");
    //show_this.classList.add("fadeFromTop");
    show_this.classList.add("show");
}

function hidePhotoWall() {
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    photoWall.classList.remove("show");
    photoWall.classList.add("hide");
}

function hideCreateMarket() {
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    creativeMarket.classList.remove("show");
    creativeMarket.classList.add("hide");
}

function hideTimeCapsule() {
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    timeCapsule.classList.remove("show");
    timeCapsule.classList.add("hide");
}

function hideTimeStation() {
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    timeStation.classList.remove("show");
    timeStation.classList.add("hide");
}

function hideWishDream() {
    mainPage.classList.remove("hide");
    mainPage.classList.add("show");
    wishDream.classList.remove("show");
    wishDream.classList.add("hide");
}
var mainCount, timeCapsuleCount, timeStationCount, wishDreamCount;
// var name = {
//     "zongxuan": mainCount,
//     "sgjn": timeCapsuleCount,
//     "lncz": timeStationCount,
//     "xybkm": wishDreamCount,
// }
window.onload = function count() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            if (res.errcode == 0) {
                console.log(res.msg);
                console.log("总访问次数：" + res.data.zongxuan + "次");
            } else {
                console.log(res.msg);
            }
        }
    };
    xhttp.open("POST", "http://111.230.183.100/zongxuan/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "zongxuan";
    JSON.stringify(name);
    xhttp.send("name=" + name);
    startingAnimation();
}

function goTimeStation(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("流年车站");
        }
    };
    xhttp.open("POST", "http://111.230.183.100/zongxuan/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "lncz";
    JSON.stringify(name);
    xhttp.send("name=" + name);
    // window.location.href =
}

function goTimeCapsule(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("时光胶囊");
        }
    };
    xhttp.open("POST", "http://111.230.183.100/zongxuan/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "sgjn";
    JSON.stringify(name);
    xhttp.send("name=" + name);
    // window.location.href =
}

function goWishDream(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("许愿宝可梦");
        }
    };
    xhttp.open("POST", "http://111.230.183.100/zongxuan/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    console.log(name);
    JSON.stringify(name);
    xhttp.send("name=" + name);
    // window.location.href =
}