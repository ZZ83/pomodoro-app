import {showOverlay, hideOverlay} from './overlay.js'


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








let isOverlayVisible = false;

const overlay            = document.querySelector(".overlay");
const settingButton      = document.querySelector(".settings-btn");
const overlayCloseButton = document.querySelector(".settings__close-btn");

function closeOverlayIfVisible() {
    if (isOverlayVisible) {
        hideOverlay();
        isOverlayVisible = false;
    }
}

settingButton.addEventListener("click", () => {
    showOverlay();
    isOverlayVisible = true;
})

overlay.addEventListener("click", (event) => {
    if(event.target.tagName === "DIV" &&  event.target.className === "overlay") {
        closeOverlayIfVisible();
    }
})

overlayCloseButton.addEventListener("click", () => {
   closeOverlayIfVisible();
})

