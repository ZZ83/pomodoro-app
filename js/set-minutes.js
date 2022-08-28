export const minutes = document.querySelector(".minutes");

minutes.addEventListener("click", (event) => { 
    if(event.target.tagName === "BUTTON")  {
        const input = event.target.parentElement.previousElementSibling;
        if( event.target.classList.contains("set-minutes__up") && input.value !== "90" ) {
            parseInt(input.value ++);
        }
        if( event.target.classList.contains("set-minutes__down") && input.value !== "1" ) {
            parseInt(input.value --);
        } 
    }
});