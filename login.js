const logButton = document.getElementById('zaloguj');

/* checking if entered data is correct */
logButton.addEventListener('click', (e) => {
    e.preventDefault();
    const loginInput = document.getElementById('loginput').value;
    const passwordInput = document.getElementById('haslo').value;
    if(loginInput.length <= 8 || passwordInput.length <= 8)
        document.getElementById('logowanie').insertAdjacentHTML('beforeend', '<h2 id = "regError">Podano nieprawidłowy login i/lub hasło</h2>');
    
})