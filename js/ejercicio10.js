function verificar() {
    let num = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
    if (!Number.isInteger(num)) {
        resultado.textContent = "¡Ingrese un numero valido!";
        return;
    }
    if (num % 2 === 0) {
        resultado.textContent = num + " es un número par";
    } else {
        resultado.textContent = num + " es un número impar";
    }
    
}
