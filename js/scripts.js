import {addClassTo, removeClassFromList, removeClassFromListC, setMinutes} from './helpers.js'

/***************************************************** 
******************** SET VARIABLES ******************* 
*****************************************************/
let font  = "";
let color = "";

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

const buttons      = [...document.querySelectorAll(".btn-wrapper")];  
const fontButtons  = buttons.splice(0, 3);
const colorButtons = buttons.splice(-3);

const overlay      = document.querySelector(".overlay");
const applyButton  = document.querySelector(".apply-btn");

// Timer minutes and seconds elements
const min         = document.querySelector(".time__min");
const sec         = document.querySelector(".time__sec");

const h1            = document.querySelector(".timer__time");
const body          = document.querySelector("body");
const colon         = document.querySelector(".timer__colon");
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


/***************************************************** 
******** FONT AND COLOR BUTTONS EVENT LISTENER ******* 
*****************************************************/
fontButtons.forEach(element => {
    element.addEventListener("click", () => {
        if( element.firstElementChild.classList.contains("btn--kumbh") ) {
            font = "var(--font-family-kumbh-sans)";
            removeClassFromListC(fontButtons, "btn--active")
            addClassTo(element.firstElementChild, "btn--active")
            h1.style.fontWeight = "700";
            colon.style.margin = "0 5px";
            body.style.setProperty('--font-spacing', "-3px");
        }
        if( element.firstElementChild.classList.contains("btn--roboto") ) {
            font = " var(--font-family-roboto-slab)";
            removeClassFromListC(fontButtons, "btn--active")
            addClassTo(element.firstElementChild, "btn--active")
            h1.style.fontWeight = "700";
            colon.style.margin = "4px 0 0";
            body.style.setProperty('--font-spacing', 0);
        }
        if( element.firstElementChild.classList.contains("btn--space") ) {
            font = "var(--font-family-space-mono)";
            removeClassFromListC(fontButtons, "btn--active")
            addClassTo(element.firstElementChild, "btn--active")
            h1.style.fontWeight = "400";
            colon.style.margin= "4px -12px 0";
            body.style.setProperty('--font-spacing', 0);
        }
    })  
})

colorButtons.forEach(element => {
    element.addEventListener("click", () => {
        if( element.firstElementChild.classList.contains("btn--color-froly") ) {
            color = "var(--froly)";
            colorButtons.forEach(element => {
               element.firstElementChild.innerHTML = "";
            })
            element.firstElementChild.innerHTML = "&check;";
        }
        if( element.firstElementChild.classList.contains("btn--color-malibu") ) {
            color = "var(--malibu)";
            colorButtons.forEach(element => {
                element.firstElementChild.innerHTML = "";
             })
             element.firstElementChild.innerHTML = "&check;";
        }
        if( element.firstElementChild.classList.contains("btn--color-heliotrope") ) {
            color = "var(--heliotrope)";
            colorButtons.forEach(element => {
                element.firstElementChild.innerHTML = "";
             })
             element.firstElementChild.innerHTML = "&check;";
        }
    })  
})


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
    body.style.setProperty('--theme', color);
    body.style.setProperty('--font-family-primary', font);
    toggleSettings();
})





