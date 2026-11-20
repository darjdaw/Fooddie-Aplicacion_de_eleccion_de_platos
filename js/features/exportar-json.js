import { platos, lineasPedido } from './datos.js';

function descargarJSON(nombreArchivo, datos) {
  const contenido = JSON.stringify(datos, null, 2);
  const blob = new Blob([contenido], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = nombreArchivo;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(url), 1000);

  // Liberamos la URL temporal de memoria
  URL.revokeObjectURL(url);
}

// Conectamos los botones si existen en la página
const btnPlatos = document.getElementById('btn-exportar-platos');
const btnLineas = document.getElementById('btn-exportar-lineas');

if (btnPlatos) {
  btnPlatos.addEventListener('click', () => {
    descargarJSON('platos.json', platos);
  });
}

if (btnLineas) {
  btnLineas.addEventListener('click', () => {
    descargarJSON('lineasPedido.json', lineasPedido);
  });
}