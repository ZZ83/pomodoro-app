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