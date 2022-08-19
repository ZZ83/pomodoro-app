const ele = {
    /*********************** BUTTONS ELEMENTS ***********************/
    cycleButtons:        document.querySelectorAll(".cycle-btn"),
    timerButton:         document.querySelector(".timer__btn"),
    openSettingsButton:  document.querySelector(".settings-btn"),
    closeSettingsButton: document.querySelector(".settings__close-btn"),
    upButtons:           document.querySelectorAll(".set-minutes__up"),
    downButtons:         document.querySelectorAll(".set-minutes__down"),
    applyButton:         document.querySelector(".apply-btn"),
    buttons: [...document.querySelectorAll(".btn-wrapper")],
    fontButtons:  buttons.splice(0, 3),
    colorButtons: buttons.splice(-3),
    /*********************** STANDARD ELEMENTS ***********************/
    h1:            document.querySelector(".timer__time"),
    min:           document.querySelector(".time__min"),
    sec:           document.querySelector(".time__sec"),
    body:          document.querySelector("body"),
    colon:         document.querySelector(".timer__colon"),
    overlay:       document.querySelector(".overlay"),
    minutesInputs: document.querySelectorAll(".set-minutes__input"),
}













