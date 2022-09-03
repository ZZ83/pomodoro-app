import { ele } from './elements.js'

let isSettingsVisible = false;
const main     = document.querySelector("main");
const overlay  = document.querySelector(".overlay");

export function toggleSettings() {
    if (isSettingsVisible) {
        overlay.style.display = "none";
        isSettingsVisible = false;
    } else {
        overlay.style.display = "block";
        isSettingsVisible = true;
    }
}

export function setInputsValues() {
    ele.minutesInputs[0].value = ele.pomodoro;
    ele.minutesInputs[1].value = ele.shortBreak;
    ele.minutesInputs[2].value = ele.longBreak;
}

main.addEventListener("click", (event) => {
    if(event.target.classList.contains("settings-btn")) {
        toggleSettings();
    }
    if(event.target.classList.contains("settings__close-btn")) {
        setInputsValues();
        toggleSettings();
    }
    if(event.target.classList.contains("overlay")) {
        if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
            setInputsValues();
            toggleSettings();
        }
    }
})