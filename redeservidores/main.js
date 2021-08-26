let username = document.querySelector("input[name='auth_user']");
let password = document.querySelector("input[name='auth_pass']");
let button = document.querySelector(".button");

let disabled = true;
let fildUserHasValid = false;
let fildPassHasValid = false;

username.addEventListener('keyup', () => {

    if(username.value.trim().length >= 3) {
        fildUserHasValid = true
    } else {
        fildUserHasValid = false
    }

    validateForm();
})

password.addEventListener('keyup', () => {

    if(password.value.length >= 3) {
        fildPassHasValid = true
    } else {
        fildPassHasValid = false
    }

    validateForm();
})

function validateForm() {
    if(fildUserHasValid && fildPassHasValid) {
        disabled = false;
    }else {
        disabled = true;
    }
    button.disabled = disabled;
}

//MOSTRAR ESCONDER SENHA
let btnsEye = document.querySelectorAll(".btn-eye");
let btnShowPass = document.querySelector('#btn-eye-show');
let btnHidePass = document.querySelector('#btn-eye-hide')

btnsEye.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        if(password.getAttribute('type') == 'password') {
            password.setAttribute('type', 'text');
            btnShowPass.classList.add('hide'); 
            btnHidePass.classList.remove('hide');
        } else {
            password.setAttribute('type', 'password');
            btnShowPass.classList.remove('hide'); 
            btnHidePass.classList.add('hide');
        }
    });
});

