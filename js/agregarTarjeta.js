import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("form");

async function agregarTarjeta(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const imagen = document.getElementById("imagen").value;

    await conexionAPI.agregarTarjeta(nombre,imagen,precio);
}

formulario.addEventListener("submit", evento => agregarTarjeta(evento));