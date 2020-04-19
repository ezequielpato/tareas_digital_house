const express = require('express')
const router = express.Router()
const funcionesArchivos = require('../funcionesArchivos')
const math = require('math')

router.get('/', (req, res) => {

    let movies = funcionesArchivos.getMovies

    let webContent = `<html>
    <body style="background-color:powderblue;">
    <a href="/">DH Movies</a></br>
    <h2>Mas Votadas : </h2></br>`

    const tituloPelicula = movies.map((movie) => movie.title)
    const votacionPelicula = movies.map(movie => movie.vote_average)
    const resenaPelicula = movies.map((movie) => movie.overview)

    let valorMinimo = 7
    let totalPeliculas = 0
    let promedioPeliculas = 0
    let rating = 0
    let newArray = []

    for (let i = 0; i < movies.length; i++) {
        if (votacionPelicula[i] > valorMinimo) {
            totalPeliculas += 1
            rating = (promedioPeliculas += votacionPelicula[i]) / totalPeliculas
            newArray.push({
                title: tituloPelicula[i],
                vote_average: votacionPelicula[i],
                overview: resenaPelicula[i]
            })
        }
    }

    webContent += `<strong>Total de películas : </strong>${totalPeliculas}</br></br>
    <strong>Rating promedio : </strong>${rating}</br></br>
    <strong>Listado de peliculas : </strong><ol>`

    for (let i = 0; i < newArray.length; i++) {
        webContent += `</br><li><strong>Titulo : </strong>${newArray[i].title}</br>
        <strong>Rating : </strong>${newArray[i].vote_average}</br>
        <strong>Reseña : </strong>${newArray[i].overview}</br></br></li>`
    }

    webContent += `</ol><a href="/">DH Movies</a></br>`

    res.send(webContent);
});

module.exports = router;