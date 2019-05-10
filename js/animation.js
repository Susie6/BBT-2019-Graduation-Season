var loadingPage = document.getElementById("loadingPage");
var startingPage = document.getElementById("startingPage");
var mainPage = document.getElementById("mainPage");

//进入分页面
// var btn = document.getElementById("activities");
// btn.addEventListener("click", show);
var timeCapsule_btn = document.getElementById("timeCapsule");
var wishDream_btn = document.getElementById("wishDream");
var photoWall_btn = document.getElementById("photoWall");
var creativeMarket_btn = document.getElementById("creativeMarket");
var timeStation_btn = document.getElementById("timeStation");
timeCapsule_btn.addEventListener("click", show);
wishDream_btn.addEventListener("click", show);
photoWall_btn.addEventListener("click", show);
creativeMarket_btn.addEventListener("click", show);
timeStation_btn.addEventListener("click", show);

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

photoWall_back.addEventListener("click", hidePhotoWall);
creativeMarket_back.addEventListener("click", hideCreateMarket);
timeCapsule_back.addEventListener("click", hideTimeCapsule);
timeStation_back.addEventListener("click", hideTimeStation);
wishDream_back.addEventListener("click", hideWishDream);

//跳转
var iconTimeStation = document.getElementById("timeStation_icon");
var iconWishDream = document.getElementById("wishDream_icon");
var iconTimeCapsule = document.getElementById("timeCapsule_icon");

iconTimeStation.addEventListener("click", goTimeStation);
iconWishDream.addEventListener("click", goWishDream);
iconTimeCapsule.addEventListener("click", goTimeCapsule);

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
    stickMan.style.animation = "walking linear 1.6s 0s 1 forwards";
    setTimeout(function () {
        light.setAttribute("src", "./img/startingPage/greenlight.svg");
        toMainPage.style.display = "block";
    }, 1600);

}

var toMainPage = document.getElementById("toMainPage");
toMainPage.addEventListener("click", main_page);

function main_page() {
    startingPage.classList.add("fadeOut");
    mainPage.classList.remove("hide");
    // mainPage.classList.add("show");
    mainPage.classList.add("fadeFromRight");
    setTimeout(function () {
        startingPage.classList.add("hide");
        startingPage.classList.remove("fadeOut");
        mainPage.classList.remove("fadeFromRight");
    }, 700);
    console.log("页面切换");
}

function show(event) {
    var click = event.target.id;

    // var ripple = document.getElementsByClassName("ripple");
    // for (i = 0; i < ripple.length; i++) {
    //     if (ripple[i] != null) {
    //         ripple[i].parentNode.removeChild(ripple[i]);
    //     }
    // }

    // var a = document.getElementById(click);
    // var button_left = a.offsetLeft; 
    // var button_top = a.offsetTop; 
    // var button_width = a.offsetWidth; 
    // var button_height = a.offsetHeight; 
    // var ripple_width = button_width / 2;
    // console.log(event.clientX);
    // var ripple_x = event.clientX - button_left - ripple_width / 2;
    // var ripple_y = event.clientY - button_top - ripple_width / 2;
    // var act = document.getElementById("activities");
    // act.appendChild("<div class='ripple' id='ripple'></div>");
    // var ripple = document.getElementById("ripple");
    // ripple.classList.add("rippleEffect");


    var show_this = document.getElementById(click + "Page");
    if (mainPage.classList.contains("fadeFromRight")) {
        mainPage.classList.remove("fadeFromRight");
    }
    // mainPage.classList.add("fadeOut");
    show_this.classList.remove("hide");
    mainPage.classList.add("hide");
    // show_this.classList.add("fadeFromRight");
    // setTimeout(function () {
    //     mainPage.classList.add("hide");
    //     mainPage.classList.remove("fadeOut");
    //     show_this.classList.remove("fadeFromRight");
    // }, 700);


}

function hidePhotoWall() {
    // mainPage.classList.remove("hide");
    // // mainPage.classList.add("show");
    // // photoWall.classList.remove("show");
    // mainPage.classList.add("fadeIn");
    // photoWall.classList.add("fadeToRight");
    // setTimeout(function () {
    //     photoWall.classList.add("hide");
    //     photoWall.classList.remove("fadeToRight");
    //     mainPage.classList.remove("fadeIn");
    // }, 700);
    mainPage.classList.remove("hide");
    photoWall.classList.add("hide");
}

function hideCreateMarket() {
    mainPage.classList.remove("hide");
    // mainPage.classList.add("show");
    // creativeMarket.classList.remove("show");
    creativeMarket.classList.add("hide");
}

function hideTimeCapsule() {
    mainPage.classList.remove("hide");
    // mainPage.classList.add("show");
    // timeCapsule.classList.remove("show");
    timeCapsule.classList.add("hide");
}

function hideTimeStation() {
    mainPage.classList.remove("hide");
    // mainPage.classList.add("show");
    // timeStation.classList.remove("show");
    timeStation.classList.add("hide");
}

function hideWishDream() {
    mainPage.classList.remove("hide");
    // mainPage.classList.add("show");
    // wishDream.classList.remove("show");
    wishDream.classList.add("hide");
}

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

function goTimeStation() {
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

function goTimeCapsule() {
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

function goWishDream() {
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