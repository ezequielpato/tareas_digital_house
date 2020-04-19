const express = require('express')
const router = express.Router()
const funcionesArchivos = require('../funcionesArchivos')

router.get('/', (req, res) => {

    let movies = funcionesArchivos.getMovies

    let webContent = `
    <html>
    <body style="background-color:powderblue;">
    <div>
    <h2>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores
    películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.</h2>
    </br>
    </div>

    <h3>Total de películas en cartelera : ${movies.length}</h3>

    <h3>Lista de películas :</h3>
    <ol></body></html>
    `
    const titulosOrdenados = movies.map((movie) => movie.title).sort()

    titulosOrdenados.forEach(element => {
        webContent += `<li>${element}</li>`
    });

    webContent += `</ol></br><h3>Recordá que podés visitar las secciones:</h3>
    <ol>
    <a href="/en-cartelera">En Cartelera</a></br>
    <a href="/mas-votadas">Más Votadas</a></br>
    <a href="/sucursales">Sucursales</a></br>
    <a href="/contacto">Contacto</a></br>
    <a href="/preguntas-frecuentes">Preguntas Frecuentes</a></br>
    </ol>
    `
    res.send(webContent)
});

module.exports = router;