function calcularEnvio() {
    const peso = parseFloat(document.getElementById("peso").value);
    const zona = parseInt(document.getElementById("zona").value);

    if (peso > 85) {
        document.getElementById("resultado").innerHTML =
            "El paquete excede el peso permitido (85 kg)";
        return;
    }

    let costo;

    switch (zona) {
        case 1: costo = 210; break;
        case 2: costo = 180; break;
        case 3: costo = 220; break;
        case 4: costo = 340; break;
        case 5: costo = 370; break;
        default:
            document.getElementById("resultado").innerHTML = "Zona no válida";
            return;
    }

    const valor = peso * costo;

    document.getElementById("resultado").innerHTML = `Valor: $ ${valor}`;
}
