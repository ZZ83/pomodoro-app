import {hideOverlay} from './helpers.js'






























































let pomodoro   = 25;
let shortBreak = 5;
let longBreak  = 15;

const upButtons     = document.querySelectorAll(".set-minutes__up");
const downButtons   = document.querySelectorAll(".set-minutes__down");
const minutesInputs = document.querySelectorAll(".set-minutes__input");

upButtons.forEach( (element, index) => {
    element.addEventListener("click", () => {

        if(index === 0) {
            pomodoro ++;
            console.log("pomodoro:", pomodoro)
            minutesInputs[0].value = pomodoro;
        }
        if(index === 1) {
            shortBreak ++;
            console.log("Short Break:", shortBreak)
            minutesInputs[1].value = shortBreak;
        }
        if(index === 2) {
            longBreak ++;
            console.log("Long Break:", longBreak)
            minutesInputs[2].value = longBreak;
        }
       
    })
})

downButtons.forEach( (element, index) => {
    element.addEventListener("click", () => {
        if(index === 0) {
            pomodoro --;
            console.log("pomodoro:", pomodoro)
            minutesInputs[0].value = pomodoro;
        }
        if(index === 1) {
            shortBreak --;
            console.log("Short Break:", shortBreak)
            minutesInputs[1].value = shortBreak;
        }
        if(index === 2) {
            longBreak --;
            console.log("Long Break:", longBreak)
            minutesInputs[2].value = longBreak;
        }
    })
})













const applyButton = document.querySelector(".apply-btn");

applyButton.addEventListener("click", () => {
    body.style.setProperty('--theme', color);
    body.style.setProperty('--font-family-primary', font);
    hideOverlay();
})



let seconds = 59;
let minutes = 90;

const min         = document.querySelector(".time__min");
const sec         = document.querySelector(".time__sec");
const timerButton = document.querySelector(".timer__btn");

const myInterval = setInterval(function() { 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    min.innerHTML = minutes.toString();
    sec.innerHTML = seconds.toString();
    minutes = parseFloat(minutes);
    if (seconds === "00" && minutes == "00" ) {
        timerButton.firstElementChild.innerHTML = "RESTART";
       
        clearInterval(myInterval);
        
    }
    if (seconds === "00") {
        seconds = 59;
        minutes --;
    }
    seconds --;
}, 1000);




























