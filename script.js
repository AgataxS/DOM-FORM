document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registro-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const correo = document.getElementById("correo");
      const contraseña = document.getElementById("contraseña");
  
      clearErrors();
  
      if (validarFormulario()) {
        window.location.href = "prueba.html"
      }
    });
  
    function validarFormulario() {
      let isValid = true;
  
      if (nombre.value === "") {
        displayError(nombre, "El nombre es obligatorio.");
        isValid = false;
      }
  
      if (apellido.value === "") {
        displayError(apellido, "El apellido es obligatorio.");
        isValid = false;
      }
  
      if (correo.value === "") {
        displayError(correo, "El correo electrónico es obligatorio.");
        isValid = false;
      } else if (!isValidEmail(correo.value)) {
        displayError(correo, "El correo electrónico no es válido.");
        isValid = false;
      }
  
      if (contraseña.value === "") {
        displayError(contraseña, "La contraseña es obligatoria.");
        isValid = false;
      }
  
      return isValid;
    }
  
    function displayError(input, message) {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.textContent = message;
  
      input.parentElement.appendChild(errorElement);
    }
  
    function clearErrors() {
      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach(function(element) {
        element.remove();
      });
    }
  
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  });