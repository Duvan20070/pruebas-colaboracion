function myfunction(){
    document.getElementById().innerHTML="Duvan Saavedra"
}


function datos(){
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let resultado = unir (titulo, autor)
    document.getElementById("msj").innerHTML = resultado;
}

function unir(titulo, autor){
    return "Titulo: " + titulo + "<br/>"
    + "autor: " + autor; 
}

function redondearnumero(){
    let num = document.getElementById("numero").value;
    let redondeo = Math.round(Number(num));

    document.getElementById ("resultado").innerHTML =
    "El numero redondeado es: " + redondeo;
}