import { comandas, platos, Comanda } from '../datos.js';
import { abrirFichaPlato } from './mostrar-mas.js';

const btnAnadirPlato = document.getElementById('btn-anadir-plato');
const selectorPlatos = document.getElementById('selector-platos');
const contenedorComandas = document.getElementById('listado-comandas');

function vaciarContenedor(elemento) {
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function renderizarComandas() {
  if (!contenedorComandas) return;

  vaciarContenedor(contenedorComandas);

  comandas.forEach((comanda, indice) => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'comanda-card';

    const titulo = document.createElement('h2');
    titulo.textContent = comanda.plato.nombre;

    const usuario = document.createElement('p');
    const destino = comanda.esCompartido ? 'Grupo' : comanda.usuarioId;
    usuario.textContent = `Usuario: ${destino}`;

    const cantidad = document.createElement('p');
    cantidad.textContent = `Cantidad: ${comanda.cantidad}`;

    const btnMas = document.createElement('button');
    btnMas.type = 'button';
    btnMas.className = 'btn-mostrar-mas';
    btnMas.textContent = 'Mostrar más';
    btnMas.dataset.indice = indice;

    btnMas.addEventListener('click', () => {
      console.log("mostrar mas");
      abrirFichaPlato(comanda);
    });


    tarjeta.appendChild(titulo);
    tarjeta.appendChild(usuario);
    tarjeta.appendChild(cantidad);
    tarjeta.appendChild(btnMas);

    contenedorComandas.appendChild(tarjeta);
  });
}

function anadirAlPedido(plato) {
  const nuevaComanda = new Comanda({
    id: `linea_${Date.now()}`,
    plato,
    cantidad: 1,
    usuarioId: 'user_1',
    esCompartido: false
  });

// Propuesta futura: si el plato ya está en el pedido, aumentar su cantidad
// en lugar de crear una nueva tarjeta de comanda:
//
//---------------------------------------------------------------------------
//
// const comandaExistente = comandas.find(
//   (comanda) => comanda.plato.id === plato.id
// );
//
// if (comandaExistente) {
//   comandaExistente.cantidad ++;
//   renderizarComandas();
//   return;
// }
// --------------------------------------------------------------------------
// Por que no lo he añadido ya?
// Porque no se hasta que punto puedo ahora mismo agrupar platos, sin saber exactamente a que usuario van.
// Antes de añadir esta función, me gustaría ver como se debería abordar. De primeras supongo que se podría comparar el user.id al igual que comparamos plato.id
// Para así agruparlos si realmente los ha pedido el mismo comensal.


  comandas.push(nuevaComanda);
  renderizarComandas();
}

function toggleMenuPlatos() {
  if (!selectorPlatos) return;

  if (selectorPlatos.firstChild) {
    vaciarContenedor(selectorPlatos);
    return;
  }

  const lista = document.createElement('ul');
  lista.className = 'lista-platos-desplegable';

  platos.forEach((plato) => {
    const item = document.createElement('li');
    item.className = 'item-plato-desplegable';

    const nombre = document.createElement('span');
    nombre.textContent = plato.nombre;

    const btnSeleccionar = document.createElement('button');
    btnSeleccionar.type = 'button';
    btnSeleccionar.textContent = 'Añadir';

    btnSeleccionar.addEventListener('click', () => {
      anadirAlPedido(plato);
      vaciarContenedor(selectorPlatos);
    });

    item.appendChild(nombre);
    item.appendChild(btnSeleccionar);
    lista.appendChild(item);
  });

  selectorPlatos.appendChild(lista);
}

if (btnAnadirPlato) {
  btnAnadirPlato.addEventListener('click', toggleMenuPlatos);
}

renderizarComandas();