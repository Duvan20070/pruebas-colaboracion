function mostrarRiesgo() {
    const nivel = parseInt(document.getElementById("nivelInput").value);
    const resultado = document.getElementById("resultado");

    let mensaje = "";

    switch (nivel) {
        case 1:
            mensaje = "Riesgo biológico";
            break;
        case 2:
            mensaje = "Riesgo químico";
            break;
        case 3:
            mensaje = "Riesgo físico";
            break;
        case 4:
            mensaje = "Riesgo ergonómico";
            break;
        case 5:
            mensaje = "Riesgo psicosocial";
            break;
        default:
            mensaje = "Nivel de riesgo no válido.";
    }

    resultado.classList.remove("d-none");

    // Caracter de escape ejemplo
    resultado.textContent = "Resultado:\n" + mensaje.replace("\n", "\\n");
}
