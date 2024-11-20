const persona = {
    nombre: "daniel",
    edad: 24
}
const manejador = {
    get (objetivo, propiedad) {
        console.log(`obteniendo la propiedad ${propiedad}`);
        return objetivo[propiedad]
    },
    set(objetivo, propiedad, valor){
        if (Object.keys(objetivo).indexOf(propiedad) === -1){
            return console.error( `la propiedad ${propiedad} no existe`)
        }
        if (propiedad == "nombre" && !/^[a-zA-Z\s]+$/.tast(valor)) {
            throw new error ("valor debe contener solo letras y esapacios");

        }
        if (propiedad == "edad" && !/^[0-9]+$/.test(valor)){
            throw new error("valor solo debe contener numeros");
        }
        objetivo[propiedad] = valor
    }
}
const proxy = new proxy(persona, manejador);
proxy.nombre = "258";
console.log(proxy.nombre);

/*const target = {
    nombre: "daniel",
    edad: 24,
    ciudad: "Bucaramanga"
};

const handler = {
    set(target, prop, value) {
        // Verificar si la propiedad existe
        if (!target.hasOwnProperty(prop)) {
            console.error(`La propiedad "${prop}" no existe en el objeto.`);
            return false;
        }

        // Verificar tipo de dato (por ejemplo, si "edad" debe ser un número)
        if (prop === "edad" && typeof value !== "number") {
            console.error("El valor de 'edad' debe ser un número.");
            return false;
        }

        // Verificar rango de valores (por ejemplo, si "edad" debe ser mayor a 0)
        if (prop === "edad" && value <= 0) {
            console.error("La edad debe ser mayor a 0.");
            return false;
        }

        // Si todas las validaciones pasan, modificar el valor
        target[prop] = value;
        console.log(`Propiedad "${prop}" modificada a "${value}".`);
        return true;
    }
};

// Resto del código...

const proxy = new Proxy(target, handler);

// Obtener datos por teclado
const propiedad = prompt("Ingrese la propiedad a modificar:");
const nuevoValor = prompt("Ingrese el nuevo valor:");

// Intentar modificar la propiedad a través del proxy
if (proxy[propiedad] = nuevoValor) {
    // En lugar de mostrar un mensaje simple, podemos actualizar un elemento HTML
    document.getElementById("campoModificado").textContent = `Se modificó la propiedad "${propiedad}" a "${nuevoValor}".`;
} else {
    console.log("No se pudo modificar la propiedad.");
}*/