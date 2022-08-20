export const ele = {
    /*************************** VARIABLES **************************/
    font:  "",
    color: "",
    pomodoro  : 25,
    shortBreak: 5,
    longBreak : 15,
    timerIsRunning: false,
    isSettingsVisible: false,
    minutes: 25,
    timer: null,
    /*********************** BUTTONS ELEMENTS ***********************/
    cycleButtons:        document.querySelectorAll(".cycle-btn"),
    timerButton:         document.querySelector(".timer__btn"),
    openSettingsButton:  document.querySelector(".settings-btn"),
    closeSettingsButton: document.querySelector(".settings__close-btn"),
    applyButton:         document.querySelector(".apply-btn"),
    /*********************** STANDARD ELEMENTS ***********************/
    min:           document.querySelector(".time__min"),
    sec:           document.querySelector(".time__sec"),
    body:          document.querySelector("body"),
    overlay:       document.querySelector(".overlay"),
    minutesInputs: document.querySelectorAll(".set-minutes__input"),
}













