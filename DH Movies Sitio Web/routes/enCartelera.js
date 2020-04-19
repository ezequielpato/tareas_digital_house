const express = require('express');
const router = express.Router();
const funcionesArchivos = require('../funcionesArchivos')

router.get('/', (req, res) => {

    let movies = funcionesArchivos.getMovies

    let webContent = `<html>
    <body style="background-color:powderblue;">
    <a href="/">DH Movies</a></br>
    <h2>En Cartelera : </h2></br>
    <h3>Total de películas : ${movies.length}</h3>
    <h3>Listado de peliculas :</h3>
    <ol></body></html>`

    const tituloPelicula = movies.map((movie) => movie.title)
    const resenaPelicula = movies.map((movie) => movie.overview)

    for (i = 0; i < movies.length; i++) {
        webContent += `<li><strong>Nombre : </strong>${tituloPelicula[i]}</br>
        <strong>Reseña : </strong>${resenaPelicula[i]}</br></br></br>`
    }

    webContent += `</ol><a href="/">DH Movies</a></br>`

    res.send(webContent);
});

module.exports = router;