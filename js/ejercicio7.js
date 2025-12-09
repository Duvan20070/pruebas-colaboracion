function calcularSalario() {
    let horas = Number(document.getElementById("horas").value);
    let tarifa = Number(document.getElementById("tarifa").value);
    let salario = 0;

    if (horas > 40) {
        let extras = horas - 40;
        salario = (40 * tarifa) + (extras * tarifa * 1.5);
    } else {
        salario = horas * tarifa;
    }

    document.getElementById("resultado").textContent =
        `Salario del trabajador es: $ ${salario}`;
}
