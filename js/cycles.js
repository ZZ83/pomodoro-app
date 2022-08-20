import {addClassTo, removeClassFromList, setMinute} from './helpers.js'
import { ele } from './elements.js'
import { stopTimer } from './timer.js';

export function setCycles() {
    ele.cycleButtons.forEach(element => {
        element.addEventListener("click", () => {
            removeClassFromList(ele.cycleButtons, "cycle-btn--active");
            addClassTo(element, "cycle-btn--active");
            if (element.innerHTML === "pomodoro") {
                ele.timerButton.firstElementChild.innerHTML = "start";
                setMinute(ele.pomodoro, ele.min);
                ele.minutes = ele.pomodoro;
                ele.sec.innerHTML = "00";
                ele.currentCycle = parseInt(ele.pomodoro);
                stopTimer();
            } else if (element.innerHTML === "short break") {
                ele.timerButton.firstElementChild.innerHTML = "start";
                setMinute(ele.shortBreak, ele.min);
                ele.minutes = ele.shortBreak;
                ele.sec.innerHTML = "00";
                ele.currentCycle = parseInt(ele.shortBreak);
                stopTimer();
            } else if (element.innerHTML === "long break") {
                ele.timerButton.firstElementChild.innerHTML = "start";
                setMinute(ele.longBreak, ele.min);
                ele.minutes = ele.longBreak;
                ele.sec.innerHTML = "00";
                ele.currentCycle = parseInt(ele.longBreak);
                stopTimer();
            }
        })  
    })
}
