const minutes = document.querySelector(".minutes");

function setMinutes(event) {
    if(event.target.tagName === "BUTTON")  {
        const input = event.target.parentElement.previousElementSibling;
        if( event.target.classList.contains("set-minutes__up") && input.value !== "90" ) {
            parseInt(input.value ++);
        }
        if( event.target.classList.contains("set-minutes__down") && input.value !== "1" ) {
            parseInt(input.value --);
        } 
    }
}

minutes.addEventListener("click", event => setMinutes(event));
