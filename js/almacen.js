const PREFIJO = "fooddie_";

function leer(coleccion) {
   const texto = localStorage.getItem(PREFIJO + coleccion);

   if (texto === null) {
      return [];
   }

   return JSON.parse(texto);
}

function guardar(coleccion, lista) {
   localStorage.setItem(PREFIJO + coleccion, JSON.stringify(lista));
}

function generarId(coleccion) {
   const aleatorio = Math.floor(Math.random() * 1000);
   return coleccion + "_" + Date.now() + "_" + aleatorio;
}

export function obtenerTodos(coleccion) {
   return leer(coleccion);
}


export function obtenerPorId(coleccion, id) {
   const lista = leer(coleccion);
   const encontrado = lista.find((elemento) => elemento.id === id);

   if (encontrado === undefined) {
      return null;
   }

   return encontrado;
}


export function crear(coleccion, dato) {
   const lista = leer(coleccion);
   const nuevo = Object.assign({}, dato, { id: generarId(coleccion) });

   lista.push(nuevo);
   guardar(coleccion, lista);

   return nuevo;
}

export function actualizar(coleccion, id, dato) {
   const lista = leer(coleccion);
   const posicion = lista.findIndex((elemento) => elemento.id === id);

   if (posicion === -1) {
      return null;
   }

   const actualizado = Object.assign({}, lista[posicion], dato, { id: id });

   lista[posicion] = actualizado;
   guardar(coleccion, lista);

   return actualizado;
}

export function borrar(coleccion, id) {
   const lista = leer(coleccion);
   const restantes = lista.filter((elemento) => elemento.id !== id);

   if (restantes.length === lista.length) {
      return false;
   }

   guardar(coleccion, restantes);
   return true;
}