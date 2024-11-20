// Función `map` que toma un array y un callback
function map(array, callback) {
    let resultArray = []; // Array vacío para almacenar los resultados
  
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      let currentElement = array[i]; // Obtenemos el elemento actual
  
      let result = callback(currentElement); // Llamamos al callback con el elemento actual
      resultArray.push(result); // Agregamos el resultado al array de resultados
    }
  
    return resultArray; // Devolvemos el array con los resultados
  }
  
  // Solicitamos al usuario la cantidad de números que desea ingresar
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  let numbers = []; // Array para almacenar los números ingresados
  
  // Solicitamos cada número al usuario y lo agregamos al array `numbers`
  for (let i = 0; i < numElements; i++) {
    let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numbers.push(number);
  }
  
  // Creamos un callback para multiplicar cada número por 2
  function multiplyByTwo(num) {
    return num * 2;
  }
  
  // Llamamos a `map` con el array `numbers` y el callback `multiplyByTwo`
  const result = map(numbers, multiplyByTwo);
  
  console.log("Array original:", numbers); // Mostramos el array original
  console.log("Array modificado:", result); // Mostramos el array con los resultados

  /*EXPLICACION: 
  1. Ingreso de la cantidad de elementos: 
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  Usamos prompt() para solicitar al usuario cuántos números quiere ingresar, y parseInt() para convertir la entrada a un número entero.
  2. Ingreso de cada número:
  for (let i = 0; i < numElements; i++) {
  let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numbers.push(number);
  }
  Creamos un bucle para solicitar cada número, lo convertimos a entero con parseInt() y lo agregamos al array numbers usando push.
 3. Salida en consola:
 console.log("Array original:", numbers);
console.log("Array modificado:", result);
Al final, mostramos el array original y el array con los resultados en la consola.

Explicación de cada línea:
1. Definición de la función map:
function map(array, callback) {
Aquí definimos la función map, que toma dos parámetros: array (el array de entrada) y callback (la función que se aplicará a cada elemento del array).
2. Inicialización del array resultArray:
let resultArray = [];
Se crea un array vacío resultArray para almacenar los resultados de cada llamada al callback.
3. Bucle for para iterar sobre array:
for (let i = 0; i < array.length; i++) {
Un bucle for recorre cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
4. Bucle for para iterar sobre array:
for (let i = 0; i < array.length; i++) {
Un bucle for recorre cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
5. Llamada al callback:
let result = callback(currentElement);
Llamamos al callback con el elemento actual (currentElement). El callback procesa el elemento y devuelve un resultado, que se guarda en la variable result.
6. Agregar el resultado al array de resultados:
resultArray.push(result);
Usamos push para agregar el result al array resultArray.
7. Devolución del array final:
return resultArray;
Después de completar la iteración, devolvemos resultArray, que contiene el resultado de cada llamada al callback.*/