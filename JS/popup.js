function myFunction() {
    let popup = document.getElementById("myPopup");
    let popupText = document.getElementById("popupText");

    
    let messages = ["Medarbejder tilgængelig", "5 minutters ventetid"];
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    popupText.textContent = randomMessage;

    popup.classList.toggle("show");
}

function closePopup() {
    let popup = document.getElementById("myPopup");
    popup.classList.remove("show");
}