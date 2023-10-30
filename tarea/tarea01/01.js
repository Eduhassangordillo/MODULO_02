// Pedir al usuario que ingrese 3 números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Encontrar el número mayor
let max = Math.max(num1, num2, num3);

// Encontrar el número menor
let min = Math.min(num1, num2, num3);

// Obtener la raíz cuadrada del segundo número
let sqrtNum2 = Math.sqrt(num2);

// Mostrar los resultados
console.log("El número mayor es: " + max);
console.log("El número menor es: " + min);
console.log("La raíz cuadrada del segundo número es: " + sqrtNum2);
