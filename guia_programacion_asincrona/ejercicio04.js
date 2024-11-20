// Definimos la función `filter` que toma dos parámetros:
// `array` - el array sobre el cual aplicaremos el filtro
// `callback` - una función que determinará si un elemento debe ser incluido o no
function filter(array, callback) {
    // Creamos un nuevo array vacío para almacenar los elementos que pasen el filtro
    let resultArray = [];
  
    // Usamos un bucle `for` para iterar sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Obtenemos el elemento actual del array en la posición `i`
      let currentElement = array[i];
  
      // Llamamos al `callback` pasando el elemento actual como argumento
      // Si el `callback` devuelve `true`, agregamos el elemento al array `resultArray`
      if (callback(currentElement)) {
        resultArray.push(currentElement);
      }
    }
  
    // Al final de la iteración, devolvemos `resultArray` con los elementos filtrados
    return resultArray;
  }
  
  // Solicitamos al usuario la cantidad de elementos que quiere ingresar
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  let numbers = []; // Array para almacenar los números ingresados
  
  // Solicitamos cada número al usuario y lo agregamos al array `numbers`
  for (let i = 0; i < numElements; i++) {
    let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numbers.push(number);
  }
  
  // Definimos un callback que verifica si un número es par
  function isEven(num) {
    return num % 2 === 0; // Devuelve `true` si el número es par, `false` si no
  }
  
  // Llamamos a `filter` pasando el array `numbers` y el callback `isEven`
  // Esto devuelve un nuevo array solo con los números pares
  const result = filter(numbers, isEven);
  
  console.log("Array original:", numbers); // Muestra el array original en la consola
  console.log("Array filtrado (solo números pares):", result); // Muestra el array filtrado

  /*EXPLICACION:
  1. Definición de la función filter:
  function filter(array, callback) {
  Definimos la función filter, que recibe dos parámetros: array (el array de entrada) y callback (una función que determina si un elemento cumple con una condición específica).
  2. Inicialización del array resultArray:
  let resultArray = [];
  Creamos un array vacío resultArray para almacenar solo los elementos que pasen el filtro.
  3. Bucle for para iterar sobre array:
  for (let i = 0; i < array.length; i++) {
  Un bucle for recorre cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
  4. Obtenemos el elemento actual:
  let currentElement = array[i];
  Aquí obtenemos el elemento actual del array en la posición i y lo almacenamos en la variable currentElement.
  5. Llamada al callback y verificación del resultado:
  if (callback(currentElement)) {
  resultArray.push(currentElement);
  }
  Llamamos al callback con el elemento actual (currentElement). Si el callback devuelve true, agregamos el elemento a resultArray usando push.
 6.Devolución del array final:
 return resultArray;
 Después de completar la iteración, devolvemos resultArray, que contiene solo los elementos que cumplieron la condición del filtro.
 7. Ingreso de la cantidad de elementos:
let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
Usamos prompt() para solicitar al usuario la cantidad de números que desea ingresar, y parseInt() para convertir la entrada a un número entero.
8.  Ingreso de cada número:
for (let i = 0; i < numElements; i++) {
  let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numbers.push(number);
}
Creamos un bucle para solicitar cada número, lo convertimos a entero con parseInt() y lo agregamos al array numbers usando push.
9. Definición del callback isEven:
function isEven(num) {
  return num % 2 === 0;
}
Definimos una función isEven que verifica si un número es par. Esta función devuelve true si el número es par y false si no lo es.
10. Llamada a filter y salida en consola:
const result = filter(numbers, isEven);
console.log("Array original:", numbers);
console.log("Array filtrado (solo números pares):", result);
Llamamos a filter con el array numbers y el callback isEven. Finalmente, mostramos en consola el array original y el array con los números filtrados.*/

