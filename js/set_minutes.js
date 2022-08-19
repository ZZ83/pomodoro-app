import { ele } from "./elements.js";

const upButtons     = document.querySelectorAll(".set-minutes__up");
const downButtons   = document.querySelectorAll(".set-minutes__down");
const minutesInputs = document.querySelectorAll(".set-minutes__input");

export function setMinutes() {
    upButtons.forEach( (element, index) => {
        element.addEventListener("click", () => {
            if(index === 0) {
                if(minutesInputs[0].value !== "90") {
                    ele.pomodoro ++;
                    minutesInputs[0].value = ele.pomodoro;
                }
            }
            if(index === 1) {
                if(minutesInputs[1].value !== "90") {
                    ele.shortBreak ++;
                    minutesInputs[1].value = ele.shortBreak;
                }
            }
            if(index === 2) {
                if(minutesInputs[2].value !== "90") {
                    ele.longBreak ++;
                    minutesInputs[2].value = ele.longBreak;
                }
            }
        })  
    })
    downButtons.forEach( (element, index) => {
        element.addEventListener("click", () => {
            if(index === 0) {
                if(minutesInputs[0].value !== "1") {
                    ele.pomodoro --;
                    minutesInputs[0].value = ele.pomodoro;
                }
            }
            if(index === 1) {
                if(minutesInputs[1].value !== "1") {
                    ele.shortBreak --;
                    minutesInputs[1].value = ele.shortBreak;
                }
            }
            if(index === 2) {
                if(minutesInputs[2].value !== "1") {
                    ele.longBreak --;
                    minutesInputs[2].value = ele.longBreak;
                }
            }
        })
    })
}