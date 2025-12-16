function calcularMayor() {
let numero1 = parseInt(document.getElementById("numero1").value);
let numero2 = parseInt(document.getElementById("numero2").value);
let numero3 = parseInt(document.getElementById("numero3").value);


if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
document.getElementById("resultado").innerHTML = "Por favor, ingrese los tres números correctamente.";
return;
}


let mayor = numero1;


if (numero2 > mayor) {
mayor = numero2;
}


if (numero3 > mayor) {
mayor = numero3;
}


document.getElementById("resultado").innerHTML = "El número " + mayor + " es el mayor";
}