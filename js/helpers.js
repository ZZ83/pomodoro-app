const overlay = document.querySelector(".overlay");

export function showOverlay() {
    overlay.style.display = "block";
}

export function hideOverlay() {
    overlay.style.display = "none";
}

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
    return "0" + num.toString()
}

export function setMinutes(minutes, element) {
    if (minutes < 10) {
        element.innerHTML = addLeadingZeros(minutes);
    } else {
        element.innerHTML = minutes;
    }
}