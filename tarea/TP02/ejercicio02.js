const solicitarNota = () => {
  const nota = prompt("Ingresa tu nota:");

  // Validamos que la nota sea un número
  if (isNaN(nota)) {
    alert("Introduce un número válido.");
    return;
  }

  return nota;
};

const obtenerCalificacion = (nota) => {
  switch (nota) {
    case 0:
    case 1:
    case 2:
      return "Muy deficiente";
    case 3:
    case 4:
      return "Insuficiente";
    case 5:
    case 6:
      return "Suficiente";
    case 7:
      return "Bien";
    case 8:
    case 9:
      return "Notable";
    case 10:
      return "Sobresaliente";
    default:
      return "Número erróneo";
  }
};

const main = () => {
  const nota = solicitarNota();

  alert(obtenerCalificacion(nota));
};

main();
