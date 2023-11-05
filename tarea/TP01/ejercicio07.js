var numero1 = parseFloat(prompt("Por favor, introduce el primer número:"));
var numero2 = parseFloat(prompt("Por favor, introduce el segundo número:"));
var numero3 = parseFloat(prompt("Por favor, introduce el tercer número:"));

if (numero1 > numero2 && numero1 > numero3) {
    document.write("El " + numero1 + " es el número más grande");
} else if (numero2 > numero1 && numero2 > numero3) {
    document.write("El " + numero2 + " es el número más grande");
} else if (numero3 > numero1 && numero3 > numero2) {
    document.write("El " + numero3 + " es el número más grande");
} else {
    document.write("Los tres números son iguales");
}
