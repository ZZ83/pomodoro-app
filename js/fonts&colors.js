import {removeClassFromList, addClassTo} from './helpers.js'
import {ele} from './elements.js'

const h1           = document.querySelector(".timer__time");
const colon        = document.querySelector(".timer__colon");
const settings     = document.querySelector(".settings");
const fontButtons  = document.querySelectorAll(".btn--font")
const colorButtons = document.querySelectorAll('button[class*="btn--color"]');

function setColor(event, color) {
    ele.color = color;
    colorButtons.forEach(element => {
       element.innerHTML = "";
    })
    event.target.innerHTML = "&check;";
}

export function setFontsAndColors() {
    settings.addEventListener("click", (event) => {
        if( event.target.classList.contains("btn--kumbh") ) {
            ele.font = "var(--font-family-kumbh-sans)";
            removeClassFromList(fontButtons, "btn--active")
            addClassTo(event.target, "btn--active")
            h1.style.fontWeight = "700";
            colon.style.margin = "0 5px";
            ele.body.style.setProperty('--font-spacing', "-3px");
        }
        if( event.target.classList.contains("btn--roboto") ) {
            ele.font = " var(--font-family-roboto-slab)";
            removeClassFromList(fontButtons, "btn--active")
            addClassTo(event.target, "btn--active")
            h1.style.fontWeight = "700";
            colon.style.margin = "4px 0 0";
            ele.body.style.setProperty('--font-spacing', 0);
        }
        if( event.target.classList.contains("btn--space") ) {
            ele.font = "var(--font-family-space-mono)";
            removeClassFromList(fontButtons, "btn--active")
            addClassTo(event.target, "btn--active")
            h1.style.fontWeight = "400";
            colon.style.margin= "4px -12px 0";
            ele.body.style.setProperty('--font-spacing', 0);
        }
        if(event.target.classList.contains("btn--color-froly") ) {
            setColor(event, "var(--froly)");
        }
        if( event.target.classList.contains("btn--color-malibu") ) {
            setColor(event, "var(--malibu)");
        }
        if( event.target.classList.contains("btn--color-heliotrope") ) {
            setColor(event, "var(--heliotrope)");
        }
    })
}
