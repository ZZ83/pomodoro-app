import {addClassTo, removeClassFromList, setMinutes} from './helpers.js'

/***************************************************** 
******************** SET VARIABLES ******************* 
*****************************************************/
let pomodoro   = 25;
let shortBreak = 5;
let longBreak  = 15;

let timerIsRunning = false;


/***************************************************** 
***************** SELECT DOM ELEMENTS **************** 
*****************************************************/

// Main page elements
const cycleButtons       = document.querySelectorAll(".cycle-btn");
const timerButton        = document.querySelector(".timer__btn");
const settingButton      = document.querySelector(".settings-btn");

// Settings component elements
const overlayCloseButton = document.querySelector(".settings__close-btn");
const upButtons          = document.querySelectorAll(".set-minutes__up");
const downButtons        = document.querySelectorAll(".set-minutes__down");

const buttons      = [...document.querySelectorAll(".btn-wrapper")];  
const fontButtons  = buttons.splice(0, 3);
const colorButtons = buttons.splice(-3);

const applyButton  = document.querySelector(".apply-btn");

// Timer minutes and seconds elements
const min         = document.querySelector(".time__min");
const sec         = document.querySelector(".time__sec");







/***************************************************** 
************ CYCLE BUTTONS EVENT LISTENER ************ 
*****************************************************/
cycleButtons.forEach(element => {
    element.addEventListener("click", () => {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(element, "cycle-btn--active");
        if (element.innerHTML === "pomodoro") {
            setMinutes(pomodoro, min);
        } else if (element.innerHTML === "short break") {
            setMinutes(shortBreak, min);
        } else if (element.innerHTML === "long break") {
            setMinutes(longBreak, min);
        }
    })  
})

/***************************************************** 
************* TIMER BUTTON EVENT LISTENER ************ 
*****************************************************/
timerButton.addEventListener("click", () => {
    if (timerIsRunning === false) {
        timerButton.firstElementChild.innerHTML = "pause";
        timerIsRunning = true;
    } else if (timerIsRunning === true) {
        timerButton.firstElementChild.innerHTML = "start";
        timerIsRunning = false;
    }
})

/***************************************************** 
************ SETTINGS BUTTON EVENT LISTENER ********** 
*****************************************************/
settingButton.addEventListener("click", () => {
   
})

/***************************************************** 
********* OVERLAY CLOSE BUTTON EVENT LISTENER ********
*****************************************************/
overlayCloseButton.addEventListener("click", () => {
   
})

/***************************************************** 
********* UP AND DOWN BUTTONS EVENT LISTENER *********
*****************************************************/
upButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})
downButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})

/***************************************************** 
******** FONT AND COLOR BUTTONS EVENT LISTENER ******* 
*****************************************************/
fontButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})
colorButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})

/***************************************************** 
************* APPLY BUTTON EVENT LISTENER ************ 
*****************************************************/
applyButton.addEventListener("click", () => {
   
})