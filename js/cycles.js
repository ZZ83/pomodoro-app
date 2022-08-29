import {addClassTo, removeClassFromList} from './helpers.js'
import { stopTimer, resetTimersText}     from './timer.js';
import { ele }                           from './elements.js'

const cycleButtons = document.querySelectorAll(".cycle-btn");
const cycleSection = document.querySelector(".cycle-section");

export function setActiveButton() {
    removeClassFromList(cycleButtons, "cycle-btn--active");
    addClassTo(cycleButtons[0], "cycle-btn--active");
}

function setCycle(cycle) {
    ele.timerButton.innerHTML = "start";
    ele.minutes = cycle;
    ele.seconds = 59;
    ele.currentCycle = parseInt(cycle);
    ele.resetProgressBar();
    resetTimersText(cycle)
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