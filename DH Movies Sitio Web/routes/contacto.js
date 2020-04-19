const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    let webContent = `<html>
    <body style="background-color:powderblue;">
    <a href="/">DH Movies</a></br>
    <h2>Contáctanos : </h2>
    <ol></body></html>`

    webContent += `¿Tenés algo para contarnos? Nos encanta escuchar a nuestros
    clientes. Si deseas contactarnos podés escribirnos al siguiente email:
    <strong>dhmovies@digitalhouse.com</strong> o en las redes sociales. Envianos tu consulta,
    sugerencia o reclamo y será respondido a la brevedad posible. Recordá que
    también podes consultar la sección de Preguntas Frecuentes para obtener
    respuestas inmediatas a los problemas más comunes.</br></br>`

    webContent += `</ol><a href="/">DH Movies</a></br>`

    res.send(webContent);
});

module.exports = router;