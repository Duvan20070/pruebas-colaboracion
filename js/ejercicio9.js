function evaluarLlanta() {
    let tipo = document.getElementById("tipo").value;
    let grosor = Number(document.getElementById("grosor").value);
    let diametro = Number(document.getElementById("diametro").value);
    let marca = document.getElementById("marca").value;

    let mensaje = "";
    if (diametro > 1.4) {
        mensaje = "La rueda es para un vehículo grande.";
    } else if (diametro > 0.8) {
        mensaje = "La rueda es para un vehículo mediano.";
    } else {
        mensaje = "La rueda es para un vehículo pequeño.";
    }

  
    let advertencia = "";

    if ((diametro > 1.4 && grosor < 0.4) ||
        (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {

        advertencia = "El grosor para esta rueda es inferior al recomendado.";
    }


    document.getElementById("resultado").innerHTML = `
        <strong>${mensaje}</strong><br>
        ${advertencia}
    `;
}
