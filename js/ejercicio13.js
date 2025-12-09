function clasificar() {
    let l1 = Number(document.getElementById("lado1").value);
    let l2 = Number(document.getElementById("lado2").value);
    let l3 = Number(document.getElementById("lado3").value);

    if (l1 <= 0 || l2 <= 0 || l3 <= 0) {
        document.getElementById("resultado").textContent = "¡Valor no valido!";
        return;
    }

    let mensaje = "";

    if (l1 === l2 && l2 === l3) {
        mensaje = "Es un triángulo equilátero";
    } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        mensaje = "Es un triángulo isósceles";
    } else {
        mensaje = "Es un triángulo escaleno";
    }

    document.getElementById("resultado").textContent = mensaje;
}
