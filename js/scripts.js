import {addClassTo, addLeadingZeros, removeClassFromList, setMinute} from './helpers.js'
import { setFontsAndColors } from './fonts&colors.js'
import { ele } from './elements.js'
import { setMinutes } from './set_minutes.js'
import { setCycles } from './cycles.js'

/***************************************************** 
******************** SET VARIABLES ******************* 
*****************************************************/
let timerIsRunning = false;
let isSettingsVisible = false;

/*************** SELECT DOM ELEMENTS ************/
const min          = document.querySelector(".time__min");
const sec          = document.querySelector(".time__sec");
const timerButton  = document.querySelector(".timer__btn");


function toggleSettings() {
    if (isSettingsVisible) {
        ele.overlay.style.display = "none";
        isSettingsVisible = false;
    } else {
        ele.overlay.style.display = "block";
        isSettingsVisible = true;
    }
}


/***************************************************** 
************* TIMER BUTTON EVENT LISTENER ************ 
*****************************************************/
let timer;
let seconds = 10;
let minutes = 0;

function toggleTimer(time) {
    if(timerIsRunning === false) {
        timerIsRunning = true;
        timer = setInterval(function() { 
            if (seconds < 10) {
                seconds = addLeadingZeros(seconds);
            }
            if (minutes < 10) {
                minutes = addLeadingZeros(minutes);
            }
            min.innerHTML = minutes.toString();
            sec.innerHTML = seconds.toString();
            minutes = parseFloat(minutes);
            if (seconds === "00" && minutes == "00" ) {
                timerButton.firstElementChild.innerHTML = "RESTART";
                clearInterval(timer);
            }
            if (seconds === "00") {
                seconds = 60;
                minutes --;
            }
            seconds --;
        }, 1000);
    } else {
        clearInterval(timer);
        timerIsRunning = false;
    }
}

timerButton.addEventListener("click", () => {
    if( timerButton.firstElementChild.innerHTML === "start") {
        timerButton.firstElementChild.innerHTML = "pause";
        toggleTimer();
    } else if (timerButton.firstElementChild.innerHTML === "pause") {
        timerButton.firstElementChild.innerHTML = "start";
        toggleTimer();
        console.log("Start")
    } else if (timerButton.firstElementChild.innerHTML === "restart") {

    }
})



ele.openSettingsButton.addEventListener("click", () => {
    toggleSettings();
})

ele.closeSettingsButton.addEventListener("click", () => {
    toggleSettings();
})

ele.applyButton.addEventListener("click", () => {
    ele.body.style.setProperty('--theme', ele.color);
    ele.body.style.setProperty('--font-family-primary', ele.font);
    toggleSettings();
})

ele.overlay.addEventListener("click", (event) => {
    if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
        toggleSettings();
    }
})

setCycles();
setMinutes();
setFontsAndColors();


