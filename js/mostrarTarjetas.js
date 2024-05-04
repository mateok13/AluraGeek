import { conexionAPI } from "./conexionAPI.js";

const tarjeta = document.querySelector(".productos");

function crearTarjeta(id,nombre,imagen,precio){
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = 
    `
    <div class="contenedorImagen">
        <img class="imagenTarjeta" src="${imagen}" alt="">
    </div>
    <p>${nombre}</p>
    <div class="precioTarjeta">
        <p>$ ${precio}</p>
        <img class="trash" src="./resources/trash.png" alt="" >
    </div>
    `
    return tarjeta;
}

async function listarTarjetas(){
    const datosTarjetas = await conexionAPI.listarTarjetas();

    datosTarjetas.forEach(elemento => tarjeta.appendChild(crearTarjeta(elemento.id,elemento.nombre,elemento.imagen,elemento.precio)));
}

listarTarjetas();