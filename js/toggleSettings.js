import { ele } from './elements.js'

const main = document.querySelector("main");

export function toggleSettings() {
    if (ele.isSettingsVisible) {
        ele.overlay.style.display = "none";
        ele.isSettingsVisible = false;
    } else {
        ele.overlay.style.display = "block";
        ele.isSettingsVisible = true;
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