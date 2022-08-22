import { addClassTo, removeClassFromList, setInputs, toggleSettings } from './helpers.js'
import { startTimer, stopTimer }     from './timer.js'
import { setFontsAndColors }         from './fonts&colors.js'
import { setMinutes }                from './set_minutes.js'
import { setCycles }                 from './cycles.js'
import { ele }                       from './elements.js'

ele.timerButton.addEventListener("click", () => {
    if( ele.timerButton.firstElementChild.innerHTML === "start") {
        ele.timerButton.firstElementChild.innerHTML = "pause";
        startTimer();
    } else if (ele.timerButton.firstElementChild.innerHTML === "pause") {
        ele.timerButton.firstElementChild.innerHTML = "start";
        stopTimer();
    } else if (ele.timerButton.firstElementChild.innerHTML === "restart") {
        ele.timerButton.firstElementChild.innerHTML = "pause";
        startTimer();
    }
})

ele.openSettingsButton.addEventListener("click", () => {
    toggleSettings();
})

ele.closeSettingsButton.addEventListener("click", () => {
    setInputs();
    toggleSettings();
})

ele.applyButton.addEventListener("click", () => {
    if(ele.timerIsRunning) {
        ele.timerButton.firstElementChild.innerHTML = "start";
        
        stopTimer();
    }
    ele.body.style.setProperty('--theme', ele.color);
    ele.body.style.setProperty('--font-family-primary', ele.font);

    ele.minutesInputs[0].value = ele.minutesInputs[0].value;
    ele.minutesInputs[1].value = ele.minutesInputs[1].value;
    ele.minutesInputs[2].value = ele.minutesInputs[2].value;

    ele.pomodoro   = parseInt(ele.minutesInputs[0].value);
    ele.shortBreak = parseInt(ele.minutesInputs[1].value);
    ele.longBreak  = parseInt(ele.minutesInputs[2].value);

    ele.minutes = ele.pomodoro;
    removeClassFromList(ele.cycleButtons, "cycle-btn--active");
    addClassTo(ele.cycleButtons[0], "cycle-btn--active");
    toggleSettings(); 
})

ele.overlay.addEventListener("click", (event) => {
    if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
        setInputs();
        toggleSettings();
    }
})

setCycles();
setMinutes();
setFontsAndColors();
