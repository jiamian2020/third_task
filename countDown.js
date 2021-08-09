if (document.all) {
    document.getElementById("music").click();
}

function getDay() {
    var begin = new Date();
    var end = new Date(2021, 8, 5);

    var time1 = begin.getTime();
    var time2 = end.getTime();

    var dis = (time2 - time1) / 1000;

    var Day = dis / (60 * 60 * 24);
    Day = Math.floor(Day);

    var day = document.getElementById("Day");
    day.innerHTML = Day;

    if (Day < 10) {
        day.innerHTML = '0' + Day;
    } else {
        day.innerHTML = Day;
    }
}
function getHour() {
    var begin = new Date();
    var end = new Date(2021, 8, 5);

    var time1 = begin.getTime();
    var time2 = end.getTime();

    var dis = (time2 - time1) / 1000;

    var Hour = dis / (60 * 60) % 24;
    Hour = Math.floor(Hour);

    var hour = document.getElementById("Hour");
    hour.innerHTML = Hour;

    if (Hour < 10) {
        hour.innerHTML = '0' + Hour;
    } else {
        hour.innerHTML = Hour;
    }
}
function getMin() {
    var begin = new Date();
    var end = new Date(2021, 8, 5);

    var time1 = begin.getTime();
    var time2 = end.getTime();

    var dis = (time2 - time1) / 1000;

    var Minute = dis / 60 % 60;
    Minute = Math.floor(Minute);

    var min = document.getElementById("Minute");
    min.innerHTML = Minute;

    if (Minute < 10) {
        min.innerHTML = '0' + Minute;
    } else {
        min.innerHTML = Minute;
    }
}
function getSec() {
    var begin = new Date();
    var end = new Date(2021, 8, 5);

    var time1 = begin.getTime();
    var time2 = end.getTime();

    var dis = (time2 - time1) / 1000;

    var Seconds = dis % 60;
    Seconds = Math.floor(Seconds);

    var sec = document.getElementById("Seconds");
    if (Seconds < 10) {
        sec.innerHTML = '0' + Seconds;
    } else {
        sec.innerHTML = Seconds;
    }
}

getDay();
getHour();
getMin();
getSec();
var id = setInterval(getDay, 1000);
var id = setInterval(getHour, 1000);
var id = setInterval(getMin, 1000);
var id = setInterval(getSec, 1000);