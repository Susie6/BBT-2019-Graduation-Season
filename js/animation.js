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

iconTimeStation.addEventListener("click", countTimeStation);
iconTimeStation.addEventListener("click", goTimeStation);
iconWishDream.addEventListener("click", countWishDream);
iconWishDream.addEventListener("click", goWishDream);
iconTimeCapsule.addEventListener("click", countTimeCapsule);
iconTimeCapsule.addEventListener("click", goTimeCapsule);

//开始页面跳转到导航页面
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
}

function show(event) {
    var click = event.target.id;
    var show_this = document.getElementById(click + "Page");
    if (mainPage.classList.contains("fadeFromRight")) {
        mainPage.classList.remove("fadeFromRight");
    }
    // mainPage.classList.add("fadeOut");
    show_this.classList.remove("hide");
    mainPage.classList.add("hide");
    // show_this.classList.add("moveFromRight");
    // setTimeout(function () {
    //     mainPage.classList.add("hide");
    //     mainPage.classList.remove("fadeOut");
    // }, 400);
    // setTimeout(function () {
    //     show_this.classList.remove("moveFromRight");
    // }, 700);
}

function hidePhotoWall() {
    mainPage.classList.remove("hide");
    // mainPage.classList.add("show");
    // photoWall.classList.remove("show");
    // mainPage.classList.add("fadeIn");
    photoWall.classList.add("hide");
    // setTimeout(function () {
    //     mainPage.classList.remove("fadeIn");
    // }, 700);
    // mainPage.classList.remove("hide");
    // photoWall.classList.add("hide");
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
//总宣页面总浏览数
function count() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log("zongxuan");
        }
    };
    xhttp.open("POST", "./backend/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "zongxuan";
    JSON.stringify(name);
    xhttp.send("name=" + name);
}
count();
//时间获取
var date = new Date();
//跳转以及活动时间判断
function goTimeStation() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            var begin = res.data.beginTime.replace("-","/");
            var end = res.data.DDL.replace("-","/");
            var beginTime = new Date(begin);
            var endTime = new Date(end);
            var tips = document.getElementById("tips2");
            var msg = document.getElementById("msg2");
            var time = begin.split(" ");
            if (date <= beginTime) {
                msg.innerHTML = "活动开始时间<br />" + time[0];
                tips.style.display = "block";
                tips.style.animation = "scaleIn 0.3s linear 0s 1 forwards";
            } else if (date >= endTime) {
                msg.innerHTML = "活动已结束 <br />(≧ω≦)/";
                tips.style.display = "block";
                tips.style.animation = "scaleIn 0.3s linear 0s 1 forwards";
            } else {
                //跳转链接记得改哦
                window.location.href = "https://www.baidu.com/";
            }
        }
    };
    xhttp.open("POST", "./backend/DDL.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "lncz";
    JSON.stringify(name);
    xhttp.send("name=" + name);
}

function goTimeCapsule() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            var begin = res.data.beginTime.replace("-","/");
            var end = res.data.DDL.replace("-","/");
            var beginTime = new Date(begin);
            var endTime = new Date(end);
            var tips = document.getElementById("tips1");
            var msg = document.getElementById("msg1");
            //console.log("开始时间："+beginTime+"现在时间："+date+"结束时间："+endTime);
            var time = begin.split(" ");
            if (date <= beginTime) {
                msg.innerHTML = "活动开始时间<br />" + time[0];
                tips.style.display = "block";
                tips.style.animation = "scaleIn 0.3s linear 0s 1 forwards";
            } else if (date >= endTime) {
                msg.innerHTML = "活动已结束 <br />(≧ω≦)/";
                tips.style.display = "block";
                tips.style.animation = "scaleIn 0.3s linear 0s 1 forwards";
            } else {
                //跳转链接记得改哦
                window.location.href = "https://www.baidu.com/";
            }
        }
    };
    xhttp.open("POST", "./backend/DDL.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "sgjn";
    JSON.stringify(name);
    xhttp.send("name=" + name);
}

function goWishDream() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            var begin = res.data.beginTime.replace("-","/");
            var end = res.data.DDL.replace("-","/");
            var beginTime = new Date(begin);
            var endTime = new Date(end);
            var tips = document.getElementById("tips3");
            var msg = document.getElementById("msg3");
            var time = begin.split(" ");
            if (date <= beginTime) {
                msg.innerHTML = "活动开始时间<br />" + time[0];
                tips.style.display = "block";
                tips.style.animation = "scaleIn 0.3s linear 0s 1 forwards";
            } else if (date >= endTime) {
                msg.innerHTML = "活动已结束 <br />(≧ω≦)/";
                tips.style.display = "block";
                tips.style.animation = "scaleIn 0.3s linear 0s 1 forwards";
            } else {
                //跳转链接记得改哦
                window.location.href = "https://www.baidu.com/";
            }
        }
    };
    xhttp.open("POST", "./backend/DDL.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "xybkm"
    JSON.stringify(name);
    xhttp.send("name=" + name);
}
//记录引流数
function countTimeStation() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("流年车站");
        }
    };
    xhttp.open("POST", "./backend/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "lncz";
    JSON.stringify(name);
    xhttp.send("name=" + name);
}

function countTimeCapsule() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("时光胶囊");
        }
    };
    xhttp.open("POST", "./backend/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "sgjn";
    JSON.stringify(name);
    xhttp.send("name=" + name);
}

function countWishDream() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log("许愿宝可梦");
        }
    };
    xhttp.open("POST", "./backend/zongxuan.php", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var name = "xybkm";
    JSON.stringify(name);
    xhttp.send("name=" + name);
}
//弹窗消失
function disappear1(){
    var tips = document.getElementById("tips1");
    var msg = document.getElementById("msg1");
    tips.style.animation = "scaleOut 0.3s linear 0s 1 forwards";
    setTimeout(function () {
        tips.style.display = "none";
    }, 300);
}
function disappear2(){
    var tips = document.getElementById("tips2");
    var msg = document.getElementById("msg2");
    tips.style.animation = "scaleOut 0.3s linear 0s 1 forwards";
    setTimeout(function () {
        tips.style.display = "none";
    }, 300);
}
function disappear3(){
    var tips = document.getElementById("tips3");
    var msg = document.getElementById("msg3");
    tips.style.animation = "scaleOut 0.3s linear 0s 1 forwards";
    setTimeout(function () {
        tips.style.display = "none";
    }, 300);
}