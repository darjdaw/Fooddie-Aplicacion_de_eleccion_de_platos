Documentación de uso de IA en el proyecto

# DIW

### Usuario con diversidad funcional
    Planteame un perfil de uso de una persona con diversidad funcional usando una aplicacion de organizacion de pedidos de comida en grupo. Edad, tipo de diversidad
    funcional y plantea brevemente desafíos que esta persona tendrá que afrontar a usar una aplicación móvil sea cual sea su objetivo.

### Tabla restricciones
    Prompt:  Las restricciones, que son los límites con los que tienes que trabajar: los tecnológicos (los del proyecto que coordinamos con DWEC y DWES),
    los de tiempo y los que imponen tus propias personas, como los dispositivos que usan, la conexión a internet que tienen o las tecnologías de apoyo que necesitan.
    Incluye también al menos una restricción ambiental, por ejemplo un peso máximo por página pensado para la persona que tiene peor conexión.
    
    Plantéame una plantilla de restricciones en base a estos criterios, de forma breve y sin entrar en mucho detalle, siendo posible analizarla en menos de 1 minuto 


### Modo oscuro
     Prompt: Usando como referencia la variable que he creado de la pantalla principal en modo oscuro, compárala con la versión original y define las variables para us reutilización.


### Reset, estilos de etiquetas, objetos
Escribe el reset, los estilos de las etiquetas y los objetos (contenedor, pila, cuadrícula). A que se refiere con eso? redactame un ejemplo y comparámelo con estas pantallas (Captura de pantalla de una pantalla principal)

# DWEC

### Entidades plato y comanda

Q: 
como plantearias luego la implementacion de esta clase plato en la gestion de orden del pedido? 
ahi se podria pedir varias veces el plato, y habria que determinar quien lo pide, cantidad, si es compartido no. 
Como lo deberia hacer, creeando otra entidad que herede de plato? 
A: 
No conviene usar herencia (extends Plato) en este caso, sino composición (crear una clase separada que contenga una referencia al Plato).
Si heredaras de Plato, estarías duplicando todos los datos del producto (nombre, foto, descripción, restaurante) cada vez que un usuario distinto lo pida o cambie la cantidad. 
En cambio, al separar el catálogo (Plato) de la línea del pedido (Comanda), mantienes los datos limpios y evitas inconsistencias si el precio o el nombre del plato cambian.

Entidad Comanda como instancia de plato, como aparecería representada al añadir un plato a un pedido, pudiendo ser añadido mas de una vez y asignándole comensales.

### id de plato y uso de Mongo

Q: 
Explicame la conectividad de la id del plato en detalle como se ha planteado en la clase.
class Plato {
   constructor({ id, nombre, descripcion, imagenUrl, precio, tipo, sitio, etiquetas = [] }) {
      this.id = id; String
      this.nombre = nombre; String
      this.descripcion = descripcion; String
      this.imagenUrl = imagenUrl; String
      this.precio = precio; Number
      this.tipo = tipo; String
      this.sitio = sitio; String
      this.etiquetas = etiquetas; String array
   }
}
Para uso en una base de datos NoSQL (MongoDB). Como enlazo las id de plato a las id generadas en Mongo?

A:
Para conectar tu clase Plato (donde manejas una propiedad this.id de tipo String) con las claves nativas generadas por MongoDB (que usa _id de tipo ObjectId), 
necesitas establecer un puente de conversión en ambas direcciones: cuando los datos viajan de MongoDB hacia tu aplicación (lectura) y cuando viajan de tu aplicación hacia MongoDB (escritura).
El problema técnico: this.id (String) vs _id (ObjectId)
En tu frontend o lógica de negocio de Fooddie, tu clase espera recibir un campo llamado id como texto plano ("673e1a2b4f1a2c001c8e4b1a"). Sin embargo, MongoDB tiene dos particularidades:
   Nombre del campo: MongoDB siempre nombra a su clave primaria _id (con guion bajo).
   Tipo de dato: En la base de datos no es un texto, sino un objeto binario especial llamado ObjectId. Cuando viaja por red en formato JSON (desde una API REST), ese ObjectId se serializa automáticamente a un String, 
   pero sigue conservando el nombre de propiedad _id.



