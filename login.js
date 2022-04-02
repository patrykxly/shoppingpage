const logButton = document.getElementById('zaloguj');
let checked = false;
/* checking if entered data is correct */
logButton.addEventListener('click', (e) => {
    e.preventDefault();
    const loginInput = document.getElementById('loginput').value;
    const passwordInput = document.getElementById('haslo').value;
    if((loginInput.length < 8 || passwordInput.length < 8) && checked == false){
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 class = "regError" id = "labelsChecking">Podano nieprawidłowy login i/lub hasło</h2>');
        checked = true;
    }
    else if((loginInput.length >= 8 || passwordInput.length >= 8) && checked == true){
        document.getElementById('logowanie').removeChild(document.getElementById("labelsChecking"));
        checked = false;
    }
})
