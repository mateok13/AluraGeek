import { conexionAPI } from "./conexionAPI.js";

const tarjeta = document.querySelector(".productos");

function crearTarjeta(id,nombre,imagen,precio){
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.dataset.id = id;
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

const formulario = document.querySelector("form");

async function agregarTarjeta(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const imagen = document.getElementById("imagen").value;

    await conexionAPI.agregarTarjeta(nombre,imagen,precio);
}

formulario.addEventListener("submit", evento => agregarTarjeta(evento));

tarjeta.addEventListener("click", async (evento) => {
    if (evento.target.classList.contains("trash")) {
        const tarjetaPadre = evento.target.closest(".tarjeta");
        const idTarjeta = tarjetaPadre.dataset.id;
        console.log(idTarjeta)

        tarjetaPadre.remove();

        await conexionAPI.eliminarTarjeta(idTarjeta);
    }
});

function limpiarCampos(){
    formulario.reset();
}

const botonLimpiar = document.querySelector(".botonLimpiar");

botonLimpiar.addEventListener("click", limpiarCampos);