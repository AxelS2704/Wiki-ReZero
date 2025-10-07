var registrationForm = document.getElementById("registrarForm")
var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var opinionInput = document.getElementById("opinion")
var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var opinionError = document.getElementById("opinionError")

// "var" significa variable

registrationForm.addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();
});

function validateForm(){
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var opinion = opinionInput.value.trim();
    var isValid = true;

    if(name === ""){
        nameError.textContent = "Por favor, ingresa tu nombre";
        var isValid = false;
    
    }else if (!isValidEmail(email)){
    emailError.textContent = "Por favor, ingresa un email valido";
    }

    if(passwordInput.value.trim()===""){
        passwordError.textContent="Por favor, ingresa tu opinion";
        isValid = false;
    } else if(passwordInput.value.trim() .length<6){
        passwordError.textContent = "La contraseña debe tener al menos 6 caracteres"
        isValid = false
        passwordError.textContent = "";
    }

    if(isValid){
        //aqui se agrga la logica para enviar a la DB
        alert("Formulario Enviado Exitosamente")
    }
}

function isValidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }