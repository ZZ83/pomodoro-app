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


