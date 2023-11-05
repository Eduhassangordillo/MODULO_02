let numero = parseFloat(prompt("Por favor, introduce un número:"));

if (numero % 2 === 0) {
  document.write("El " + numero + " es divisible por 2.");
} else if (numero % 3 === 0) {
  document.write("El " + numero + " es divisible por 3.");
} else if (numero % 5 === 0) {
  document.write("El " + numero + " es divisible por 5.");
} else if (numero % 7 === 0) {
  document.write("El " + numero + " es divisible por 7.");
} else {
  document.write("El " + numero + " no es divisible por 2, 3, 5 ni 7.");
}
