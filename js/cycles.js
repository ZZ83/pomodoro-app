import {addClassTo, removeClassFromList, setMinute} from './helpers.js'
import { ele } from './elements.js'

export function setCycles() {
    ele.cycleButtons.forEach(element => {
        element.addEventListener("click", () => {
            removeClassFromList(ele.cycleButtons, "cycle-btn--active");
            addClassTo(element, "cycle-btn--active");
            if (element.innerHTML === "pomodoro") {
                setMinute(ele.pomodoro, ele.min);
                ele.minutes = ele.pomodoro;
                ele.sec.innerHTML = "00";
            } else if (element.innerHTML === "short break") {
                setMinute(ele.shortBreak, ele.min);
                ele.minutes = ele.shortBreak;
                ele.sec.innerHTML = "00";
            } else if (element.innerHTML === "long break") {
                setMinute(ele.longBreak, ele.min);
                ele.minutes = ele.longBreak;
                ele.sec.innerHTML = "00";
            }
        })  
    })
}