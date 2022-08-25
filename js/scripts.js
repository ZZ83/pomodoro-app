import { setInputsValues, toggleSettings, setMinutes }  from './helpers.js'
import { startTimer, stopTimer }      from './timer.js'
import { setFontsAndColors }          from './fonts&colors.js'
import { setActiveButton } from './cycles.js'
import { ele }                        from './elements.js'

// DOM elements
const main        = document.querySelector("main");
const minutes     = document.querySelector(".minutes");

main.addEventListener("click", (event) => {
    // Open settings
    if(event.target.classList.contains("settings-btn")) {
        toggleSettings();
    }
    // Close settings
    if(event.target.classList.contains("settings__close-btn")) {
        setInputsValues();
        toggleSettings();
    }
    // Close settings when over is clicked
    if(event.target.classList.contains("overlay")) {
        if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
            setInputsValues();
            toggleSettings();
        }
    }
})

minutes.addEventListener("click", (event) => { 
    setMinutes(event);
});


ele.timerButton.addEventListener("click", () => {
    if( ele.timerButton.firstElementChild.innerHTML === "start") {
        ele.timerButton.firstElementChild.innerHTML = "pause";
        startTimer();
    } else if (ele.timerButton.firstElementChild.innerHTML === "pause") {
        ele.timerButton.firstElementChild.innerHTML = "start";
        stopTimer();
    } else if (ele.timerButton.firstElementChild.innerHTML === "restart") {
        ele.timerButton.firstElementChild.innerHTML = "pause";
        ele.body.style.setProperty('--progress-bar-medium', 0);
        startTimer();
    }
})

ele.applyButton.addEventListener("click", () => {
    if(ele.timerIsRunning) {
        ele.timerButton.firstElementChild.innerHTML = "start";
        stopTimer();
    }
    ele.setTest();
    ele.resetProgressBar();
    ele.minutesInputs[0].value = ele.minutesInputs[0].value;
    ele.minutesInputs[1].value = ele.minutesInputs[1].value;
    ele.minutesInputs[2].value = ele.minutesInputs[2].value;
    ele.pomodoro   = parseInt(ele.minutesInputs[0].value);
    ele.shortBreak = parseInt(ele.minutesInputs[1].value);
    ele.longBreak  = parseInt(ele.minutesInputs[2].value);
    ele.min.innerHTML = ele.pomodoro;
    ele.sec.innerHTML = "00";
    ele.seconds = 59;
    ele.currentCycle = parseInt(ele.pomodoro);
    ele.minutes = ele.currentCycle;
    setActiveButton();
    toggleSettings(); 
})

setFontsAndColors();




 
