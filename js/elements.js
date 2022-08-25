export const ele = {
    /*************************** VARIABLES **************************/
    font:  "",
    color: "",
    pomodoro  : 25,
    shortBreak: 5,
    longBreak : 15,
    timerIsRunning: false,
    isSettingsVisible: false,
    currentCycle: 25,
    seconds: 59,
    minutes: 25,
    timer: null,
    /*********************** BUTTONS ELEMENTS ***********************/
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
    /*********************** METHODS ***********************/
    setTest: function() {
        this.body.style.setProperty('--theme', this.color);
        this.body.style.setProperty('--font-family-primary', this.font);
    },
    resetProgressBar: function() {
        this.body.style.setProperty('--progress-bar-small',  0);
        this.body.style.setProperty('--progress-bar-medium', 0);
    }
}


   













