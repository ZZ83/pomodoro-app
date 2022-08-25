import {removeClassFromList, addClassTo} from './helpers.js'
import {ele} from './elements.js'

const h1           = document.querySelector(".timer__time");
const colon        = document.querySelector(".timer__colon");
const fontButtons  = document.querySelectorAll(".btn--font")
const colorButtons = document.querySelectorAll('button[class*="btn--color"]');

export function setFontsAndColors() {
    fontButtons.forEach(element => {
        element.addEventListener("click", () => {

            if( element.classList.contains("btn--kumbh") ) {
                ele.font = "var(--font-family-kumbh-sans)";
                removeClassFromList(fontButtons, "btn--active")
                addClassTo(element, "btn--active")
                h1.style.fontWeight = "700";
                colon.style.margin = "0 5px";
                ele.body.style.setProperty('--font-spacing', "-3px");
            }
            if( element.classList.contains("btn--roboto") ) {
                ele.font = " var(--font-family-roboto-slab)";
                removeClassFromList(fontButtons, "btn--active")
                addClassTo(element, "btn--active")
                h1.style.fontWeight = "700";
                colon.style.margin = "4px 0 0";
                ele.body.style.setProperty('--font-spacing', 0);
            }
            if( element.classList.contains("btn--space") ) {
                ele.font = "var(--font-family-space-mono)";
                removeClassFromList(fontButtons, "btn--active")
                addClassTo(element, "btn--active")
                h1.style.fontWeight = "400";
                colon.style.margin= "4px -12px 0";
                ele.body.style.setProperty('--font-spacing', 0);
            }
            
        })  
    })
    colorButtons.forEach(element => {
        element.addEventListener("click", () => {
            if( element.classList.contains("btn--color-froly") ) {
                ele.color = "var(--froly)";
                colorButtons.forEach(element => {
                   element.innerHTML = "";
                })
                element.innerHTML = "&check;";
            }
            if( element.classList.contains("btn--color-malibu") ) {
                ele.color = "var(--malibu)";
                colorButtons.forEach(element => {
                    element.innerHTML = "";
                 })
                 element.innerHTML = "&check;";
            }
            if( element.classList.contains("btn--color-heliotrope") ) {
                ele.color = "var(--heliotrope)";
                colorButtons.forEach(element => {
                    element.innerHTML = "";
                 })
                 element.innerHTML = "&check;";
            }
        })  
    })
}