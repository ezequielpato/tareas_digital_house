const fs = require("fs");

console.clear();

fs.readFile(`./archivo_creado.txt`, function (err, data) {
  if (err) {
    console.log(`\nMensaje: \n\n${err}`);
  }
  if (data) {
    console.log(`\nContenido del archivo: \n\n${data.toString()}`);
  }
});
