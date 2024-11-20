//Usando setInterval
function imprimirNumerosIntervalo(desde, hasta) {
    let contador = desde;
  
    const intervalo = setInterval(() => {
      console.log(contador);
      
      if (contador === hasta) {
        clearInterval(intervalo);
      }
  
      contador++;
    }, 1000);
  }
  
  // Solicitar los datos al usuario
  const desde = parseInt(prompt("Ingrese el número inicial:"));
  const hasta = parseInt(prompt("Ingrese el número final:"));
  
  imprimirNumerosIntervalo(desde, hasta);
  // Ejemplo: imprime números del 1 al 5 cada segundo

  /*Paso a paso
1 Definir la función imprimirNumerosIntervalo(desde, hasta).
2 Crear una variable contador que se inicia en desde.
3 Configurar un setInterval que ejecutará una función cada 1000 milisegundos (1 segundo).
4 Dentro del setInterval, imprimir el valor de contador.
5 Verificar si contador es igual a hasta. Si es así, usar clearInterval para detener el intervalo.
6 Incrementar el valor de contador después de cada iteración.

Línea 1: Definimos la función imprimirNumerosIntervalo que recibe dos parámetros: desde y hasta. Estos parámetros representan el rango de números que queremos imprimir, de inicio (desde) a final (hasta).
Línea 2: Declaramos la variable contador y le asignamos el valor de desde, iniciando el conteo desde el número inicial dado.
Línea 3: Creamos un intervalo (intervalo) usando setInterval, que ejecuta la función cada segundo (1000 ms).
Línea 4: Dentro del intervalo, imprimimos el valor de contador en la consola.
Línea 5: Evaluamos si contador es igual a hasta. Si se cumple esta condición, significa que hemos alcanzado el límite final de la cuenta.
Línea 6: Si la condición es verdadera, usamos clearInterval para detener el intervalo. Esto evita que el programa siga ejecutándose más allá de lo necesario.
Línea 7: Si contador no es igual a hasta, lo incrementamos en 1.
Línea 8: La función dentro de setInterval se ejecuta cada 1000 milisegundos (1 segundo).
Línea 9: Se cierra la función imprimirNumerosIntervalo.
Línea 10: Llamamos a la función imprimirNumerosIntervalo con los valores desde = 1 y hasta = 5, lo que generará números del 1 al 5 con una pausa de 1 segundo entre cada uno.*/