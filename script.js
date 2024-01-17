const form = document.querySelector(".emailInput");
const email = document.getElementById("email");
const span = document.querySelector(".span-required");
const button = document.getElementById("buttonNotify");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setErrorNull() {
    email.style.border = "1px solid #e63636";
    span.textContent = "Whoops! It looks like you forgot to add your email";
    span.style.visibility = "visible";
}

function setError() {
    email.style.border = "1px solid #e63636";
    span.textContent = "Please provide a valid email address";
    span.style.visibility = "visible";
}

function removeError() {
    email.style.border = "1px solid hsla(0, 0%, 59%, 0.45)";
    span.style.visibility = "hidden";
}

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (email.value === "") {
        setErrorNull();
    } else if (!emailRegex.test(email.value)) {
        setError();
    } else {
       form.submit();
       alert("Email successfully sent")
    }
});

email.addEventListener("input", function () {
    removeError();
});
