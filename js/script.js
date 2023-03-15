const form = document.querySelector('#form');
const fullname = document.querySelector('#nombre');
const country = document.querySelector('#pais');
const email = document.querySelector('#email');

const showError = (input, message) => {
    const formField = input.parentElement;
    console.log(formField)
    formField.className = 'form-field error'
    const small = formField.querySelector('small');
    small.innerText = message
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.className = 'form-field success'
}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    
}

//Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'No es un correo válido')
    }
}
function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} es requerido`)
        } else {
            showSuccess(input)
        };
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([fullname, country, email]);
    checkEmail(email)
})



function windowScroll() {
    const navbar = document.querySelector('#navbar');
   
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add('nav-sticky');
    } else {
        navbar.classList.remove('nav-sticky');
    }
    
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll()
})
