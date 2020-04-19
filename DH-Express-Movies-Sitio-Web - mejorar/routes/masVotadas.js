const express = require('express')
const router = express.Router()
const funcionesArchivos = require('../funcionesArchivos')

router.get('/', (req, res) => {

    let movies = funcionesArchivos.getMovies

    //Filtrado para rating de palículas usando      >>      .filter

    let totalMasVotadas = movies.filter(movies => movies.vote_average >= 7)

    let webContent = `<html>
    <body style="background-color:powderblue;">
    <a href="/">DH Movies</a></br>
    <h2>Mas Votadas : </h2></br>
    <h3>Cantidad de Peliculas Mas Votadas: ${totalMasVotadas.length}</h3>
    `
    let promedio = 0
    for (const iterator of totalMasVotadas) {
        promedio += iterator.vote_average
    }

    //Redondeo del valor de promedio de rating usando       >>      .toFixes(2) de "Math"

    webContent += `<h3>Primedio : ${(promedio / totalMasVotadas.length).toFixed(2)}</h3><br><br>`

    totalMasVotadas.forEach(element => {
        webContent += `<strong>Ttítulo :</strong> ${element.title}<br>`
        webContent += `<strong>Promedio :</strong> ${element.vote_average}<br>`
        webContent += `<strong>Reseña :</strong> ${element.overview}<br>
        <br>`
    })

    //Código viejo se guarda para comparar con mejoras

    /*const tituloPelicula = movies.map((movie) => movie.title)
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
    <strong>Rating promedio : </strong>${rating.toFixed(2)}</br></br>
    <strong>Listado de peliculas : </strong><ol>`

    for (let i = 0; i < newArray.length; i++) {
        webContent += `</br><li><strong>Titulo : </strong>${newArray[i].title}</br>
        <strong>Rating : </strong>${newArray[i].vote_average}</br>
        <strong>Reseña : </strong>${newArray[i].overview}</br></br></li>`
    }
*/
    webContent += `</ol><a href="/">DH Movies</a></br>`

    res.send(webContent);
});

module.exports = router;