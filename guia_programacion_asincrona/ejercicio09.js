// Definimos la función `dropWhile` que toma dos parámetros:
// `array` - el array que vamos a recorrer
// `callback` - una función que verificará si un elemento cumple con una condición
function dropWhile(array, callback) {
    // Variable para almacenar el índice desde donde comenzaremos a copiar elementos
    let startIndex = 0;
  
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
      // Si el callback devuelve `false` para el elemento actual, asignamos `i` a `startIndex` y salimos del bucle
      if (!callback(array[i])) {
        startIndex = i;
        break;
      }
    }
  
    // Usamos `slice` para crear un nuevo array desde `startIndex` hasta el final del array original
    return array.slice(startIndex);
  }
  
  // Solicitamos al usuario la cantidad de elementos que quiere ingresar
  let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
  let numbers = []; // Array para almacenar los números ingresados
  
  // Solicitamos cada número al usuario y lo agregamos al array `numbers`
  for (let i = 0; i < numElements; i++) {
    let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
    numbers.push(number);
  }
  
  // Definimos un callback que verifica si un número es menor que 10
  function isLessThanTen(num) {
    return num < 10; // Devuelve `true` si el número es menor que 10, `false` si es 10 o mayor
  }
  
  // Llamamos a `dropWhile` con el array `numbers` y el callback `isLessThanTen`
  // Esto devolverá un array a partir del primer número que es 10 o mayor
  const result = dropWhile(numbers, isLessThanTen);
  
  console.log("Array de números:", numbers); // Mostramos el array de números ingresados
  console.log("Resultado después de aplicar dropWhile:", result); // Mostramos el array final resultante

  /* EXPLICACION:
  1. Definición de la función dropWhile:
function dropWhile(array, callback) {
Definimos la función dropWhile, que toma dos parámetros: array (el array de entrada) y callback (una función que verificará si un elemento cumple con una condición específica).
2. Definición de startIndex:
let startIndex = 0;
Inicializamos startIndex en 0. Este índice nos permitirá saber desde dónde crear el nuevo array.
3. Bucle for para iterar sobre array:
for (let i = 0; i < array.length; i++) {
Usamos un bucle for para recorrer cada elemento del array de entrada, usando el índice i para acceder a cada elemento.
4. Condicional para verificar el callback y salir del bucle:
if (!callback(array[i])) {
  startIndex = i;
  break;
}
Llamamos al callback con el elemento actual (array[i]). Si el callback devuelve false, asignamos el índice i a startIndex y usamos break para salir del bucle. Esto marca el índice desde donde empezaremos a copiar elementos.
5. Crear un nuevo array con slice:
return array.slice(startIndex);
Usamos slice para crear un nuevo array a partir de startIndex hasta el final del array original. Esto devolverá el subarray deseado.
6. Ingreso de la cantidad de elementos:
let numElements = parseInt(prompt("¿Cuántos números quieres ingresar?"));
Usamos prompt() para solicitar al usuario la cantidad de números que desea ingresar, y parseInt() para convertir la entrada a un número entero.
7. Ingreso de cada número:
for (let i = 0; i < numElements; i++) {
  let number = parseInt(prompt(`Ingresa el número ${i + 1}:`));
  numbers.push(number);
}
Creamos un bucle para solicitar cada número al usuario, lo convertimos a entero con parseInt() y lo agregamos al array numbers usando push.
8. Definición del callback isLessThanTen:
function isLessThanTen(num) {
  return num < 10;
}
Definimos la función isLessThanTen, que verifica si un número es menor que 10. Esta función devuelve true si el número es menor que 10 y false si es mayor o igual a 10.
9. Llamada a dropWhile y salida en consola:
const result = dropWhile(numbers, isLessThanTen);
console.log("Array de números:", numbers);
console.log("Resultado después de aplicar dropWhile:", result);
Llamamos a dropWhile con el array numbers y el callback isLessThanTen. Finalmente, mostramos en consola el array original y el resultado después de aplicar dropWhile.*/
