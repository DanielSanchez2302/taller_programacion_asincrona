//Usando setTimeout anidado
function imprimirNumerosTimeout(desde, hasta) {
    let contador = desde;
  
    function imprimir() {
      console.log(contador);
  
      if (contador < hasta) {
        contador++;
        setTimeout(imprimir, 10000);
      }
    }
  
    imprimir();
  }
  
  // Solicitar los datos al usuario
  const desde = parseInt(prompt("Ingrese el número inicial:"));
  const hasta = parseInt(prompt("Ingrese el número final:"));
  
  imprimirNumerosTimeout(desde, hasta);
   // Ejemplo: imprime números del 1 al 5 cada segundo
  
  //explicacion:
  //Línea 1: Definimos la función imprimirNumerosTimeout, que también recibe los parámetros desde y hasta para definir el rango de números a imprimir.
  //Línea 2: Declaramos contador y lo inicializamos con el valor de desde.
  //Línea 3: Definimos una función interna llamada imprimir que contiene la lógica para imprimir y seguir llamándose recursivamente.
  //Línea 4: Dentro de imprimir, imprimimos el valor actual de contador en la consola.
  //Línea 5: Comprobamos si contador es menor que hasta. Si esta condición es verdadera, seguimos ejecutando la función.
  //Línea 6: Si la condición se cumple, incrementamos contador en 1 para avanzar al siguiente número.
  //Línea 7: Llamamos a setTimeout con imprimir como función de callback y 1000 ms (1 segundo) como intervalo, lo que hace que imprimir se ejecute de nuevo después de 1 segundo.
  //Línea 8: Cerramos la función imprimir.
  // Línea 9: Llamamos a la función imprimir() por primera vez para comenzar la secuencia de llamadas recursivas.
  //Línea 10: Se cierra la función imprimirNumerosTimeout.
  //Línea 11: Llamamos a imprimirNumerosTimeout con los valores desde = 1 y hasta = 5, iniciando el conteo de 1 a 5 con pausas de 1 segundo.

 /* Paso a paso
1 Definir la función imprimirNumerosTimeout(desde, hasta).
2 Crear una variable contador que se inicia en desde.
3 Definir una función imprimir() dentro de imprimirNumerosTimeout.
4 En imprimir(), imprimir el valor de contador.
5 Verificar si contador es menor que hasta. Si es así, incrementar contador.
6 Usar setTimeout para llamar de nuevo a imprimir() después de 1000 milisegundos.
7 Llamar a la función imprimir() una vez para iniciar la secuencia.*/