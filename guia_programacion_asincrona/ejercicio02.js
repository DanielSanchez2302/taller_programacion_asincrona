// Solicitar datos al usuario
const delay = parseInt(prompt("Ingrese el tiempo de espera para setTimeout en milisegundos (por ejemplo, 100):"));

// Llamada programada con setTimeout
setTimeout(() => {
  console.log("Función de setTimeout ejecutada");
}, delay);

// Cálculo pesado simulando un bucle bloqueante
let start = Date.now();
while (Date.now() - start < 500) { // Bucle pesado de 500 ms
  // Bloquea la pila principal durante 500 ms
}
console.log("Bucle pesado finalizado");
