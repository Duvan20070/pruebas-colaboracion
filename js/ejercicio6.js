function calcularTotal() {
  let cantidad = parseInt(document.getElementById("cantidad").value);

  if (isNaN(cantidad) || cantidad <= 0) {
    document.getElementById("resultado").innerHTML = "Ingrese una cantidad válida.";
    return;
  }

  let precio = cantidad >= 1000 ? 49850 : 71290;
  let total = cantidad * precio;

  // cadenas y caracteres + formateo con toLocaleString
  document.getElementById("resultado").innerHTML =
    "Total a pagar es: $ " + total.toLocaleString();
}

