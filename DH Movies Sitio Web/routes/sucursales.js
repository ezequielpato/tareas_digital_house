const express = require('express');
const router = express.Router();
const funcionesArchivos = require('../funcionesArchivos')

router.get('/', (req, res) => {

    let salas = funcionesArchivos.getTheaters

    let webContent = `<html>
    <body style="background-color:powderblue;">
    <a href="/">DH Movies</a></br>
    <h2>Nuestras Salas : </h2></br>
    <h3>Total de salas : ${salas.length}</h3>
    <h3>Listado de salas :</h3>
    <ol></body></html>`

    const nombreSala = salas.map((sala) => sala.name)
    const direccionSala = salas.map((sala) => sala.adress)
    const descripcionSala = salas.map((sala) => sala.description)


    for (i = 0; i < salas.length; i++) {
        webContent += `<li><strong>Nombre : </strong>${nombreSala[i]}</br>
            <strong>Dirección : </strong>${direccionSala[i]}</br>
            <strong>Descripción : </strong>${descripcionSala[i]}</br></br></br>`
    }

    webContent += `</ol><a href="/">DH Movies</a></br>`

    res.send(webContent);
});

module.exports = router;