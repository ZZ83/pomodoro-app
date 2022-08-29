import { ele } from './elements.js'

export function addClassTo(element, klass) {
    element.classList.add(klass);
}

export function removeClassFrom(element, klass) {
    element.classList.remove(klass);
}

export function removeClassFromList(list, klass) {
    list.forEach(item => {
        removeClassFrom(item, klass)
    })
};

export function addLeadingZeros(num) {
    if (num < 10) {
        return "0" + num.toString()
    } else {
        return num;
    }
}

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
