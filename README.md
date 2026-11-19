# Fooddie - Aplicación de gestión de platos y reparto de costes.

Decidir dónde comer en grupo y dividir la cuenta al final suelen ser los dos momentos más tediosos de cualquier reunión. **Fooddie** soluciona ambos problemas mediante colecciones personalizables de platos/lugares y dos dinámicas colaborativas diseñadas para grupos de comensales.

Esta es una herramienta de gestión, organización y cálculo; no realiza venta directa.

#### [Sección de Diseño de Interfaces Web](#diseño-interfaces-web)
#### [Sección Desarrollo Web en Entorno Cliente](#desarrollo-web-en-entorno-cliente)

## Propuesta de Valor

**Fooddie** transforma el eterno dilema de "¿Qué pedimos?" y la frustración del **análisis-parálisis** en un juego rápido, colaborativo y sin fricciones.

Frente a la parálisis por indecisión y la inercia de pedir siempre lo mismo por comodidad, nuestra aplicación actúa como un facilitador social estructurado:

#### Adiós al Análisis-Parálisis:

Centraliza las opciones en colecciones ordenadas y filtrables (`tema-*`, `plato-*`, `sitio-*`). Cuando el grupo se bloquea, el **Sorteo de Platos (el "dado")** toma la decisión por vosotros de forma lúdica y justa, eliminando la carga mental de decidir.

#### Rompe la monotonía:

Te anima a explorar y alternar entre tus platos guardados o propuestas nuevas, sacándote de la rutina de pedir siempre el mismo plato por inercia.

#### Consenso sin discusiones:

Permite que cada comensal aporte su sugerencia al grupo en segundos, democratizando la elección del lugar o la temática de la comida.

#### Cuentas claras desde el minuto uno:

Una vez decidido el plan, olvídate de las matemáticas complejas al final. El Reparto de Gastos automatiza de forma transparente lo que consume cada uno frente a lo que se comparte (como unos entrantes o una botella al centro), calculando la cifra exacta que debe pagar cada comensal sin malentendidos ni discusiones posteriores.

## El MVP de Fooddie

En el MVP se van a abordar 2 funcionalidades principales de la aplicación web en este proyecto.

### Modo A: Sorteo de Platos / Lugares

Cuando el grupo aún no sabe qué comer: 
- Cada comensal propone una opción (un tema, un plato genérico o un establecimiento concreto).
- Lanzamiento de "Dado": El sistema selecciona de forma aleatoria una de las propuestas del grupo para tomar la decisión final sin discusiones.

### Modo B: Reparto de Gastos (División de Cuenta)

Una vez que el grupo ya está comiendo o ha decidido el pedido:  
- Cuentas individuales: Cada comensal añade los artículos que ha consumido de forma personal.
- Cuenta conjunta: Espacio común para añadir artículos compartidos (ej. *nachos al centro, botella de agua grande*), cuyo costo se divide equitativamente entre todos los integrantes.
- Desglose transparente: Cálculo automático de `Gasto Individual + Parte Proporcional Conjunta`, mostrando la cifra exacta que debe pagar cada persona.

## Funcionalidades que no estan en MVP

### Gestión de Colecciones y Etiquetado - **Listas personalizadas:**

Crea y organiza tus propias colecciones de platos, comidas o restaurantes favoritos. **Sistema de etiquetas (Tags):** Filtra tus listas rápidamente utilizando prefijos y categorías: `tema-*` (ej. `tema-asiático`, `tema-vegano`) `plato-*` (ej. `plato-pizza`, `plato-hamburguesa`) `sitio-*` (ej. `sitio-bar_paco`)

# Diseño Interfaces Web

Diseñar consiste en solucionar un problema de una manera concreta. La parte estética es importante, pero cuando no resuelve ningún problema se queda en simple decoración. Diseño de Interfaces Web forma parte de un campo más amplio, el **diseño de producto digital**, que se ocupa de pensar y construir aplicaciones y webs que resuelvan problemas reales de las personas que las usan.

Diseño de Interfaces Web se ocupa sobre todo de una parte de esa disciplina, la que tiene que ver con la experiencia de uso y con la interfaz (es decir, con todo lo que la persona ve y toca en la pantalla), y abarca desde la investigación con usuarios hasta la maquetación del diseño con código. Las decisiones de negocio y buena parte de la arquitectura técnica del proyecto se trabajan en los módulos con los que nos coordinamos (DAW, DWEC y DWES).

#### El trabajo de esta asignatura se estructura en Órbitas. El seguimiento del trabajo realizado en cada una de estas órbitas se puede consultar en [BRIEF.md](docs/BRIEF.md)

## Órbita 1 - Conocer a las personas

En esta primera órbita todavía no nos ocupamos del aspecto de la aplicación. Antes de decidir cómo se ve, cualquier producto digital tiene que responder a unas preguntas básicas, como quién lo va a usar, qué problema tiene esa persona y qué pasos dará dentro de la aplicación para resolverlo. Se va a investigar cómo contestarlas con datos reales, hablando con gente que vive ese problema, con lo que se averigüa la estructura de tu proyecto.

## Órbita 2 - Fundar el sistema visual

En esta órbita se decide su aspecto, es decir, los colores, las tipografías, los iconos, los espacios entre elementos y la forma de los botones y las tarjetas, y para hacerlo con criterio se aprende antes cómo lee una persona una pantalla y qué patrones de interfaz ya conoce.

## Órbita 3 - Maquetar para dar forma

Maquetación en HTML y Sass de la aplicación: las pantallas del Happy Path diseñadas en la Órbita 2 y las que se necesiten para las funcionalidades que se añadan con Javascript en DWEC. Con tokens de Figma convertidos en propiedades personalizadas.

# Desarrollo Web en Entorno Cliente

El proyecto está construido sobre el stack **MERN** (**M**ongoDB, **E**xpress.js, **R**eact, **N**ode.js), poniendo un énfasis especial en la arquitectura y la experiencia de usuario dentro del **entorno cliente**:

- **Interfaz Reactiva (React):** Construcción de una *Single Page Application* (SPA) modular basada en componentes reutilizables (tarjetas de platos, listas dinámicas, selector de grupos y calculadora de cuentas).
- **Gestión de Estado y Reactividad:** Actualización en tiempo real de los filtros por etiquetas (`tema-`, `plato-`, `sitio-`), resultado del lanzamiento del dado y el recálculo instantáneo del desglose de gastos individuales y conjuntos sin recargar la página.
- **Comunicación Asíncrona (API REST):** Consumo eficiente de los endpoints desarrollados en **Node.js / Express** para sincronizar las propuestas de cada comensal dentro del grupo y persistir las colecciones de platos en **MongoDB**.

## Hito 1 - Proyecto preparado, menú, listado y detalle

### Backlog:

La lista de funcionalidades del proyecto, partida en piezas pequeñas y ordenada por prioridad.

- El usuario puede crear y acceder a una cuenta.

- El usuario puede crear una "sesión", entendiendo como sesión no el uso de la cuenta de usuario en si, sino de una orden de comida, ya sea a domicilio o en el establecimiento.

- El usuario puede añadir comensales a la orden de comida.

- Los comensales puede hacer uso de unas etiquetas para proponer un sitio o un tema de comida.

- Se puede realizar un sorteo con las opciones propuestas.

- El usuario puede añadir platos a esta orden. Los platos aparecerán identificados por etiquetas por los que serán filtrados y los usuarios irán etiquetando los platos a la vez de los añaden.

- Los platos añadidos se adjudican a usuarios en concreto o se asignan a una cuenta en común.

- El precio de los platos y la cantidad correspondiente que tenga que pagar cada uno de los comensales se actualiza automaticamente.

- El usuario puede descubrir y navegar por ciertas colecciones de platos creadas por otros usuarios.

- El usuario puede crear sus poprias colecciones a modo de lista de deseados o para hacer las ordenes mas rápidamente en un futuro.

### **Mapa de pantallas:**

Que vistas tiene la app y que datos muestra cada una.

### Login

   Encabezado / Bienvenida: Título "BIENVENIDO A FOODDIE" y un texto descriptivo de bienvenida. 

   Formulario de acceso: Campos de entrada para usuario y contraseña, mensaje de aviso de error ("Usuario o contraseña incorrectos") y botón "ACCEDER".

   Opciones adicionales y registro: Tres bloques cuadrados de colores (rojo, azul y naranja), enlace "¿No tienes cuenta? Regístrate" y una insignia/sello decorativo rojo en el lateral derecho.

### Menú principal

   Barra superior (Header): Logo de Fooddie, barra de búsqueda redondeada, iconos de acción (compartir, historial, avisos, modo nocturno), saludo "Bienvenido/a, usuario", menú hamburguesa y foto de perfil.

   Novedades: Sección "Descubre lo nuevo en comida (tag)" con cuatro tarjetas de contenido (imagen superior, título y texto descriptivo) y controles laterales para avanzar o retroceder.

   Accesos directos principales: Tres tarjetas grandes con imagen y título en mayúsculas: "ORGANIZAR PEDIDO", "DECIDIR COMIDA" y "MIS COLECCIONES".

   Comunidad: Sección "Colecciones destacadas de la comunidad" con cuatro tarjetas en cuadrícula.

   Pie de página (Footer): Enlace "Política de cookies" y aviso de copyright "© 2026 Cádiz".

### Organizar pedido

   Barra superior y Footer: Mantienen la misma estructura de navegación y cierre que el menú principal.   

   Columna de PLATOS (izquierda): Listado de platos añadidos al pedido con fotografía, título, detalles (tipo-*, sitio-*) y cantidad.   

   Columna de COMENSALES (derecha): Resumen de GRUPO (PLATOS:, PRECIO TOTAL, PRECIO POR PERSONA), desglose por usuario (USER 1, USER 2, USER 3 con PLATOS:, PRECIO INDIVIDUAL y PRECIO + GRUPO), botón de eliminar (✕), botón + para añadir comensales y el código del grupo.

   Acciones y sugerencias: Botón central + para añadir elementos y bloque inferior "Quizas te interese" con cuatro tarjetas.   

### Decidir comida

   Barra superior y Footer: Misma estructura general. 

   Columna de ideas y sorteo (izquierda): Título "AÑADE IDEAS Y HACED SORTEO" con subtítulo explicativo ("Podéis seguir haciendo sorteos hasta que os pongáis de acuerdo en qué pedir") y tarjetas de ideas con imagen, título, descripción y contador.

   Columna de COMENSALES (derecha): Lista de participantes, botón de eliminar, botón + para añadir y código del grupo. 

   Acciones y sugerencias: Botón central + y sección "Quizas te interese" con cuatro tarjetas.   

### Mis colecciones

   Barra superior y Footer: Misma estructura de cabecera y pie de página.  

   Sección MIS COLECCIONES: Título, subtítulo descriptivo y cuadrícula de tarjetas de colección ("Colección n") con etiquetas (etiqueta-1 a etiqueta-4), botón "ver mas" y una tarjeta con icono + para crear una nueva colección.  

   Sección Colecciones de la comunidad: Encabezado con etiqueta de filtro activa ("etiqueta 1"), selector "añadir filtro:" con campo de búsqueda y una fila inferior de cuatro tarjetas de colecciones.  
