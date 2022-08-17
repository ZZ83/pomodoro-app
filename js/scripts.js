import {addClassTo, removeClassFrom, removeClassFromList} from './helpers.js'

/***************************************************** 
******************** SET VARIABLES ******************* 
*****************************************************/


/***************************************************** 
***************** SELECT DOM ELEMENTS **************** 
*****************************************************/

// Main page elements
const cycleButtons       = document.querySelectorAll(".cycle-btn");
const timerButton        = document.querySelector(".timer__btn");
const settingButton      = document.querySelector(".settings-btn");

// Settings component elements
const overlayCloseButton = document.querySelector(".settings__close-btn");
const upButtons          = document.querySelectorAll(".set-minutes__up");
const downButtons        = document.querySelectorAll(".set-minutes__down");

const buttons      = [...document.querySelectorAll(".btn-wrapper")];  
const fontButtons  = buttons.splice(0, 3);
const colorButtons = buttons.splice(-3);

const applyButton  = document.querySelector(".apply-btn");


/***************************************************** 
************ CYCLE BUTTONS EVENT LISTENER ************ 
*****************************************************/
cycleButtons.forEach(element => {
    element.addEventListener("click", () => {
        removeClassFromList(cycleButtons, "cycle-btn--active");
        addClassTo(element, "cycle-btn--active")
    })  
})

/***************************************************** 
************* TIMER BUTTON EVENT LISTENER ************ 
*****************************************************/
timerButton.addEventListener("click", () => {
   
})

/***************************************************** 
************ SETTINGS BUTTON EVENT LISTENER ********** 
*****************************************************/
settingButton.addEventListener("click", () => {
   
})

/***************************************************** 
********* OVERLAY CLOSE BUTTON EVENT LISTENER ********
*****************************************************/
overlayCloseButton.addEventListener("click", () => {
   
})

/***************************************************** 
********* UP AND DOWN BUTTONS EVENT LISTENER *********
*****************************************************/
upButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})
downButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})

/***************************************************** 
******** FONT AND COLOR BUTTONS EVENT LISTENER ******* 
*****************************************************/
fontButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})
colorButtons.forEach(element => {
    element.addEventListener("click", () => {
        
    })  
})

/***************************************************** 
************* APPLY BUTTON EVENT LISTENER ************ 
*****************************************************/
applyButton.addEventListener("click", () => {
   
})