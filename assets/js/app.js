const form = document.querySelector("form");
const main = document.querySelector("main");
const popup = document.querySelector(".popup");
const popupButton = document.querySelector("#ok-button");
const emailText = document.querySelector("#email");
const emailInput = document.querySelector("#email-input").value;

function sendEmail(event) {
    event.preventDefault();
    main.classList.add("hidden");
    popup.classList.remove("hidden");

    emailText.textContent = "A confirmation email has been sent to " + emailInput + " Please open it and click the button inside to confirm your subscription.";
}

function dismissMessage() {
    main.classList.remove("hidden");
    popup.classList.add("hidden");
}

form.addEventListener("submit", sendEmail);
popupButton.addEventListener("click", dismissMessage)