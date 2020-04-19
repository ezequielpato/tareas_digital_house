//File System - Nos permite interactuar con los archivos de un directorio.

const fs = require("fs");

console.clear();

fs.writeFile(`./archivo_creado.txt`, `linea uno`, function (err) {
  if (err) {
    console.log(`\nMensaje: \n\n${err}`);
  }
  console.log(`\nArchivo creado con exito!`);
});

/*
Veremos este log antes que cualquiera de los anteriones, debido a que node.js espera la respuesta del sistema operativo
pero continua ejecutando las lineas de codigo siguientes hasta que el sistema responda, cree el archivo o devuelv un error.

console.log(`Ultima linea de codigo`);
*/
