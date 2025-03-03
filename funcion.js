function cambio() {
    document.getElementById("fondo").classList.add("rojo")
}

function textos() {
    document.getElementById("textouno").innerHTML = "Cambio";
    document.getElementById("textodos").innerHTML = "Holaa";
    document.getElementById("textotres").innerHTML = "Mundo";
}

function verificarN() {
    const Numero = document.getElementById("Numero").value;
    if (Numero >= 10) {
        alert("El número es mayor a 10");
        document.getElementById("resultado").innerHTML = "Es mayor";
    } else {
        alert("El número es menor a 10");
        document.getElementById("resultado").innerHTML = "Es menor";
    }
}

var usuario = {
    nombre: "Iván",
    edad: 19,
    correo: "ivanchoooo@gmail.com"
}

function miobjeto() {

    document.getElementById("datos").innerHTML = `Nombre: ${usuario.nombre} Edad: ${usuario.edad} Correo: ${usuario.correo}`
}

function lista() {
    var notas = ["miguel", "daniel", "santiago", "paula", usuario.nombre];
    for (var i = 0; i < notas.length; i++) {
        document.getElementById("lalista").innerHTML += `<li> ${notas[i]} </li>`
    }
}