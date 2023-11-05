let solicitarEdad = () => {
  let edad = prompt("Ingresa tu edad:");

  // Validamos que la edad sea un número
  if (isNaN(edad)) {
    alert("La edad ingresada no es un número válido.");
    return;
  }

  return edad;
};

let esMayorDeEdad = (edad) => edad >= 18;

let main = () => {
  let edad = solicitarEdad();

  if (esMayorDeEdad(edad)) {
    alert("Ya puedes conducir.");
  } else {
    alert("Todavía no puedes conducir.");
  }
};

main();
