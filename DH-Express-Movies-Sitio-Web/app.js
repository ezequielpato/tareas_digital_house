const express = require('express');
const app = express();
const port = 3063;

const routerIndex = require('./routes/index');
const routerEnCartelera = require('./routes/EnCartelera');
const routerMasVotadas = require('./routes/masVotadas');
const routerSucursales = require('./routes/sucursales');
const routerContacto = require('./routes/contacto');
const routerPreguntasFrecuentes = require('./routes/preguntasFrecuentes');

app.use('/', routerIndex);
app.use('/en-cartelera', routerEnCartelera);
app.use('/mas-votadas', routerMasVotadas);
app.use('/sucursales', routerSucursales);
app.use('/contacto', routerContacto);
app.use('/preguntas-frecuentes', routerPreguntasFrecuentes);

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));