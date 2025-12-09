function calcularIMC() {
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let imc = peso / (altura * altura);
    let diagnostico = "";

    if (imc < 16) {
        diagnostico = "Criterio de ingreso en hospital";
    } 
    else if (imc >= 16 && imc < 17) {
        diagnostico = "Infrapeso";
    }
    else if (imc >= 17 && imc < 18) {
        diagnostico = "Bajo peso";
    }
    else if (imc >= 18 && imc < 25) {
        diagnostico = "Peso normal";
    }
    else if (imc >= 25 && imc < 30) {
        diagnostico = "Sobrepeso (Obesidad de grado I)";
    }
    else if (imc >= 30 && imc < 35) {
        diagnostico = "Sobrepeso crónico (Obesidad de grado II)";
    }
    else if (imc >= 35 && imc < 40) {
        diagnostico = "Sobrepeso crónico (Obesidad de grado III)";
    }
    else {
        diagnostico = "Obesidad mórbida (Obesidad de grado IV)";
    }

    document.getElementById("resultado").innerHTML = `
        IMC: ${imc.toFixed(2)} <br>
        Diagnóstico: <strong>${diagnostico}</strong>
    `;
}
