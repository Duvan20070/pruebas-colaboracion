function calcularDescuento() {
    let cadena = document.getElementById("precio").value;
    let resultado = document.getElementById("resultado");

    // Validar que la cadena contiene solo dígitos
    let esNumero = true;

    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i);
        if (caracter < '0' || caracter > '9') {
            esNumero = false;
            break;
        }
    }

    if (!esNumero || cadena === "") {
        resultado.textContent = "Ingrese un precio válido!";
        return;
    }

    let precio = Number(cadena);

    if (precio <= 0) {
        resultado.textContent = "Ingrese un precio válido!";
        return;
    }

    let descuento = 0;
    let porcentaje = 0;

    if (precio > 125000) {
        porcentaje = 0.35;  // 35%
    } else {
        porcentaje = 0.10;  // 10%
    }

    descuento = precio * porcentaje;
    let total = precio - descuento;

    // Mostrar porcentaje como 0.35 % o 0.1 %
    let porcentajeText = porcentaje + " %";

    // Mostrar resultados
    resultado.innerHTML = 
        "Descuento: $ " + descuento.toLocaleString() + "<br>" +
        "Porcentaje: " + porcentajeText + "<br>" +
        "Total a pagar: $ " + total.toLocaleString();
}

