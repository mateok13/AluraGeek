async function listarTarjetas(){
    const conexion = await fetch("https://my-json-server.typicode.com/mateok13/AluraGeek/tarjetas");
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function obtenerUltimoId() {
    const tarjetas = await listarTarjetas();
    const ultimoId = tarjetas.reduce((maxId, tarjeta) => {
        const tarjetaId = parseInt(tarjeta.id);
        return tarjetaId > maxId ? tarjetaId : maxId;
    }, 0);
    return ultimoId + 1;
}


async function agregarTarjeta(nombre, imagen, precio){
    const ultimoId = await obtenerUltimoId();
    const conexion = await fetch("https://my-json-server.typicode.com/mateok13/AluraGeek/tarjetas",{
        method: "POST",
        headers: {"Content-type":"application.json"},
        body:JSON.stringify(
            {
                id:ultimoId.toString(),
                nombre:nombre,
                imagen:imagen,
                precio:precio
            }
        )
    })
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarTarjeta(id){
    const conexion = await fetch(`https://my-json-server.typicode.com/mateok13/AluraGeek/tarjetas/${id}`, {
        method: "DELETE"
    });

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}


export const conexionAPI={
    listarTarjetas,agregarTarjeta,eliminarTarjeta
}