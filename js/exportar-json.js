import { platos, comandas } from './datos.js';

const btnExportarPlatos = document.getElementById('btn-exportar-platos');
const btnExportarLineas = document.getElementById('btn-exportar-lineas');

function descargarJSON(datos, nombreArchivo) {
  const contenido = JSON.stringify(datos, null, 2);
  const blob = new Blob([contenido], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = nombreArchivo;

  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);;
}

if (btnExportarPlatos) {
  btnExportarPlatos.addEventListener('click', () => {
    descargarJSON(platos, 'platos.json');
  });
}

if (btnExportarLineas) {
  btnExportarLineas.addEventListener('click', () => {
    descargarJSON(comandas, 'comandas.json');
  });
}