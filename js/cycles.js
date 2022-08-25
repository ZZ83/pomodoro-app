import {addClassTo, removeClassFromList, setMinute} from './helpers.js'
import { ele } from './elements.js'
import { stopTimer } from './timer.js';

export function setActiveButton() {
    removeClassFromList(cycleButtons, "cycle-btn--active");
    addClassTo(cycleButtons[0], "cycle-btn--active");
}

const cycleButtons = document.querySelectorAll(".cycle-btn");
const cycleSection = document.querySelector(".cycle-section");
function test(para) {
    ele.timerButton.firstElementChild.innerHTML = "start";
    setMinute(para, ele.min);
    ele.minutes = para;
    ele.sec.innerHTML = "00";
    ele.seconds = 59;
    ele.currentCycle = parseInt(para);
    ele.resetProgressBar();
    stopTimer();
}

cycleSection.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON")  {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(event.target, "cycle-btn--active");
        if (event.target.innerHTML === "pomodoro") {
            test(ele.pomodoro);
        } else if (event.target.innerHTML === "short break") {
            test(ele.shortBreak);
        } else if (event.target.innerHTML === "long break") {
            test(ele.longBreak);
        }
    }
})