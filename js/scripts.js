//FUNCTIONS ------------------------------------------------------------------------
function addClassTo(element, klass) {
    element.classList.add(klass);
}

function removeClassFrom(element, klass) {
    element.classList.remove(klass);
}

function removeClassFromList(list, klass) {
    list.forEach(item => {
        removeClassFrom(item, klass)
    })
};


const cycleButtons = document.querySelectorAll(".cycle-btn");
const cycleSection = document.querySelector(".cycle-section");

cycleSection.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(event.target, "cycle-btn--active")
    }
})