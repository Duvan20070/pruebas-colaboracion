function calcularGanancia() {
    let tipo = document.getElementById("tipo").value;
    let tamano = document.getElementById("tamano").value;
    let precio = Number(document.getElementById("precio").value);
    let kilos = Number(document.getElementById("kilos").value);

    let ajuste = 0;

    if (tipo === "P1") {
        ajuste = (tamano === "1") ? 1200 : 830;
    } else {
        ajuste = (tamano === "1") ? -540 : -350;
    }

    let precioFinal = precio + ajuste;
    let ganancia = precioFinal * kilos;

    document.getElementById("resultado").textContent = 
        `La ganancia es: $ ${ganancia}`;
}
