let frase = prompt("Por favor, introduce una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i).toLowerCase(); // Convertir a minúscula para comparar vocales sin distinción de mayúsculas o minúsculas
  if ("aeiou".indexOf(letra) !== -1) {
    vocales += letra;
  }
}

document.write("las vocales de " + frase + " son " + vocales);
