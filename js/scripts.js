import { toggleSettings }        from './helpers.js'
import { startTimer, stopTimer } from './timer.js'
import { setFontsAndColors }     from './fonts&colors.js'
import { setMinutes }            from './set_minutes.js'
import { setCycles }             from './cycles.js'
import { ele }                   from './elements.js'

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
