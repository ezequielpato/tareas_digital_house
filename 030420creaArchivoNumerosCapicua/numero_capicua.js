//Validacion de numero capicua

let numero = process.argv[2];
let temp = ``;

console.clear();

for (let i = numero.length - 1; i >= 0; i--) {
  temp += numero[i];
}

if (numero === temp) {
  console.log();
  console.log(`El numero ingresado es: ${numero} \n\nEL NUMERO ES CAPICUA`);
} else {
  console.log();
  console.log(`El numero ingresado es: ${numero} \n\nEL NUMERO NO ES CAPICUA`);
}
