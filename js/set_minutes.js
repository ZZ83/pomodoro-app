import { ele } from "./elements.js";

const upButtons     = document.querySelectorAll(".set-minutes__up");
const downButtons   = document.querySelectorAll(".set-minutes__down");
const minutesInputs = document.querySelectorAll(".set-minutes__input");

export function setMinutes() {
    upButtons.forEach( (element, index) => {
        element.addEventListener("click", () => {
            if(index === 0) {
                if(minutesInputs[index].value !== "90") {
                    let number = parseInt(minutesInputs[index].value);
                    number ++;
                    minutesInputs[index].value =  number;
                }
            }
            if(index === 1) {
                if(minutesInputs[index].value !== "90") {
                    let number = parseInt(minutesInputs[index].value);
                    number ++;
                    minutesInputs[index].value =  number;
                }
            }
            if(index === 2) {
                if(minutesInputs[index].value !== "90") {
                    let number = parseInt(minutesInputs[index].value);
                    number ++;
                    minutesInputs[index].value =  number;
                }
            }
        })  
    })
    downButtons.forEach( (element, index) => {
        element.addEventListener("click", () => {
            if(index === 0) {
                if(minutesInputs[index].value !== "1") {
                    let number = parseInt(minutesInputs[index].value);
                    number --;
                    minutesInputs[index].value =  number;
                }
            }
            if(index === 1) {
                if(minutesInputs[index].value !== "1") {
                    let number = parseInt(minutesInputs[index].value);
                    number --;
                    minutesInputs[index].value =  number;
                }
            }
            if(index === 2) {
                if(minutesInputs[index].value !== "1") {
                    let number = parseInt(minutesInputs[index].value);
                    number --;
                    minutesInputs[index].value =  number;
                }
            }
        })
    })
}