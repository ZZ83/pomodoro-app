import {showOverlay, hideOverlay} from './overlay.js'

// //FUNCTIONS ------------------------------------------------------------------------
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







































const applyButton = document.querySelector(".apply-btn");

let color = "";

const body    = document.querySelector("body");
const buttons = document.querySelectorAll(".btn-wrapper");

buttons.forEach(element => {
    element.addEventListener("click", (event) => {

        if( element.firstElementChild.classList.contains("btn--color-froly") ) {
            color = "var(--froly)";
        }
        if( element.firstElementChild.classList.contains("btn--color-malibu") ) {
            color = "var(--malibu)";
        }
        if( element.firstElementChild.classList.contains("btn--color-heliotrope") ) {
            color = "var(--heliotrope)";
        }
        console.log(element.firstElementChild);
    })
})

applyButton.addEventListener("click", () => {
    body.style.setProperty('--theme', color);
    hideOverlay();
})