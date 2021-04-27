console.log("WORKING")

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
        new Date().getMinutes() * 60 + 
        new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    
    var seconds = document.getElementById("seconds");
    var minutes = document.getElementById("minutes");
    var hour = document.getElementById("hour");
    
    var hourNum = ((((time / 60) / 60) % 12) * 2) * 15 + 180;
    var minutesNum = ((time/60) % 60) * 6 + 180;
    var secondsNum = (time % 60) * 6 + 180;


    seconds.style.transform = "rotate(" + secondsNum + "deg)";
    minutes.style.transform = "rotate(" + minutesNum + "deg)";
    hour.style.transform = "rotate(" + hourNum + "deg)"


}, 1000);