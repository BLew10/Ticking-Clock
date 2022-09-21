var secondHand = document.querySelector("#seconds")
var minuteHand = document.querySelector("#minutes")
var hourHand = document.querySelector("#hour");


function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}


setInterval(function () {
    var d = new Date(); //object of date()
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var hr_rotation = 30 * hr + min / 2; //converting current time
    var min_rotation = 6 * min;
    var sec_rotation = 6 * sec;
  
    secondHand.style.transform = `rotate(${sec_rotation + 180}deg)`;
    minuteHand.style.transform = `rotate(${min_rotation + 180}deg)`;
    hourHand.style.transform = `rotate(${hr_rotation + 180}deg)`;
}, 1000);


