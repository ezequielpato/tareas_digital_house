const express = require('express');
const router = express.Router();
const funcionesArchivos = require('../funcionesArchivos')

router.get('/', (req, res) => {

    let faqs = funcionesArchivos.getFaqs

    let webContent = `<html>
    <body style="background-color:powderblue;">
    <a href="/">DH Movies</a></br>
    <h2>Preguntas Frecuentes : </h2></br>
    <h3>Total de preguntas : ${faqs.length}</h3>
    <h3>Listado de preguntas :</h3>
    <ol></body></html>`

    const preguntasFrecuentes = faqs.map((faqs) => faqs.faq_title)
    const respuestasFrecuentes = faqs.map((faqs) => faqs.faq_answer)


    for (i = 0; i < faqs.length; i++) {
        webContent += `<li><strong>Pregunta : </strong>${preguntasFrecuentes[i]}</br>
            <strong>Respuesta : </strong>${respuestasFrecuentes[i]}</br></br></br>`
    }

    webContent += `</ol><a href="/">DH Movies</a></br>`

    res.send(webContent);
});

module.exports = router;