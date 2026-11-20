export function abrirFichaPlato(comanda) {
   const fichaAnterior = document.getElementById('ficha-plato-overlay');
   if (fichaAnterior) {
      fichaAnterior.remove();
   }

   const { plato } = comanda;

   const overlay = document.createElement('div');
   overlay.id = 'ficha-plato-overlay';
   overlay.className = 'ficha-overlay';

   const ficha = document.createElement('article');
   ficha.className = 'ficha-plato';

      const btnCerrar = document.createElement('button');
   btnCerrar.type = 'button';
   btnCerrar.className = 'ficha-cerrar';
   btnCerrar.textContent = '×';
   btnCerrar.setAttribute('cerrar-ficha', 'Cerrar ficha del plato');
   btnCerrar.addEventListener('click', () => {
      overlay.remove();
   });

   ficha.appendChild(btnCerrar);

   if (plato.imagenUrl) {
      const img = document.createElement('img');
      img.className = 'ficha-imagen';
      img.src = plato.imagenUrl;
      img.alt = plato.nombre;
      ficha.appendChild(img);
   }

   const nombre = document.createElement('h2');
   nombre.className = 'ficha-titulo';
   nombre.textContent = plato.nombre;

   const sitioYTipo = document.createElement('p');
   sitioYTipo.className = 'ficha-meta';
   sitioYTipo.textContent = `${plato.sitio} · ${plato.tipo}`;

   const precio = document.createElement('p');
   precio.className = 'ficha-precio';
   precio.textContent = `Precio: ${plato.precio.toFixed(2)} €`;

   const descripcion = document.createElement('p');
   descripcion.className = 'ficha-descripcion';
   descripcion.textContent = plato.descripcion;

   ficha.appendChild(nombre);
   ficha.appendChild(sitioYTipo);
   ficha.appendChild(precio);
   ficha.appendChild(descripcion);

   if (Array.isArray(plato.etiquetas) && plato.etiquetas.some((etiqueta) => etiqueta)) {
      const contenedorEtiquetas = document.createElement('div');
      contenedorEtiquetas.className = 'ficha-etiquetas';

      plato.etiquetas.forEach((etiqueta) => {
         if (etiqueta) {
         const chip = document.createElement('span');
         chip.className = 'ficha-etiqueta';
         chip.textContent = `#${etiqueta}`;
         contenedorEtiquetas.appendChild(chip);
         }
      });

      ficha.appendChild(contenedorEtiquetas);
   }

   overlay.appendChild(ficha);
   document.body.appendChild(overlay);
}