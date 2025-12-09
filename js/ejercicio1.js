function calcularPresupuesto() {
    let personas = document.getElementById("personas").value;

    
    personas = Number(personas);

    
    if (personas <= 0 || isNaN(personas)) {
        document.getElementById("resultado").innerText = "¡Ingrese un número válido!";
        return;
    }

    let costo = 0;

    
    if (personas <= 200) {
        costo = 25000;
    } else if (personas <= 300) {
        costo = 18500;
    } else {
        costo = 16000;
    }

    
    let total = personas * costo;

    
    let resultadoFinal = "$ " + total.toString();

    
    document.getElementById("resultado").innerText = resultadoFinal;
}
