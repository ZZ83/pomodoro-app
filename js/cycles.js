import {addClassTo, removeClassFromList, addLeadingZeros} from './helpers.js'
import { ele } from './elements.js'
import { stopTimer } from './timer.js';

const cycleButtons = document.querySelectorAll(".cycle-btn");
const cycleSection = document.querySelector(".cycle-section");

export function setActiveButton() {
    removeClassFromList(cycleButtons, "cycle-btn--active");
    addClassTo(cycleButtons[0], "cycle-btn--active");
}

function setCycle(cycle) {
    ele.timerButton.innerHTML = "start";
    ele.min.innerHTML = addLeadingZeros(cycle);
    ele.minutes = cycle;
    ele.sec.innerHTML = "00";
    ele.seconds = 59;
    ele.currentCycle = parseInt(cycle);
    ele.resetProgressBar();
    stopTimer();
}

cycleSection.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON")  {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(event.target, "cycle-btn--active");
        if (event.target.innerHTML === "pomodoro") {
            setCycle(ele.pomodoro);
        } else if (event.target.innerHTML === "short break") {
            setCycle(ele.shortBreak);
        } else if (event.target.innerHTML === "long break") {
            setCycle(ele.longBreak);
        }
    }
})