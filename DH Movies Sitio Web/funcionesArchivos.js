const fs = require('fs')
const path = require('path')

const leerArchivo = (ruta) => JSON.parse(fs.readFileSync(ruta, 'utf-8'))

module.exports = {
    getFaqs: leerArchivo(path.join(__dirname, '/data/faqs.json')),
    getMovies: leerArchivo(path.join(__dirname, '/data/movies.json')),
    getTheaters: leerArchivo(path.join(__dirname, '/data/theaters.json'))
}
