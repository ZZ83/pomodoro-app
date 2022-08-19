import {addClassTo, addLeadingZeros, removeClassFromList, setMinutes} from './helpers.js'
import {setFontsAndColors} from './fonts&colors.js'
import {ele} from './elements.js'

/***************************************************** 
******************** SET VARIABLES ******************* 
*****************************************************/
let pomodoro   = 25;
let shortBreak = 5;
let longBreak  = 15;

let timerIsRunning = false;
let isSettingsVisible = false;


/***************************************************** 
***************** SELECT DOM ELEMENTS **************** 
*****************************************************/
// Main page elements
const cycleButtons        = document.querySelectorAll(".cycle-btn");
const timerButton         = document.querySelector(".timer__btn");
const openSettingsButton  = document.querySelector(".settings-btn");

// Settings component elements
const closeSettingsButton = document.querySelector(".settings__close-btn");
const upButtons           = document.querySelectorAll(".set-minutes__up");
const downButtons         = document.querySelectorAll(".set-minutes__down");



const overlay      = document.querySelector(".overlay");
const applyButton  = document.querySelector(".apply-btn");

// Timer minutes and seconds elements
const min         = document.querySelector(".time__min");
const sec         = document.querySelector(".time__sec");


const body          = document.querySelector("body");

const minutesInputs = document.querySelectorAll(".set-minutes__input");


/***************************************************** 
********************** FUNTIONS ********************** 
*****************************************************/
function toggleSettings() {
    if (isSettingsVisible) {
        overlay.style.display = "none";
        isSettingsVisible = false;
    } else {
        overlay.style.display = "block";
        isSettingsVisible = true;
    }
}


/***************************************************** 
************ CYCLE BUTTONS EVENT LISTENER ************ 
*****************************************************/
cycleButtons.forEach(element => {
    element.addEventListener("click", () => {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(element, "cycle-btn--active");
        if (element.innerHTML === "pomodoro") {
            setMinutes(pomodoro, min);
            minutes = pomodoro;
            sec.innerHTML = "00";
        } else if (element.innerHTML === "short break") {
            setMinutes(shortBreak, min);
            minutes = shortBreak;
            sec.innerHTML = "00";
        } else if (element.innerHTML === "long break") {
            setMinutes(longBreak, min);
            minutes = longBreak;
            sec.innerHTML = "00";
        }
    })  
})


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


/***************************************************** 
********** OPEN SETTINGS BUTTON EVENT LISTENER *******
*****************************************************/
openSettingsButton.addEventListener("click", () => {
    toggleSettings();
})


/***************************************************** 
********* CLOSE SETTINGS BUTTON EVENT LISTENER *******
*****************************************************/
closeSettingsButton.addEventListener("click", () => {
    toggleSettings();
})


/***************************************************** 
********* UP AND DOWN BUTTONS EVENT LISTENER *********
*****************************************************/
upButtons.forEach( (element, index) => {
    element.addEventListener("click", () => {
        if(index === 0) {
            if(minutesInputs[0].value !== "90") {
                pomodoro ++;
                minutesInputs[0].value = pomodoro;
            }
        }
        if(index === 1) {
            if(minutesInputs[1].value !== "90") {
                shortBreak ++;
                minutesInputs[1].value = shortBreak;
            }
        }
        if(index === 2) {
            if(minutesInputs[2].value !== "90") {
                longBreak ++;
                minutesInputs[2].value = longBreak;
            }
        }
    })  
})

downButtons.forEach( (element, index) => {
    element.addEventListener("click", () => {
        if(index === 0) {
            if(minutesInputs[0].value !== "1") {
                pomodoro --;
                minutesInputs[0].value = pomodoro;
            }
        }
        if(index === 1) {
            if(minutesInputs[1].value !== "1") {
                shortBreak --;
                minutesInputs[1].value = shortBreak;
            }
        }
        if(index === 2) {
            if(minutesInputs[2].value !== "1") {
                longBreak --;
                minutesInputs[2].value = longBreak;
            }
        }
    })
})


/***************************************************** 
******** FONT AND COLOR BUTTONS EVENT LISTENER ******* 
*****************************************************/
setFontsAndColors();

/***************************************************** 
**************** OVERLAY EVENT LISTENER ************** 
*****************************************************/
overlay.addEventListener("click", (event) => {
    if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
        toggleSettings();
    }
})


/***************************************************** 
************* APPLY BUTTON EVENT LISTENER ************ 
*****************************************************/
applyButton.addEventListener("click", () => {
    body.style.setProperty('--theme', ele.color);
    body.style.setProperty('--font-family-primary', ele.font);
    toggleSettings();
})




