// Solicitar al usuario que ingrese un dato por teclado
const userInput = prompt("Ingrese un dato cualquiera:");

// Crear una Promise que se resuelve después de 3 segundos
const myPromise = new Promise((resolve, reject) => {
  // Simular un tiempo de espera de 3 segundos
  setTimeout(() => {
    if (userInput) {
      // Si el usuario ingresó un dato, la promesa se resuelve
      resolve("Promise resuelta: Dato ingresado correctamente");
    } else {
      // Si no se ingresó nada, la promesa se rechaza
      reject("Promise rechazada: No se ingresó ningún dato");
    }
  }, 3000); // 3000 milisegundos = 3 segundos
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

  /*EXPLICACION:
  1.Solicitar datos al usuario:Mconst userInput = prompt("Ingrese un dato cualquiera:");
  Usamos prompt() para pedir al usuario que ingrese un texto.
  El valor ingresado se almacena en la variable userInput.
  2. Crear la promesa:
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (userInput) {
      resolve("Promise resuelta: Dato ingresado correctamente");
    } else {
      reject("Promise rechazada: No se ingresó ningún dato");
    }
  }, 3000);
});
Creamos una nueva Promise que toma dos funciones: resolve y reject.
Usamos setTimeout() para esperar 3 segundos antes de continuar.
Si el usuario ingresó un dato (userInput no es null o vacío), la promesa se resuelve con un mensaje.
Si el usuario no ingresó nada, la promesa se rechaza con un mensaje de error.
3. Manejo de la promesa:
myPromise
  .then((message) => {
    console.log(message);
    alert(message);
  })
  .catch((error) => {
    console.error(error);
    alert(error);
  });
Usamos .then() para manejar el caso en que la promesa se resuelve.
Imprime el mensaje en la consola y muestra una alerta.
Usamos .catch() para manejar el caso en que la promesa es rechazada.
Imprime el error en la consola y muestra una alerta.*/