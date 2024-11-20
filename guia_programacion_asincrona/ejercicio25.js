// Función para validar los datos usando Proxy
function createValidatedObject(schema) {
  return new Proxy({}, {
      set(target, prop, value) {
          const rules = schema[prop];
          if (!rules) {
              console.error(`Error: La propiedad "${prop}" no está definida en el esquema.`);
              return false;
          }

          // Eliminar espacios en blanco al inicio y final
          value = value.trim();

          // Validar tipo de datos
          if (rules.type === "numeric" && isNaN(value)) {
              console.error(`Error: El atributo "${prop}" debe ser un número.`);
              return false;
          }

          if (rules.type === "alpha" && /[^a-zA-Z]/.test(value)) {
              console.error(`Error: El atributo "${prop}" solo debe contener letras.`);
              return false;
          }

          if (rules.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              console.error(`Error: El atributo "${prop}" debe ser un correo válido.`);
              return false;
          }

          if (rules.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
              console.error(`Error: El atributo "${prop}" debe ser una fecha en formato AAAA-MM-DD.`);
              return false;
          }

          target[prop] = value;
          return true;
      }
  });
}

// Esquema de validación para los atributos
const schema = {
  nombre: { type: "alpha" },
  precio: { type: "numeric" },
  emailCliente: { type: "email" },
  fechaEntrega: { type: "date" }
};

// Crear el objeto con validaciones
const datosCarpinteria = createValidatedObject(schema);

// Función para solicitar datos por teclado
function solicitarDatos() {
  const nombre = prompt("Ingrese el nombre del producto (solo letras):");
  datosCarpinteria.nombre = nombre;

  const precio = prompt("Ingrese el precio del producto (solo números):");
  datosCarpinteria.precio = precio;

  const emailCliente = prompt("Ingrese el email del cliente:");
  datosCarpinteria.emailCliente = emailCliente;

  const fechaEntrega = prompt("Ingrese la fecha de entrega (formato AAAA-MM-DD):");
  datosCarpinteria.fechaEntrega = fechaEntrega;

  console.log("Datos registrados:", datosCarpinteria);
}

// Ejecutar la función para ingresar datos
solicitarDatos();
