const form = document.querySelector("form");
const emailInput = document.querySelector(".subscription__input");
const error = document.querySelector(".subscription__error");
const submitButton = document.querySelector(".subscription__btn");

function validateEmail(email){
    const validator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return validator.test(email);
}

function toggleError(element){
    if(!validateEmail(element.value)){
        error.classList.add("subscription__error--active");

    }else{
        error.classList.remove("subscription__error--active");
    }
}
form.addEventListener('submit',(e) => {
    e.preventDefault();
    toggleError(emailInput);
})
