export const ele = {
    /*************************** VARIABLES **************************/
    pomodoro  : 25,
    shortBreak: 5,
    longBreak : 15,
    timerIsRunning: false,
    currentCycle: 25,
    seconds: 59,
    minutes: 25,
    timer: null,
    /*********************** ELEMENTS ***********************/
    timerButton:   document.querySelector(".timer__btn"),
    body:          document.querySelector("body"),
    minutesInputs: document.querySelectorAll(".set-minutes__input"),
    /*********************** METHODS ***********************/
    resetProgressBar: function() {
        this.body.style.setProperty('--progress-bar-small',  0);
        this.body.style.setProperty('--progress-bar-medium', 0);
    },
}


   













