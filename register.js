const registerButton = document.getElementById("registerBtn");
const inputs = document.querySelectorAll(".registerInput");
const emailLabel = document.getElementById("emailLabel");
const passwordLabel = document.getElementById("hasloLabel");
const repeatedPassLabel = document.getElementById("hasloRepeatLabel");
const loginLabel = document.getElementById("loginLabel");
let emailChecked = false;
let loginChecked = false;
let passChecked = false;
let repeatedPassChecked = false;

registerButton.addEventListener("click", (e) =>{
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLabel.value) == 0 && emailChecked == false){
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 class = "regError" id = "mailErr">Podano nieprawidłowy adres e-mail!</h2>');
        emailChecked = true;
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLabel.value) != 0 && emailChecked == true){
        document.getElementById('logowanie').removeChild(document.getElementById("mailErr"));
        emailChecked = false;
    }
    if(loginLabel.value.length < 8 && loginChecked == false){
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 class = "regError" id = "loginErr">Login musi zawierać co najmniej 8 znaków!</h2>');
        loginChecked = true;
    }
    else if(loginLabel.value.length >= 8 && loginChecked == true){
        document.getElementById('logowanie').removeChild(document.getElementById("loginErr"));
        loginChecked = false;
    }
    if(passwordLabel.value.length < 8 && passChecked == false){
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 class = "regError" id = "passErr">Haslo musi zawierać co najmniej 8 znaków!</h2>');
        passChecked = true;
    }
    else if(passwordLabel.value.length >= 8 && passChecked == true){
        document.getElementById('logowanie').removeChild(document.getElementById("passErr"));
        passChecked = false;
    }
    if(passwordLabel.value != repeatedPassLabel.value && repeatedPassChecked == false){
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 class = "regError" id = "repeatedErr">Hasła muszą być takie same!</h2>');
        repeatedPassChecked = true;
    }
    else if(passwordLabel.value == repeatedPassLabel.value && repeatedPassChecked == true){
        document.getElementById('logowanie').removeChild(document.getElementById("repeatedErr"));
        repeatedPassChecked = false;
    }
})
