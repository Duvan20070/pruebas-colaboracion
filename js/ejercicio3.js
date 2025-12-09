function calcularHamburguesas() {
    let cantidad = Number(document.getElementById("cantidad").value);
    let tipo = document.getElementById("tipoHamburguesa").value;
    let pago = document.getElementById("tipoPago").value;

    if (cantidad <= 0 || isNaN(cantidad)) {
        document.getElementById("resultado").innerText = "¡Ingrese una cantidad válida!";
        return;
    }

    let precioUnit;

    if (tipo === "sencilla") {
        precioUnit = 20000;
    } else if (tipo === "doble") {
        precioUnit = 25000;
    } else {
        precioUnit = 28000;
    }

    let totalSinCargo = cantidad * precioUnit;

    let cargo = pago === "tarjeta" ? totalSinCargo * 0.07 : 0;

    let totalPagar = totalSinCargo + cargo;


    let texto = `
Precio Unit.: $ ${precioUnit}
Cantidad: ${cantidad}
Tipo de pago: ${pago}
Total sin cargo: $ ${totalSinCargo}
El cargo es: $ ${cargo.toLocaleString()}
Total a pagar es: $ ${totalPagar}
`;

    document.getElementById("resultado").innerText = texto;
}
