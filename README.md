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

| Funcionalidad | Prioridad | Estado |
| :--- | :---: | :---: |
| Como comensal, quiero añadir platos a la orden asignándoles etiquetas para filtrarlos fácilmente. | Alta | Hecho |
| Como comensal, quiero adjudicar los platos añadidos a un usuario concreto o a una cuenta en común. | Muy Alta | Pendiente |
| Como comensal, quiero que el precio de los platos y el total a pagar por cada persona se actualice automáticamente. | Muy Alta | Pendiente |
| Como usuario, quiero poder crear una "sesión" (orden de comida) indicando si es a domicilio o en establecimiento, para iniciar un pedido grupal. | Alta | Pendiente |
| Como creador de la sesión, quiero poder añadir comensales a la orden de comida para organizar el pedido de forma colaborativa. | Alta | Pendiente |
| Como usuario, quiero consultar, editar y borrar usuarios registrados. | Alta | En desarrollo |
| Como usuario, quiero enviar consultas, sugerencias o incidencias mediante un formulario de contacto. | Alta | Hecho |
| Como usuario, quiero poder crear una cuenta e iniciar sesión para acceder a mis pedidos y guardar mi información. | Alta | Pendiente |
| Como comensal, quiero poder usar etiquetas para proponer restaurantes o temáticas de comida dentro de la sesión. | Media | Pendiente |
| Como comensal, quiero poder realizar un sorteo aleatorio entre las opciones propuestas para decidir dónde o qué pedir. | Media | Pendiente |
| Como usuario, quiero poder crear mis propias colecciones de platos (listas de deseados o favoritos) para agilizar futuros pedidos. | Baja | Pendiente |
| Como usuario, quiero poder explorar y navegar por colecciones de platos creadas por otros usuarios para descubrir nuevas opciones. | Baja | Pendiente |
| Como usuario, poder indicar mis alergias y que queden reflejadas en mi perfil para evitar problemas al hacer pedidos | Baja | Hecho |

### **Mapa de pantallas:**

Que vistas tiene la app y que datos muestra cada una.

```text
Fooddie
├── 1. Acceso / Autenticación (Login)
│   ├── Encabezado de bienvenida ("BIENVENIDO A FOODDIE" + texto descriptivo)
│   ├── Formulario de acceso (usuario, contraseña, aviso de error, botón "ACCEDER")
│   ├── Opciones adicionales (3 bloques de color rojo, azul y naranja, sello decorativo)
│   └── Enlace a registro ("¿No tienes cuenta? Regístrate")
│
└── 2. Menú Principal (Hub)
    ├── [Global] Barra Superior (Header)
    │   ├── Logo de Fooddie
    │   ├── Barra de búsqueda redondeada
    │   ├── Acciones rápidas (compartir, historial, avisos, modo nocturno)
    │   └── Perfil ("Bienvenido/a, usuario", menú hamburguesa, foto de perfil)
    │
    ├── Novedades ("Descubre lo nuevo en comida (tag)")
    │   ├── Carrusel de 4 tarjetas (imagen, título, descripción)
    │   └── Controles laterales (anterior / siguiente)
    │
    ├── Accesos Directos Principales
    │   ├── 2.1. Organizar Pedido
    │   │   ├── Columna izquierda — PLATOS (lista con foto, título, "tipo-*", "sitio-*", cantidad)
    │   │   ├── Columna derecha — COMENSALES
    │   │   │   ├── Resumen GRUPO (PLATOS:, PRECIO TOTAL, PRECIO POR PERSONA)
    │   │   │   ├── Desglose por comensal (USER 1, USER 2, USER 3: PLATOS:, PRECIO INDIVIDUAL, PRECIO + GRUPO, botón ✕)
    │   │   │   └── Gestión de grupo (botón + añadir comensal, código del grupo)
    │   │   ├── Acción central (botón + añadir elementos)
    │   │   └── Sugerencias ("Quizás te interese" — 4 tarjetas)
    │   │
    │   ├── 2.2. Decidir Comida
    │   │   ├── Columna izquierda — Ideas y Sorteo ("AÑADE IDEAS Y HACED SORTEO" + subtítulo)
    │   │   │   └── Tarjetas de ideas (imagen, título, descripción, contador)
    │   │   ├── Columna derecha — COMENSALES (participantes, eliminar, + añadir, código del grupo)
    │   │   ├── Acción central (botón +)
    │   │   └── Sugerencias ("Quizás te interese" — 4 tarjetas)
    │   │
    │   └── 2.3. Mis Colecciones
    │       ├── MIS COLECCIONES (título, subtítulo descriptivo)
    │       │   ├── Cuadrícula "Colección n" (etiqueta-1 a etiqueta-4, botón "ver más")
    │       │   └── Tarjeta crear colección (icono +)
    │       └── Colecciones de la Comunidad
    │           ├── Filtros (etiqueta activa "etiqueta 1", selector "añadir filtro:" + buscador)
    │           └── Fila de 4 tarjetas de colecciones
    │
    ├── Comunidad ("Colecciones destacadas de la comunidad" — cuadrícula de 4 tarjetas)
    │
    └── [Global] Pie de Página (Footer)
        ├── Enlace "Política de cookies"
        └── Aviso de copyright ("© 2026 Cádiz")
```

## Hito 2 - formularios, validación y guardado

[Actualizaciones en Backlog](###backlog:)

### **Mapa de validación**

#### Formulario de registro

| Campo | Regla | Mensaje de error |
| :--- | :--- | :--- |
| Nombre de usuario | Obligatorio, mínimo 3 caracteres (sin contar espacios de los extremos), máximo 20 (`maxlength`) | El nombre de usuario debe tener al menos 3 caracteres |
| Correo electrónico | Obligatorio, formato válido con expresión regular, máximo 100 (`maxlength`) | El correo electrónico es obligatorio / El correo electrónico no es válido, comprueba los caracteres y el formato |
| Contraseña | Mínimo 8 caracteres, una mayúscula y un número. No se pide al editar y no se guarda | La contraseña debe tener al menos 8 caracteres / ...al menos una letra mayúscula / ...al menos un número |
| Repetir contraseña | No vacío y coincide con la contraseña | Repite la contraseña / Las contraseñas no coinciden |
| Fecha de nacimiento | Obligatoria, no futura (el `max` del campo se pone con la fecha de hoy) y edad mínima de 14 años | La fecha de nacimiento es obligatoria / ...no puede ser futura / Debes tener al menos 14 años para registrarte |
| Alergias | Solo obligatorio si la casilla «Tengo alergias o intolerancias» está marcada | Necesitas indicar qué alergias tienes |
| Condiciones | La casilla debe estar marcada | Debes aceptar las condiciones para continuar |

#### Formulario de contacto

| Campo | Regla | Mensaje de error |
| :--- | :--- | :--- |
| Nombre | Mínimo 2 caracteres, máximo 50 (`maxlength`) | El nombre debe tener al menos 2 caracteres |
| Correo electrónico | Igual que en el registro | Igual que en el registro |
| Motivo | Hay que elegir una opción distinta de «Elige un motivo» | Elige un motivo de contacto |
| Mensaje | Entre 10 y 500 caracteres. Los límites se leen de `minlength` y `maxlength` del HTML | El mensaje debe tener al menos 10 caracteres / El mensaje no puede superar los 500 caracteres |

### Qué se ha hecho

- **Capa de datos (`almacen.js`):** módulo con `obtenerTodos`, `obtenerPorId`, `crear`, `actualizar` y `borrar`. Es el único archivo que toca `localStorage`. Cada colección (`usuarios`, `mensajes`) se guarda como un array de objetos con el prefijo `fooddie_`.
- **Validación (`validacion.js`):** cada función recibe un valor y devuelve el mensaje de error o `null`. Los dos formularios usan las mismas funciones.
- **Formulario de registro:** nombre de usuario, correo, contraseña, repetir contraseña, fecha de nacimiento, alergias (opcional) y aceptación de condiciones. El mismo formulario sirve para crear y para editar.
- **Vista «Usuarios»:** lista los usuarios registrados con botones para editar y borrar.
- **Formulario de contacto:** nombre, correo, motivo y mensaje con contador de caracteres. Recuerda nombre y correo del último envío en una cookie.
- **Vista «Mensajes enviados»:** lista los mensajes con un botón para borrar cada uno.
- **Comportamiento común (`formularios.js`):** los campos se validan al salir de ellos y, una vez tocados, mientras se escribe. Los errores aparecen junto a cada campo con `aria-invalid` y `aria-describedby`. Al enviar se muestran todos los errores y el foco va al primer campo con error.

### Decisiones tomadas

- **La contraseña no se guarda.** Se valida en el formulario, pero nunca entra en el objeto que se almacena, porque no se debe guardar en claro en el navegador. Por eso tampoco se pide al editar un usuario.
- **Edad mínima de 14 años.** Es la edad a partir de la cual en España se puede consentir el tratamiento de datos personales. Está en una constante (`EDAD_MINIMA`) y se cambia en un solo sitio.
- **Páginas separadas.** Cada formulario y cada vista es una página HTML, igual que en el resto del proyecto.
- **Delegación de eventos.** Hay un único `click` en cada lista que decide la acción con `data-accion` y `data-id`. No hay `onclick` en el HTML.

### Qué me ha costado más

- **Todo lo referente a alergias:**  los `import` y `export` necesarios entre archivos, y las llamadas a las funciones con los valores correctos. Fue lo más complejo del hito.
- **El borrado con delegación:** conseguir que los botones se pintaran y funcionaran con un único `click` en la lista me costó bastante.

### Uso de IA.

Lectura del proyecto: si podía leer repositorios locales y archivos .zip o .rar, y la revisión de la estructura de Fooddie.
Validaciones: Corrección de su error de sintaxis y el cambio de "" a null.
Registro: registro.html, el guardado sin contraseña y los errores de carga de registro.js.
Contacto: contacto.html sin teléfono, el cambio de motivos y el guardado.
Vistas: «Usuarios» con edición y «Mensajes enviados».
Validación en el formulario: errores junto a cada campo, la cookie del contacto y el vaciado del formulario tras guardar.
Borrar: delegación de eventos.
Alergias: el bloque de HTML roto, la validación y el guardado.
Revisiones del proyecto: varias pasadas con distintos zips para buscar y corregir errores.
