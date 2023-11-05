var num1 = prompt("Por favor, introduce el primer número:");
var num2 = prompt("Por favor, introduce el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 > num2) {
  document.write("El " + num1 + " es el número más grande");
} else if (num2 > num1) {
  document.write("El " + num2 + " es el número más grande");
} else {
  document.write("Ambos números son iguales");
}
