function clasificarTemperatura() {
    const temp = parseFloat(document.getElementById("tempInput").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(temp)) {
        resultado.classList.remove("d-none");
        resultado.classList.add("alert-danger");
        resultado.textContent = "Error: debes ingresar un número válido.";
        return;
    }

    let mensaje = "";

    if (temp < 0) {
        mensaje = "Clima helado";
    } else if (temp >= 0 && temp <= 10) {
        mensaje = "Clima muy frío";
    } else if (temp > 10 && temp <= 20) {
        mensaje = "Clima frío";
    } else if (temp > 20 && temp <= 30) {
        mensaje = "Normal";
    } else if (temp > 30 && temp <= 40) {
        mensaje = "Hace calor";
    } else if (temp > 40) {
        mensaje = "Hace mucho calor";
    }

    resultado.classList.remove("d-none", "alert-danger");
    resultado.classList.add("alert-info");

    // Ejemplo de uso de caracteres de escape en una cadena
    resultado.textContent = "Resultado:\n" + mensaje.replace("\n", "\\n");
}
