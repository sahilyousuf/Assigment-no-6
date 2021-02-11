var timer;
var minute = prompt("Enter to count")
var seconds = minute * 60
var textSec = "00"
var display = document.getElementById("display");
display.innerHTML = minute + ':00'

function start(){
    var statSec = 60
    timer = setInterval(function(){
        seconds--;
        if(statSec != 0)
            statSec--
        else
            statSec = 59

        if(statSec < 10)
            textSec = '0' + statSec
        else 
            textSec = statSec

        display.innerHTML = Math.floor(seconds/60) + ':' + textSec

        if(seconds == 0)
            clearInterval(timer)
    }, 1000)
}

function stop(){
    clearInterval(timer)
}

function cancel(){
    console.log("asdasd");
    clearInterval(timer)
    display.innerHTML = minute + ':00'
    seconds = minute * 60
}