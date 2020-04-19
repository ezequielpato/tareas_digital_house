const express = require('express');
const app = express();
const port = 3030;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

//Home

app.get('/', (req, res) => {
    res.send('Bienvenido al sitios');
});

//Rutas parametrizadas

app.get('/productos/:id?', (req, res) => {
    if (req.params.id == undefined) {
        res.send('Productos - Comentarios');
    } else {
        res.send(`Productos - Comentario de producto ${req.params.id}`);
    }
});



