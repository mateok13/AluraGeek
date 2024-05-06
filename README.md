# Challenge Alura Geek

## Realizado con:
- Json-Server
- HTML
- CSS
- JavaScript

## Descripción
Plataforma que permite agregar, listar y eliminar items de una base de datos Json-Server.

## Ejecutar el proyecto
Para ejecutar el proyecto te recomiendo correrlo desde <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> e instalar la extensión de <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank">Live Server</a> para correr la vista. Para la base de datos debes tener instalado <a href="https://nodejs.org/en/download/current" target="_blank">Node.js</a>, y en la terminal de Visual Studio Code ejecutar los siguientes comandos en ese orden:

1. npm init
2. npm install json-server
3. npx json-server --watch db.json --port 3001

Para correr la vista en un servidor, como ya habia mensionado es necesario Live Server, cuando ya se ha instalado la extension solo basta con darle en Go Live y listo
![](resources/imagenREADME1.png)

## Deploy del proyecto
Para desplegar el proyecto y que me funcione la base de datos de json-server en linea use el siguiente endpoint https://my-json-server.typicode.com/mateok13/AluraGeek/tarjetas, <a href="https://my-json-server.typicode.com/" target="_blank">My Json Server</a> te permite manejar los db.json online solo debes colocar el link de la pagina <span style="color:yellow">https://my-json-server.typicode.com/</span> seguido de tu username de github <span style="color:blue">username/</span> y finalizando con el nombre del repositorio en donde se encuentra el archivo db.json <span style="color:red">nombre_repositorio/</span> por ejemplos <a href="https://code.visualstudio.com/" target="_blank">**"https://my-json-server.typicode.com/mateok13/AluraGeek/"**
</a>
