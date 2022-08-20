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

export function removeClassFromListC(list, klass) {
    list.forEach(item => {
        removeClassFrom(item.firstElementChild, klass)
    })
};

export function addLeadingZeros(num) {
    return "0" + num.toString()
}

export function setMinute(minutes, element) {
    if (minutes < 10) {
        element.innerHTML = addLeadingZeros(minutes);
    } else {
        element.innerHTML = minutes;
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
