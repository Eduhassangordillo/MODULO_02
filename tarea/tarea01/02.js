// Pedir al usuario que ingrese un nombre completo
let nombreCompleto = prompt("Ingrese un nombre completo:");

// Dividir el nombre completo en nombre y apellido
let nombreYApellido = nombreCompleto.split(" ");

// Capitalizar la primera letra de cada palabra
let nombreCapitalizado =
  nombreYApellido[0].charAt(0).toUpperCase() + nombreYApellido[0].slice(1);
let apellidoCapitalizado =
  nombreYApellido[1].charAt(0).toUpperCase() + nombreYApellido[1].slice(1);

// Mostrar el nombre y apellido capitalizados
console.log("Nombre capitalizado: " + nombreCapitalizado);
console.log("Apellido capitalizado: " + apellidoCapitalizado);
