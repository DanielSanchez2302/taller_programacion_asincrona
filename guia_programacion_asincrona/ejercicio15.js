// Solicitar al usuario que ingrese un dato por teclado
const userInput = prompt("Ingrese un dato (si no ingresa nada, la promesa se rechazará):");

// Crear una Promise que se rechaza después de 2 segundos si no hay dato ingresado
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userInput) {
      // Si el usuario ingresó un dato, la promesa se resuelve
      resolve("Promise resuelta: Dato ingresado correctamente");
    } else {
      // Si no se ingresó ningún dato, la promesa se rechaza
      reject("Error: Promise rechazada");
    }
  }, 2000); // 2000 milisegundos = 2 segundos
});

// Manejar la promesa utilizando .then() y .catch()
myPromise
  .then((message) => {
    console.log(message); // Imprimir mensaje si la promesa se resolvió
    alert(message); // Mostrar mensaje en una alerta
  })
  .catch((error) => {
    console.error(error); // Imprimir error si la promesa fue rechazada
    alert(error); // Mostrar error en una alerta
  });

  /* EXPLICACION:
  1. Solicitar datos al usuario:
const userInput = prompt("Ingrese un dato (si no ingresa nada, la promesa se rechazará):");
Utilizamos prompt() para pedirle al usuario que ingrese un dato.
El valor ingresado se guarda en la variable userInput.
2. Crear la promesa:
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userInput) {
      resolve("Promise resuelta: Dato ingresado correctamente");
    } else {
      reject("Error: Promise rechazada");
    }
  }, 2000);
});
Creamos una nueva Promise que toma dos funciones: resolve y reject.
Usamos setTimeout() para esperar 2 segundos antes de continuar.
Si el usuario ingresó un dato (userInput no es null o vacío), la promesa se resuelve.
Si el usuario no ingresó nada, la promesa se rechaza con un mensaje de error.
3.Manejo de la promesa con .then() y .catch():
myPromise
  .then((message) => {
    console.log(message);
    alert(message);
  })
  .catch((error) => {
    console.error(error);
    alert(error);
  });
Usamos .then() para manejar el caso en que la promesa se resuelva.
Imprime un mensaje en la consola y muestra una alerta.
Usamos .catch() para manejar el caso en que la promesa sea rechazada.
Imprime el mensaje de error en la consola y muestra una alerta.*/