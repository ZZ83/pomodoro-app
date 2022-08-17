import {showOverlay, hideOverlay} from './overlay.js'

// //FUNCTIONS ------------------------------------------------------------------------
function addClassTo(element, klass) {
    element.classList.add(klass);
}

function removeClassFrom(element, klass) {
    element.classList.remove(klass);
}

function removeClassFromList(list, klass) {
    list.forEach(item => {
        removeClassFrom(item, klass)
    })
};

function removeClassFromListC(list, klass) {
    list.forEach(item => {
        removeClassFrom(item.firstElementChild, klass)
    })
};

const cycleButtons = document.querySelectorAll(".cycle-btn");
const cycleSection = document.querySelector(".cycle-section");
cycleSection.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(event.target, "cycle-btn--active")
    }
})








let isOverlayVisible = false;

const overlay            = document.querySelector(".overlay");
const settingButton      = document.querySelector(".settings-btn");
const overlayCloseButton = document.querySelector(".settings__close-btn");

function closeOverlayIfVisible() {
    if (isOverlayVisible) {
        hideOverlay();
        isOverlayVisible = false;
    }
}

settingButton.addEventListener("click", () => {
    showOverlay();
    isOverlayVisible = true;
})

overlay.addEventListener("click", (event) => {
    if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
        closeOverlayIfVisible();
    }
})

overlayCloseButton.addEventListener("click", () => {
   closeOverlayIfVisible();
})







































const applyButton = document.querySelector(".apply-btn");

/**************************************************************
    This block of code allows you to set 
    the font family and color theme of the web app.
***************************************************************/
let font  = "";
let color = "";
const body    = document.querySelector("body");

const buttons = [...document.querySelectorAll(".btn-wrapper")];  
const fontButtons  = buttons.splice(0, 3);
const colorButtons = buttons.splice(-3);
const h1 = document.querySelector(".timer__time");

const colon = document.querySelector(".timer__colon");

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
/**************************************************************
    This block of code allows you to set 
    the font family and color theme of the web app.
***************************************************************/


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















applyButton.addEventListener("click", () => {
    body.style.setProperty('--theme', color);
    body.style.setProperty('--font-family-primary', font);
    hideOverlay();
    // Take pomodoro value and convert it into a minute display





})



// let seconds = 59;
// let minutes = 90;

// const min         = document.querySelector(".time__min");
// const sec         = document.querySelector(".time__sec");
// const timerButton = document.querySelector(".timer__btn");

// const myInterval = setInterval(function() { 
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     min.innerHTML = minutes.toString();
//     sec.innerHTML = seconds.toString();
//     minutes = parseFloat(minutes);
//     if (seconds === "00" && minutes == "00" ) {
//         timerButton.firstElementChild.innerHTML = "RESTART";
       
//         clearInterval(myInterval);
        
//     }
//     if (seconds === "00") {
//         seconds = 59;
//         minutes --;
//     }
//     seconds --;
// }, 1000);