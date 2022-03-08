var registerButton = document.getElementById("registerBtn");
var inputs = document.querySelectorAll(".registerInput");
var emailLabel = document.getElementById("emailLabel");
var passwordLabel = document.getElementById("hasloLabel");
var repeatedPassLabel = document.getElementById("hasloRepeatLabel");
var loginLabel = document.getElementById("loginLabel");


registerButton.addEventListener("click", (e) =>{
    e.preventDefault();
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailLabel.value) == 0)
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 id = "regError">Podano nieprawidłowy adres e-mail!</h2>');
    if(loginLabel.length >= 8);
    else
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 id = "regError">Login musi zawierać co najmniej 8 znaków!</h2>');
    if(passwordLabel.length >= 8);
    else
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 id = "regError">Haslo musi zawierać co najmniej 8 znaków!</h2>');
    if(passwordLabel != repeatedPassLabel)
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 id = "regError">Hasła muszą być takie same!</h2>');
    
})