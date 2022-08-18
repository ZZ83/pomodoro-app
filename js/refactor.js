const applyButton = document.querySelector(".apply-btn");

applyButton.addEventListener("click", () => {
    body.style.setProperty('--theme', color);
    body.style.setProperty('--font-family-primary', font);
})



let seconds = 59;
let minutes = 90;

const min         = document.querySelector(".time__min");
const sec         = document.querySelector(".time__sec");
const timerButton = document.querySelector(".timer__btn");

const myInterval = setInterval(function() { 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    min.innerHTML = minutes.toString();
    sec.innerHTML = seconds.toString();
    minutes = parseFloat(minutes);
    if (seconds === "00" && minutes == "00" ) {
        timerButton.firstElementChild.innerHTML = "RESTART";
       
        clearInterval(myInterval);
        
    }
    if (seconds === "00") {
        seconds = 59;
        minutes --;
    }
    seconds --;
}, 1000);




























