// datos.js



// Entidad de plato como aparece representada en las colecciones.
class Plato {
   constructor({ id, nombre, descripcion, imagenUrl, precio, tipo, sitio, etiquetas = [] }) {
      this.id = id; // String
      this.nombre = nombre; // String
      this.descripcion = descripcion; // String
      this.imagenUrl = imagenUrl; // String
      this.precio = precio; // Number
      this.tipo = tipo; // String
      this.sitio = sitio; // String
      this.etiquetas = etiquetas; // String array
   }
   // Formatear precio a 2 decimales-
   getPrecioFormateado() {
      const valor = Number(this.precio) || 0;
      return `${valor.toFixed(2)} €`
   }
}

export const platos = [
   new Plato({
      id: "plato_001",
      nombre: "Ramen Tonkotsu Especial",
      descripcion: "Caldo de cerdo cocinado a fuego lento con fideos artesanales, huevo marinado y chashu.",
      imagenUrl: "src/img/plato-ejemplo.jpg",
      precio: 13.50, 
      tipo: "Japonesa",
      sitio: "Ramen Ramon",
      etiquetas: ["ramen", "noodles", "caliente", "novedad"]
   }),
   new Plato({
      id: "plato_002",
      nombre: "Gyozas a la Plancha (6 uds)",
      descripcion: "Empanadillas japonesas rellenas de cerdo y verduras con salsa de soja y jengibre.",
      imagenUrl: "src/img/gyozas.jpg",
      precio: 6.52331232321,
      tipo: "Entrante",
      sitio: "Ramen Ramon",
      etiquetas: ["entrante", "compartir", "japonesa"]
   }),
   new Plato({
      id: "plato_003",
      nombre: "Pizza Trufa y Champiñones",
      descripcion: "Masa fermentada 48h con base de mozzarella fior di latte, crema de trufa y portobello.",
      imagenUrl: "src/img/pizza-trufa.jpg",
      precio: 14.0,
      tipo: "Italiana",
      sitio: "La Trattoria",
      etiquetas: ["pizza", "trufa", "vegetariana", "compartir"]
   }),
   new Plato({
      id: "plato_004",
      nombre: "Burrata con Tomate Seco",
      descripcion: "Queso burrata fresco acompañado de tomates cherry confitados, albahaca y aceite de oliva.",
      imagenUrl: "src/img/burrata.jpg",
      precio: 9.50,
      tipo: "Entrante",
      sitio: "La Trattoria",
      etiquetas: ["entrante", "queso", "vegetariana", "compartir"]
   }),
   new Plato({
      id: "plato_005",
      nombre: "Smash Burger Doble Bacon",
      descripcion: "Doble carne de vaca madurada a la plancha, cheddar fundido, bacon crujiente y salsa house.",
      imagenUrl: "src/img/smash-burger.jpg",
      precio: 12.80,
      tipo: "Americana",
      sitio: "Burger Queen",
      etiquetas: ["hamburguesa", "bacon", "rapida", "novedad"]
   }),
   new Plato({
      id: "plato_006",
      nombre: "Patatas Gajo con Queso y Jalapeños",
      descripcion: "Patatas rústicas crujientes cubiertas de salsa de queso cheddar, jalapeños y cebollino.",
      imagenUrl: "src/img/patatas-queso.jpg",
      precio: 5.90,
      tipo: "Acompañamiento",
      sitio: "Burger Queen",
      etiquetas: ["patatas", "picante", "compartir", "entrante"]
   }),
   new Plato({
      id: "plato_007",
      nombre: "Tacos al Pastor (3 uds)",
      descripcion: "Tortillas de maíz con cerdo adobado en axiote, piña asada, cilantro y cebolla.",
      imagenUrl: "src/img/tacos-pastor.jpg",
      precio: 10.50,
      tipo: "Mexicana",
      sitio: "Cantina Norte",
      etiquetas: ["tacos", "mexicana", "pina"]
   }),
   new Plato({
      id: "plato_008",
      nombre: "Nachos con Guacamole Casero",
      descripcion: "Totopos de maíz con guacamole recién preparado, pico de gallo, crema agria y queso.",
      imagenUrl: "src/img/nachos.jpg",
      precio: 8.20,
      tipo: "Entrante",
      sitio: "Cantina Norte",
      etiquetas: ["nachos", "guacamole", "compartir", "vegetariana"]
   }),
   new Plato({
      id: "plato_009",
      nombre: "Poke Bowl de Salmón y Mango",
      descripcion: "Base de arroz de sushi con salmón marinado, aguacate, mango, edamame y sésamo.",
      imagenUrl: "src/img/poke-salmon.jpg",
      precio: 12.90,
      tipo: "Hawaiana",
      sitio: "Aloha Bowl",
      etiquetas: ["poke", "saludable", "salmon", "fresco"]
   }),
   new Plato({
      id: "plato_010",
      nombre: "Mochi de Chocolate y Avellana",
      descripcion: "Pastelito de arroz glutinoso relleno de crema suave de cacao y avellana tostada.",
      imagenUrl: "src/img/mochi.jpg",
      precio: 4.80,
      tipo: "Postre",
      sitio: "Aloha Bowl",
      etiquetas: ["postre", "dulce", "chocolate", "novedad"]
   })
];

// Para implementar mas adelante:
// ------------------------------
// Que al buscar imágenes y no las encuente en "src/", asigne una imágen placeholder dependiendo del tipo de plato (por ejemplo, un icono de unos nachos.svg para comida mexicana, unas bolas de arroz para japonesa)


// Esto va para CHANGELOG.md
//--------------------------
// Q: 
// como plantearias luego la implementacion de esta clase plato en la gestion de orden del pedido? 
// ahi se podria pedir varias veces el plato, y habria que determinar quien lo pide, cantidad, si es compartido no. 
// Como lo deberia hacer, creeando otra entidad que herede de plato? 
//
// A: 
// No conviene usar herencia (extends Plato) en este caso, sino composición (crear una clase separada que contenga una referencia al Plato).
// Si heredaras de Plato, estarías duplicando todos los datos del producto (nombre, foto, descripción, restaurante) cada vez que un usuario distinto lo pida o cambie la cantidad. 
// En cambio, al separar el catálogo (Plato) de la línea del pedido (Comanda), mantienes los datos limpios y evitas inconsistencias si el precio o el nombre del plato cambian.

// Entidad Comanda como instancia de plato, como aparecería representada al añadir un plato a un pedido, pudiendo ser añadido mas de una vez y asignándole comensales.

export class Comanda {
   constructor({ id, plato, cantidad = 1, usuarioId = null, esCompartido = false }) {
      this.id = id;
      this.plato = plato;               // Instancia de Plato
      this.cantidad = cantidad;         // Ej: 1 (el "x1" de la tarjeta)
      this.usuarioId = usuarioId;       // ID del comensal (null si es de todo el grupo)
      this.esCompartido = esCompartido; // true = va a GRUPO, false = va a USER X
   }
}

export const comandas = [];
//    // 1. Compartido del grupo: Gyozas a la Plancha (Ramen Ramon)
//       new Comanda({
//          id: "linea_001",
//          plato: platos[1],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 2. Compartido del grupo: Pizza Trufa y Champiñones (La Trattoria)
//       new Comanda({
//          id: "linea_002",
//          plato: platos[2],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 3. Compartido del grupo: Nachos con Guacamole Casero (Cantina Norte)
//       new Comanda({
//          id: "linea_003",
//          plato: platos[7],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 4. Individual USER 1: Ramen Tonkotsu Especial (Ramen Ramon)
//       new Comanda({
//          id: "linea_004",
//          plato: platos[0],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 5. Individual USER 1: Mochi de Chocolate y Avellana (Aloha Bowl)
//       new Comanda({
//          id: "linea_005",
//          plato: platos[9],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 6. Individual USER 2: Smash Burger Doble Bacon (Burger Queen)
//       new Comanda({
//          id: "linea_006",
//          plato: platos[4],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 7. Individual USER 2: Patatas Gajo con Queso y Jalapeños (Burger Queen)
//       new Comanda({
//          id: "linea_007",
//          plato: platos[5],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 8. Individual USER 3: Tacos al Pastor (Cantina Norte)
//       new Comanda({
//          id: "linea_008",
//          plato: platos[6],
//          cantidad: 1,
//          usuarioId: null,
//          esCompartido: false
//       }),

//    // 9. Individual USER 3: Poke Bowl de Salmón y Mango (Aloha Bowl)
//       new Comanda({
//          id: "linea_009",
//          plato: platos[8],
//          cantidad: 1,
//          usuarioId: "null",
//          esCompartido: false
//       }),

//    // 10. Individual USER 3: Burrata con Tomate Seco (La Trattoria)
//    new Comanda({
//       id: "linea_010",
//       plato: platos[3],
//       cantidad: 1,
//       usuarioId: null,
//       esCompartido: false
//    })
// ];

// Para CHANGELOG.md
// -----------------
// Q: 
// Explicame la conectividad de la id del plato en detalle como se ha planteado en la clase.
// class Plato {
//    constructor({ id, nombre, descripcion, imagenUrl, precio, tipo, sitio, etiquetas = [] }) {
//       this.id = id; // String
//       this.nombre = nombre; // String
//       this.descripcion = descripcion; // String
//       this.imagenUrl = imagenUrl; // String
//       this.precio = precio; // Number
//       this.tipo = tipo; // String
//       this.sitio = sitio; // String
//       this.etiquetas = etiquetas; // String array
//    }
// }
// Para uso en una base de datos NoSQL (MongoDB). Como enlazo las id de plato a las id generadas en Mongo?
// 
// A:
// Para conectar tu clase Plato (donde manejas una propiedad this.id de tipo String) con las claves nativas generadas por MongoDB (que usa _id de tipo ObjectId), 
// necesitas establecer un puente de conversión en ambas direcciones: cuando los datos viajan de MongoDB hacia tu aplicación (lectura) y cuando viajan de tu aplicación hacia MongoDB (escritura).
// 1. El problema técnico: this.id (String) vs _id (ObjectId)
// En tu frontend o lógica de negocio de Fooddie, tu clase espera recibir un campo llamado id como texto plano ("673e1a2b4f1a2c001c8e4b1a"). Sin embargo, MongoDB tiene dos particularidades:
//    Nombre del campo: MongoDB siempre nombra a su clave primaria _id (con guion bajo).
//    Tipo de dato: En la base de datos no es un texto, sino un objeto binario especial llamado ObjectId. Cuando viaja por red en formato JSON (desde una API REST), ese ObjectId se serializa automáticamente a un String, 
//    pero sigue conservando el nombre de propiedad _id.

// Voy a poner los registros con la id normal. Aun con esta explicación no entiendo como sería la conectividad con Mongo y lo dejaré para mas adelante.
