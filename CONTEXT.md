# Clonar la página de Airbnb

*El proceso de generación de este context.md ha pasado por dos fases:

1. He escrito el primer texto que vemos abajo recorriendo la página de Airbnb para captar todos los detalles posibles.
2. Usando el prompt que adjunto a continuación le pido crear el definitivo, a fin de mejorar la comunicación, resultando en el context.md que hay abajo del todo

"Tengo que hacer un clon de la página de Airbnb para un ejercicio de programación, y el procedimiento es pasarle capturas al agente y que me genere un context.md con las especificaciones y descripciones que debo darle a un agente de IA para que me cree la página desde 0. Antes de pasarte las capturas voy a pasarte el context.md que he escrito yo, para que lo tengas de referencia en algunas cosas. Te pongo en contexto:
Estamos aprendiendo a crear páginas web usando React y la idea de esto es ser capaz de visualizar y separar los componentes de una página  web a la hora de poder reutilizarlos en el mismo código mediante React y Next.js 16. Debe ser una estructura muy simple, que conecte tres vistas de la web, Inicio, Catálogo y Room, y es importante que los elementos que aparecen en el context que voy a pasarte tengan interactividad y se parezcan lo más posible a las capturas. Lo único que necesito es el context.md. Las restricciones a seguir serían las siguientes:

El proyecto debe usar únicamente tecnologías de Next.js con Typescript, Tailwind Css y app router, y los componentes deben tener el html con tailwind
Cada componente que resulte de pasarle el context.md a un agente no debe ocupar más de 80 lineas de código
El campo de búsqueda debe usar useState para guardar el texto escrito y filtrar las tarjetas visibles en tiempo real mientras el usuario escribe.
Los filtros deben de tener su imagen correspondiente en un tamaño igual o similar
Se debe usar useEffect para simular la carga de los datos cuando la página se monta, empieza con una lista vacía, pone el estado de carga en true y tras un setTimeout (0,5 segundos) asigna datos y marca la carga como false. Esto se cumple siempre que se cambie de vista
En el catálogo hay un mapa, este debe ser real e interactivo usando la librería react-leaflet
La tarjeta del room debe ser funcional, añadiendo campos de entradda y salida usando la librería de date picker y calcula el precio total en función del número de noches seleccionadas
La barra de nav usa Link en lugar de a para ir a cada vista y las flechas de volver que ya están descritas en el context.md que te paso deben ser funcionales.
El diseño mobile first es importante, debe de implementarse para dispositivos con 375 px de ancho, además añade el aspecto para dispositivos intermedios con 745 px de ancho.
Además de las capturas que voy a adjuntar puedes visitar la propia web para mejorar el context.md final.

Las tres primeras imágenes corresponde a inicio, las siguientes tres a catálogo, y el resto de fotos es para room."*






## Estructura

La página va a componerse de tres vistas, **página de inicio, catalog y rooms**. Las tres están inspiradas en el diseño de Airbnb, de manera que podremos usar la barra de búsqueda para buscar ciudad. 
Al pulsar el botón de búsqueda en el móvil **se despliegan un input para añadir fechas de entrada y salida, un input para viajeros y una tarjeta** en el que buscaremos pon nombre y tendremos ciudades sugeridas, . En pantallas grandes habrá una única barra en la que escribiremos el destino, seleccionaremos las fechas de entrada y salida, y un **input de viajeros que  según el tipo de viajero (Adulto, Niño, Bebé y Mascota). Antes de su activación, esta barra tiene abajo **etiquetas para selecionar qué queremos buscar**, las opciones son la siguientes; Todo, Alojamientos, Experiencias y Servicios.

También podremos movernos por varios **carruseles en los que se presentan habitaciones para cada una de las ciudades más visitadas**. Al **seleccionar ciudad, o buscarla en el buscador,** aparece un catálogo en el que se presentan cada una de las habitaciones ofertadas. La barra de búsqueda se actualiza. El nombre de la ciudad se queda fijado en el nombre, y podremos seleccionar entre fechas y viajeros, **igual que en el inicio**. Las etiquetas de selección pasarán a ser **filtros en los que seleccionamos requerimientos de la habitación**. Todas las habitaciones tienen un marcado de corazón por si en la búsqueda nos gusta, y abajo a la derecha siempre aparece las estrellas que tiene de valoración y cuantas valoraciones han hecho. A la derecha de estas estrellas tenemos un texto descriptivo, qué tipo de anfitrión es, fechas inmediatas disponibles y el precio en total.

También, al pulsar en cada uno de las habitaciones para empezar nos **lleva a una nueva pestaña** y nos mostrará la vista donde aparece la información principal del alojamiento, y donde tendremos la **información principal** de cada una las habitaciones, **fotos de la habitación**, **una tarjeta con el precio total**, **(fija durante la navegación de la página)** que se calcula automáticamente en función de un selector con calendario de **entrada y llegada** y el **número de viajeros**




El usuario tendrá una experiencia de navegación fluida, al moverse por la página de inicio podrá ver cada una de las ciudades más visitadas y podrá seleccionar o bien el catálogo completo de la ciudad, o alguna habitación que le haya gustado dentro de las primeras imágenes que aparecerán en este carrusel. En caso de querer buscar la ciudad lo podrá hacer, y también seleccionar de manera cómoda las fechas en las que quiere reservar y el número y tipo de huesped. (Para mayor comodidad implemento solo 10 ciudades que especifico en Madrid, Barcelona, Bilbao, Málaga, Sevilla, San Sebastián, Santiago de Compostela, A Coruña, Zaragoza y Granada). 
Una vez seleccionada la ciudad podrá navegar en una parrilla de habitaciones, que se componen de los distintos carruseles de fotos del alojamiento con breve descripción del sitio y del anfitrión, además del precio y las estrellas que tiene el sitio. Para facilitar la búsqueda, tendremos en la parte superior siempre fija una barra de navegación en la que seleccionamos los distintos filtros que le queremos añadir al búsqueda. 
Cuando quiera mirar una habitación con más detalle nos llevará a una malla de fotos donde podrá ver las fotos disponibles, ver la descripción del sitio, ver el nombre y la valoración del anfitrión y etiquetas descriptivas para informar de servicios de la habitación. En caso de que quiera consultar cuánto le costará, tiene una tarjeta siempre fija a su izquierda en el que puede seleccionar las fechas de entrada y salida, los viajeros y tipos de viajeros, y en el que se le actualiza automáticamente el precio final de la instancia. Abajo de todo esto se consolida con un botón de Reservar que nos pasará a la web de reserva (No disponible por el momento)


## Especificaciones

La página va a componerse de tres vistas, **página de inicio, catalog y rooms**. Las tres están inspiradas en el diseño de Airbnb, de manera que podremos usar la barra de búsqueda para buscar ciudad.


### Inicio

#### Header
Dispone de un header con el buscador y los filtros de búsqueda fijos en la navegación y cuando está cerrado. Para el **móvil (375px de ancho)** esta **barra es un botón** en el que al hacer click **se despliegan: un input para añadir texto**, con una **flecha para volver atrás**, y una **lista de ciudades de sugerencia**; un input para **fechas de entrada y salida (calendario mensual dispuesto verticalmente)**, un input para **viajeros en el que despliega una cuenta acumulativa o sustractiva (Con minimo de 0)**. Antes de su activación, esta barra tiene abajo **etiquetas para selecionar qué queremos buscar**, las opciones son la siguientes; Todo, Alojamientos, Experiencias y Servicios.
Para **dispositivos grandes (>740px de ancho)** habrá una única barra en la que tenemos un **input para el destino**, otro para **fechas que despliega un calendario en el que aparecen dos meses dispuestos en horizontal y se marca fecha de entrada y de salida**, y un **input de viajeros que despliega una cuenta acumulativa o sustractiva (Con minimo de 0)** según el tipo de viajero (Adulto, Niño, Bebé y Mascota). En el caso de dispositivos grandes los botones de filtro están justo arriba de la barra de búsqueda. 

##### Prompt para sacar código del header
Esta captura corresponde al header de Airbnb. Para hacer un clon de la página necesito que me generes el código de este componente, en el que se pueden distinguir dos zonas de elementos; div superior (Título y filtros) div inferior (Barra de búsqueda). El div superior se compone de tres espacios principales, el logo, los filtros (Todo, Alojamientos, Experiencias, Servicios) y el div de menú (Hazte anfitrión, y menú desplegable con tres líneas). Ambos divs están dispuestos en flex colum, uno arriba del otro. El Div superior se divide en otros tres divs, dispuestos en flex row, uno para el logo, otro para los cuatro filtros (dispuestos en flex row también) y otro para "Hazte anfitrión" y el menú de lineas (![alt text](image.png)) metido en un círculo gris. En el div inferior encontramos una barra con Destino, Fecha y Viajeros, los tres buttons que despliegan un dropdown. Destino se convierte en si mismo en un input text del que debemos guardar el texto y el deplegable muestra las principales ciudades, definidas por un logo, nombre de ciudad y un muy breve motivo de visita (Ejemplo: Granada: Por su impresionante arquitectura). Fechas despliega dos calendarios de meses consecutivos, en los que se puede seleccionar intervalo de fechas marcados en negro con la letra en blanco, y donde los días entre ambas fechas forman un puente marcado levemente en gris. Viajeros despliega un input de viajeros que despliega una cuenta acumulativa o sustractiva (Con minimo de 0) según el tipo de viajero (Adulto, Niño, Bebé y Mascota).



#### Carrusel y Prompt para sacar código del carrusel
El carrusel se divide en dos elementos, un div con el título y una flecha para ir a la dirección de búsqueda dispuestos en justify content, y el propio carrusel de habitaciones. El carrusel, dispuesto en flex-colum está formado por una foto con un corazón incrustado en la esquina superior izquierda que ocupa la mayoría del espacio, y un texto con un título descriptivo como título, fechas de disponibilidad inmediata, tipo de anfitrión, gasto total de la estancia para las fechas propuestas, y las estrellas que tiene el sitio. El corazón de la foto permanece en black opacity-60 y un round white de 2px de ancho


#### Footer
El footer se divide en tres article uno principal con los títulos Asistencia, Cómo ser anfitrión y Airbnb, cada uno con sus enlaces a la información que ofrecen.





### Catálogo


#### Header Catálogo
Para pantallas móviles, el header de catálogo comparte el mismo botón de búsqueda que Inicio, con las siguientes diferencias:
    - El destino que hemos elegido queda fijo en la etiqueta de Destino. Al pulsar se nos abre el dropdown con la misma disposición vertical que para inicio.
    - Abajo del botón aparecen etiquetas de los principales filtros de búsqueda para cada alojamiento

#### Mapa
Para dispositivos móviles el mapa es lo primero después del header, y en el momento de la navegación vertical queda detrás del grid de habitaciones mientras éstas suben. Al pulsar en él ocupará todo menos el header para facilitar la navegación, quedando el grid plegado con una flecha hacia arriba para volver a recuperarlo
Para pantallas grandes el mapa queda fijado a la derecha de la web al desplazar el grid

#### Grid de habitaciones
Para dispositivos móviles las habitaciones se presentan de una en una. El espacio de presentación de cada habitación se divide en un carrusel de imagen grande, ocupando el 85% del espacio para cada habitación. El resto se divide en tres espacios. El primero es un div con un título para la habitación, en bold, y al lado en justify-content estarán las estrellas del sitio, dispuesto en (símbolo de estrella, número de estrellas con un decimal, y (número de votantes)). El segundo espacio se divide en tres p dispuestos en flex-colum, uno con una breve descripción del sitio, otro con el tipo de anfitrión y el último con la disponibilidad más inmediata en un intervalo de fechas. Por último, tenemos un último p con el precio total para el intervalo de fechas dado, con letras en bold y subrayadas. 
Para pantallas grandes el grid de alojamientos se presenta de dos en dos con el mapa fijo para la navegación a la derecha de la pantalla




### Rooms

#### Header rooms
El header de rooms se divide en tres div, uno para el logo, otro para el menu de los tres dropdown (Destino, fecha, viajeros) y el último para los menú "Hazte anfitrión" y el menú de lineas.
#### Grid de fotos
Tenemos un article dividido en dos: div para el title del room, el botón de compartir y el corazón de guardad y otro para las fotos fotos. El primer div lo compone el título por un lado, y el botón de compartir y Guardar por otro, dispuestos en justify-content. Las fotos se dividen en dos posiciones, una primera foto en grande que ocupa el 50% del espacio reservado para las fotos, y un grid de 4 fotos que ocupa el otro 50%, separadas ambas por un margin de 2px. 

Para móviles tenemos una pequeña barra superior dividida en dos zonas, una con una flecha para volver a Catálogo y otra con un botón de compartir y guardar dispuestos en justify-content. Fijo abajo tenemos un footer con el precio total para las fechas que hemos selecionado, y por defecto pondrá el intervalo que nos ofrece, siempre y cuando no hayamos seleccionado fechas. Las fotos se presentan en un carrusel con flechas para viajar entre ellas y una fracción mostrando en qué foto estamos con respecto al total de ellas. Al comenzar la navegación vertical el siguiente espacio se dividen en varios article; En el primero dividimos en tres, vemos el título descriptivo, un p con una pequeña descripción, y otro p para las estrellas y el número de evaluaciones. El siguiente article se divide en tres, separados por una línea. La primera división se divide a su vez es una foto de perfil y una zona para texto dispuestos en flex row, donde encontramos un título con el nombre del anfitrión y un texto con la experiencia del mismo, dispuestos en flex colum estos dos últimos. La segunda división se divide en tres article, con datos sobre el anfitrión y el sitio. La última es un p con líneas de texto presentadas, y un botón de "mostrar más" en gris que despliega el resto del texto.
Siguiendo con la navegación en el siguiente article encontramos una lista descriptiva de 6 elementos con el título "¿Qué hay en este alojamiento?" Cada una con su símbolo y texto. Tras pulsar el botón de mostrar más se presentan el resto.
En otro article vemos un mapa con la disposición de donde está la habitación
El el penúltimo article encontramos un calendario donde marcamos el intervalo de fechas en el que nos quedaremos en el alojamiento, y que cambia autmáticamente el intervalo en el footer fijo y que recalcula el total en función del coste. 
El último article tiene las estrellas y evaluaciones en bold.








# **Context Final**

# context.md — Clon de Airbnb (Next.js 16 + TypeScript + Tailwind CSS)

> Documento de especificación para un agente de IA. Sigue el patrón **Estructura → Contenido → Estilo** y el **Prompt de UI de 4 elementos (Rol / Stack / Restricciones / Contenido)** para cada componente. Genera el proyecto completo a partir de este documento, respetando estrictamente las restricciones técnicas de la sección 1.

---

## 0. Rol y objetivo

Eres un agente generador de código frontend. Vas a construir, componente a componente, un clon funcional (no visual-estático) de Airbnb con **tres vistas conectadas**: Inicio, Catálogo y Room. Es un ejercicio de aprendizaje de React/Next.js: prioriza la **separación en componentes pequeños, reutilizables y con responsabilidad única** por encima de la brevedad del código total.

---

## 1. Stack y restricciones técnicas globales

| Elemento | Valor |
|---|---|
| Framework | Next.js 16, **App Router** (`create-next-app`) |
| Lenguaje | TypeScript estricto |
| Estilos | Tailwind CSS únicamente (JSX con clases Tailwind, sin CSS Modules ni styled-components) |
| Componentes de terceros | **Prohibidas** las librerías de UI (shadcn, MUI, Ant Design, Chakra...). Permitidas solo librerías **funcionales**: `react-leaflet` + `leaflet` (mapa) y `react-datepicker` (selector de fechas). Iconos con `lucide-react` o SVG propio. |
| Componentes | Un componente por archivo. **Máximo ~80 líneas** de JSX + lógica por componente → si un bloque de la UI es complejo, **divídelo en subcomponentes**, no lo comprimas. |
| Estado | `const` + hooks (`useState`, `useEffect`). Sin clases. |
| Navegación | Siempre `<Link>` de `next/link`. Nunca `<a href>` para rutas internas. Las flechas "volver" usan `useRouter().back()` de `next/navigation` (componente cliente) o `<Link href="...">` cuando el destino es fijo. |
| Carga de datos | Simulada. Ver sección 9.2 (patrón `useEffect` + `setTimeout` 500ms). |
| Mobile first | Base = **375px** (sin prefijo Tailwind). Punto de quiebre intermedio = **745px**. Configurar en `tailwind.config.ts`: |

```ts
// tailwind.config.ts
export default {
  theme: {
    screens: {
      md: '745px', // intermedio / tablet (sustituye el md de 768px por defecto)
      lg: '1024px', // escritorio grande
    },
  },
}
```

Regla de trabajo: escribe primero las clases sin prefijo (375px), luego añade `md:` para 745px y, si aporta valor visual, `lg:` para escritorio grande. No uses `sm:`.

---

## 2. Arquitectura de carpetas

```
/app
  /page.tsx                    → Inicio
  /catalog/page.tsx            → Catálogo
  /rooms/[id]/page.tsx         → Room (detalle)
  /layout.tsx
  /globals.css
/components
  /shared        (Logo, CategoryTabs, RoomCardMini, BottomNavMobile, Footer...)
  /home          (componentes exclusivos de Inicio)
  /catalog       (componentes exclusivos de Catálogo)
  /room          (componentes exclusivos de Room)
/types
  index.ts                     → todas las interfaces (sección 3)
/data
  cities.ts                    → mock de las 10 ciudades
  rooms.ts                     → mock de habitaciones
/hooks
  useMockData.ts                → hook reutilizable de carga simulada (sección 9.2)
```

---

## 3. Modelo de datos (`/types/index.ts`)

```ts
export interface Traveler {
  adults: number;
  children: number;
  babies: number;
  pets: number;
}

export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}

export type SearchCategory = 'Todo' | 'Alojamientos' | 'Experiencias' | 'Servicios';

export interface SearchFilters {
  query: string;
  category: SearchCategory;
  dateRange: DateRange;
  travelers: Traveler;
}

export interface City {
  id: string;
  name: string;
  image: string;
  reason: string;     // "Por su impresionante arquitectura"
  lat: number;
  lng: number;
}

export interface Host {
  name: string;
  avatar: string;
  experienceYears: number;
}

export interface Amenity {
  icon: string;        // nombre del icono lucide-react
  label: string;
  available: boolean;  // false → se tacha (line-through)
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export type RoomBadge = 'Recomendación del viajero' | 'Superanfitrión' | 'Hotel destacado';

export interface Room {
  id: string;
  citySlug: string;
  title: string;
  images: string[];
  pricePerNight: number;
  originalPricePerNight?: number; // para el precio tachado del catálogo
  rating: number;
  reviewsCount: number;
  hostType: 'Anfitrión profesional' | 'Anfitrión particular';
  host: Host;
  badge?: RoomBadge;
  isHotel: boolean;
  discountBadge?: string;         // "+15 € de crédito de Airbnb"
  availableDatesLabel: string;    // "21–23 ago"
  bedInfo: string;                // "1 cama · Baño compartido"
  address: string;
  lat: number;
  lng: number;
  description: string;
  highlights: Highlight[];
  amenities: Amenity[];
  totalAmenitiesCount: number;    // 31
}
```

---

## 4. Datos mock

### 4.1 Ciudades (`/data/cities.ts`) — exactamente estas 10, sin más

| Ciudad | Motivo breve | lat | lng |
|---|---|---|---|
| Madrid | Por su vida cultural y gastronómica | 40.4168 | -3.7038 |
| Barcelona | Por su arquitectura modernista y sus playas | 41.3851 | 2.1734 |
| Bilbao | Por el Guggenheim y su casco viejo | 43.2630 | -2.9350 |
| Málaga | Por su clima y sus museos | 36.7213 | -4.4213 |
| Sevilla | Por su patrimonio y el flamenco | 37.3891 | -5.9845 |
| San Sebastián | Por su gastronomía y la playa de La Concha | 43.3183 | -1.9812 |
| Santiago de Compostela | Por su catedral y el Camino de Santiago | 42.8805 | -8.5456 |
| A Coruña | Por sus playas urbanas y su torre romana | 43.3623 | -8.4115 |
| Zaragoza | Por la Basílica del Pilar y su historia | 41.6488 | -0.8891 |
| Granada | Por su impresionante arquitectura (La Alhambra) | 37.1773 | -3.5986 |

### 4.2 Habitaciones (`/data/rooms.ts`)

Genera entre 6 y 8 habitaciones por ciudad reutilizando la forma del tipo `Room`. Usa como **plantilla exacta** esta habitación real extraída de las capturas (Madrid):

```ts
{
  id: 'madrid-gran-via-1',
  citySlug: 'madrid',
  title: 'Habitación privada en Gran Vía (Cama 90cm)',
  images: [/* 19 fotos, usa placeholders repetidos */],
  pricePerNight: 26.5, // 53€ / 2 noches
  rating: 4.62,
  reviewsCount: 197,
  hostType: 'Anfitrión particular',
  host: { name: 'Pablo', avatar: '/mock/host-pablo.jpg', experienceYears: 3 },
  isHotel: false,
  discountBadge: 'Este anfitrión ofrece un descuento',
  availableDatesLabel: '21–23 ago',
  bedInfo: '1 cama · Baño compartido',
  address: 'Madrid, Comunidad de Madrid, España',
  lat: 40.4200, lng: -3.7038,
  description: 'Maravillosa habitación en un apartamento en el centro de Madrid, a escasos metros de Gran Vía. Con cama individual de 90x190 cm que pueden utilizar 2 personas si así lo desean. Podrás disfrutar del centro de la capital con todas las comodidades posibles...',
  highlights: [
    { icon: 'door-open', title: 'Llegada autónoma', description: 'Accede al alojamiento directamente mediante la cerradura con teclado.' },
    { icon: 'map-pin', title: 'Mucho que hacer en el barrio', description: 'Los viajeros afirman que esta zona es muy interesante.' },
    { icon: 'bed-double', title: 'Habitación en: apartamento', description: 'Una habitación solo para ti con acceso a zonas comunes.' },
  ],
  amenities: [
    { icon: 'lock', label: 'Cerradura en la puerta del dormitorio', available: true },
    { icon: 'utensils', label: 'Cocina', available: true },
    { icon: 'wifi', label: 'Wifi', available: true },
    { icon: 'briefcase', label: 'Zona para trabajar', available: true },
    { icon: 'tv', label: 'Televisión', available: true },
    { icon: 'siren', label: 'Detector de monóxido de carbono', available: false },
    { icon: 'flame', label: 'Detector de humo', available: false },
  ],
  totalAmenitiesCount: 31,
}
```

Para el resto de habitaciones mock, varía: título, precio (rango 25–160€), rating (4.3–4.9), nº de reseñas, tipo de anfitrión, y asigna `badge: 'Recomendación del viajero'` o `'Superanfitrión'` a ~1 de cada 3 tarjetas. Añade 3–4 elementos con `isHotel: true` y `discountBadge` tipo `"+15 € de crédito de Airbnb"` para la sección "Hoteles destacados".

---

## 5. Estilo global (design tokens)

- Color principal (marca / botón buscar / Reservar): rosa-rojo Airbnb → usar `#FF385C` (Tailwind: `bg-[#FF385C]`, definir como `brand` en `tailwind.config.ts` si se prefiere).
- Overlay del corazón sobre foto: `bg-black/60 text-white` con `rounded-full`, icono outline (no relleno) hasta que se pulsa.
- Badges tipo "Recomendación del viajero" / "Superanfitrión": `bg-white rounded-full px-2 py-1 text-xs font-medium shadow`.
- Tarjetas: sin borde visible, solo la foto con `rounded-xl overflow-hidden`; el texto va debajo sin card-wrapper.
- Tipografía: `font-sans`, títulos de tarjeta `font-semibold text-sm`, precios en `font-semibold underline`.
- Botón "Reservar" / botón buscar circular: `bg-[#FF385C] hover:bg-[#E31C5F] text-white`.

---

## 6. VISTA: Inicio (`/`)

### 6.1 Estructura de componentes

| Componente | Archivo | Client | Resumen |
|---|---|---|---|
| `HomeView` | `components/home/HomeView.tsx` | ✅ | Orquesta la vista: usa `useMockData` para ciudades+rooms, gestiona `SearchFilters`, compone todo lo demás |
| `Logo` | `components/shared/Logo.tsx` | ❌ | Icono + texto "airbnb", `<Link href="/">` |
| `CategoryTabs` | `components/shared/CategoryTabs.tsx` | ✅ | Las 4 pestañas con icono+texto, subrayado en la activa |
| `UserMenu` | `components/shared/UserMenu.tsx` | ❌ | "Hazte anfitrión" + icono globo + icono hamburguesa en círculo gris |
| `NavbarDesktop` | `components/home/NavbarDesktop.tsx` | ❌ | Fila `Logo` + `CategoryTabs` + `UserMenu`, solo visible `md:flex` |
| `SearchBarDesktop` | `components/home/SearchBarDesktop.tsx` | ✅ | Píldora con 3 secciones (Destino/Fechas/Viajeros) + botón buscar rojo. Solo `md:flex` |
| `DestinoDropdown` | `components/home/DestinoDropdown.tsx` | ✅ | Input de texto (useState) que filtra en vivo la lista de `City` mostrada debajo (logo+nombre+reason) |
| `FechasDropdown` | `components/home/FechasDropdown.tsx` | ✅ | Usa `react-datepicker` en modo rango, `monthsShown={2}`, selección visual con puente gris entre fechas |
| `ViajerosDropdown` | `components/home/ViajerosDropdown.tsx` | ✅ | 4 filas (Adultos/Niños/Bebés/Mascotas) con botones +/− (mínimo 0) sobre `Traveler` |
| `SearchButtonMobile` | `components/home/SearchButtonMobile.tsx` | ✅ | Píldora "Empieza a buscar" que al pulsar abre `SearchModalMobile`. Solo `md:hidden` |
| `SearchModalMobile` | `components/home/SearchModalMobile.tsx` | ✅ | Overlay a pantalla completa: flecha volver + input + lista de ciudades sugeridas; debajo `FechasDropdown` y `ViajerosDropdown` apilados en vertical |
| `CategoryPillsMobile` | `components/home/CategoryPillsMobile.tsx` | ✅ | Scroll horizontal de píldoras (mismo estado que `CategoryTabs`), visible antes de activar la búsqueda |
| `CitySection` | `components/home/CitySection.tsx` | ❌ | Título de ciudad + flecha (`Link` a `/catalog?city=slug`) + `RoomCarousel` |
| `RoomCarousel` | `components/home/RoomCarousel.tsx` | ✅ | Scroll horizontal (`overflow-x-auto`) de `RoomCardMini`, con flechas prev/next en `md:` |
| `RoomCardMini` | `components/shared/RoomCardMini.tsx` | ✅ | Foto+corazón+badge, título, línea fechas·anfitrión, línea precio+estrellas. `Link` a `/rooms/[id]` que abre nueva pestaña (`target="_blank"`) |
| `BottomNavMobile` | `components/shared/BottomNavMobile.tsx` | ❌ | Fijo abajo: Explorar (activo, rosa) / Favoritos / Iniciar sesión. `md:hidden` |
| `Footer` | `components/shared/Footer.tsx` | ❌ | 3 `<article>`: Asistencia, Cómo ser anfitrión, Airbnb, cada uno con lista de enlaces (placeholder `href="#"`) |

### 6.2 Prompts de componente

**`CategoryTabs`**
- *Rol*: barra de pestañas de categoría de búsqueda.
- *Stack*: React + Tailwind, `useState` compartido vía props (`value`, `onChange`).
- *Restricciones*: 4 opciones fijas (Todo=icono globo, Alojamientos=icono casa, Experiencias=icono globo aerostático, Servicios=icono campana). Cada icono en `w-6 h-6` constante. La opción activa lleva `border-b-2 border-black font-semibold`, las demás `text-gray-500`.
- *Contenido*: `flex flex-row gap-6 md:gap-8`.

**`DestinoDropdown`**
- *Rol*: selector de ciudad con autocompletado.
- *Stack*: `useState<string>` para el texto, filtrado en cada `onChange` con `.filter(city => city.name.toLowerCase().includes(query.toLowerCase()))`.
- *Restricciones*: si `query === ''`, mostrar las 10 ciudades completas; si no hay coincidencias, mostrar "No hay resultados".
- *Contenido*: input arriba, debajo lista vertical (`flex flex-col`) de filas logo+nombre+reason, cada fila clicable que fija el destino y cierra el dropdown.

**`FechasDropdown` / calendario mobile**
- *Rol*: selector de rango de fechas.
- *Stack*: `react-datepicker` con `selectsRange`, `startDate`/`endDate` en estado del padre (`DateRange`).
- *Restricciones desktop*: `monthsShown={2}`, disposición horizontal.
- *Restricciones mobile*: mismo componente pero forzado a una columna (`inline` + CSS `flex-col` sobre el contenedor, o usar la prop de disposición vertical de la librería).
- *Estilo*: día seleccionado `bg-black text-white rounded-full`, días intermedios `bg-gray-100`.

**`ViajerosDropdown`**
- *Rol*: contador de viajeros por tipo.
- *Stack*: `useState<Traveler>`, funciones `increment(key)` / `decrement(key)` con `Math.max(0, valor - 1)`.
- *Contenido*: 4 filas `justify-between`: etiqueta (nombre + subtítulo breve, ej. "Adultos" / "13 años o más") a la izquierda, botones circulares `-` cantidad `+` a la derecha.

**`RoomCardMini`**
- *Rol*: tarjeta compacta reutilizada en carruseles de Inicio y Catálogo.
- *Stack*: recibe `room: Room` por props; `useState<boolean>` local para el corazón (guardado).
- *Contenido*: `<div className="flex flex-col w-full">` → foto `aspect-square rounded-xl relative` con corazón `absolute top-2 left-2` y badge opcional `absolute top-2 left-2` (si hay badge, el corazón se mueve a `right-2`) → debajo título en bold, línea fechas+tipo anfitrión en gris, línea precio bold + `★ rating`.

---

## 7. VISTA: Catálogo (`/catalog`)

### 7.1 Estructura de componentes

| Componente | Archivo | Client | Resumen |
|---|---|---|---|
| `CatalogView` | `components/catalog/CatalogView.tsx` | ✅ | Orquesta: lee `city` de la query string, `useMockData` de rooms filtradas por ciudad, estado de texto de búsqueda, estado del mapa (mobile) |
| `CatalogHeader` | `components/catalog/CatalogHeader.tsx` | ✅ | Versión compacta de la barra: destino fijado (texto), fechas, viajeros, botón buscar. Reutiliza `DestinoDropdown`/`FechasDropdown`/`ViajerosDropdown` |
| `CatalogHeaderMobile` | `components/catalog/CatalogHeaderMobile.tsx` | ✅ | Flecha volver (`router.back()`) + píldora resumen + icono de filtros (sliders) |
| `FilterPillsBar` | `components/catalog/FilterPillsBar.tsx` | ✅ | Scroll horizontal: "Filtros" (icono) + Hotel, Llegada autónoma, Reserva inmediata, Aparcamiento gratuito, Wifi, Aire acondicionado, Admite mascotas, TV, "1 baño o más", Lavadora. Cada píldora es un toggle (`useState<string[]>` de filtros activos) |
| `MapView` | `components/catalog/MapView.tsx` | ✅ | `react-leaflet` real: `MapContainer` + `TileLayer` (OpenStreetMap) centrado en la ciudad, un `Marker` con `divIcon` tipo burbuja de precio por cada `Room` visible |
| `MapToggleMobile` | `components/catalog/MapToggleMobile.tsx` | ✅ | Botón flotante "Mapa" (mobile) que hace `useState<boolean>` para expandir el mapa a pantalla completa y plegar el grid detrás (flecha para volver) |
| `RoomGrid` | `components/catalog/RoomGrid.tsx` | ✅ | `grid grid-cols-1 md:grid-cols-2 gap-6`, mapea `RoomCardCatalog`, aplica el filtro de texto en tiempo real (`useState` del texto de búsqueda de `CatalogHeader`) |
| `RoomCardCatalog` | `components/catalog/RoomCardCatalog.tsx` | ✅ | Foto con dots de carrusel (`useState<number>` índice), corazón, badge; fila título+estrellas justificada; 3 líneas de texto; precio (tachado opcional + total bold subrayado) |
| `FeaturedHotelsSection` | `components/catalog/FeaturedHotelsSection.tsx` | ✅ | Título + paginación "1/5" + flechas + descripción + `RoomCarousel` (reutilizado) de `HotelCard` |
| `HotelCard` | `components/catalog/HotelCard.tsx` | ✅ | Igual que `RoomCardCatalog` pero con badge "Hotel destacado" y `discountBadge` en verde |

### 7.2 Prompts de componente

**`RoomGrid` + filtro en tiempo real**
- *Rol*: listado principal filtrable.
- *Stack*: recibe `rooms: Room[]` y `query: string` por props; `const visibleRooms = rooms.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))`.
- *Restricciones*: 1 columna en 375px, **2 columnas** desde 745px (`md:grid-cols-2`), con el mapa fijo a la derecha en `md:` (`md:sticky md:top-0`).

**`MapView`**
- *Rol*: mapa real e interactivo del catálogo.
- *Stack*: `import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'`, `import 'leaflet/dist/leaflet.css'`. Componente `'use client'`, importar dinámicamente con `next/dynamic` y `ssr: false` (Leaflet no soporta SSR).
- *Restricciones*: `center` = coordenadas de la ciudad activa, `zoom={13}`. Cada marcador usa `L.divIcon` con HTML de una burbuja blanca redondeada mostrando `${room.pricePerNight} €`.
- *Contenido mobile*: el mapa ocupa el ancho completo antes del scroll; al pulsar `MapToggleMobile`, ocupa todo el alto menos el header.
- *Contenido desktop*: `md:w-1/2 md:h-screen md:sticky md:top-0`.

**`FilterPillsBar`**
- *Rol*: filtros de características del alojamiento.
- *Stack*: `useState<string[]>(activeFilters)`, toggle con `includes`/`filter`.
- *Contenido*: `flex flex-row gap-2 overflow-x-auto`, cada píldora `border rounded-full px-3 py-2 text-sm`, activa `border-black bg-gray-100 font-medium`.

---

## 8. VISTA: Room (`/rooms/[id]`)

### 8.1 Estructura de componentes

| Componente | Archivo | Client | Resumen |
|---|---|---|---|
| `RoomView` | `components/room/RoomView.tsx` | ✅ | Orquesta: `useMockData` para cargar el `Room` por `id`, estado de `DateRange`, `Traveler` y precio total |
| `RoomHeaderMobile` | `components/room/RoomHeaderMobile.tsx` | ✅ | Barra superior mobile: flecha volver (`router.back()`) + Compartir + Guardar (`justify-between`), sobrepuesta sobre la foto |
| `RoomHeaderDesktop` | `components/room/RoomHeaderDesktop.tsx` | ❌ | Navbar simplificada: `Logo` + píldora compacta ("Cualquier lugar · Cualquier fecha · Añade viajeros") + `UserMenu` |
| `RoomTitleBar` | `components/room/RoomTitleBar.tsx` | ✅ | Solo desktop: título a la izquierda, "Compartir"/"Guardar" (con icono) a la derecha, `justify-between` |
| `PhotoGridDesktop` | `components/room/PhotoGridDesktop.tsx` | ❌ | 1 foto grande (`w-1/2`) + grid 2x2 de 4 fotos (`w-1/2`), `gap-0.5`, botón "Mostrar todas las fotos" superpuesto abajo a la derecha. Solo `md:flex` |
| `PhotoCarouselMobile` | `components/room/PhotoCarouselMobile.tsx` | ✅ | Carrusel a ancho completo, `useState<number>` índice actual, contador `"{index+1} / {total}"` abajo a la derecha. `md:hidden` |
| `RoomInfoSummary` | `components/room/RoomInfoSummary.tsx` | ❌ | Título descriptivo, `bedInfo`, línea "★ rating · reviewsCount evaluaciones" (subrayado, ancla a sección reseñas) |
| `HostCard` | `components/room/HostCard.tsx` | ❌ | Avatar circular + "Anfitrión: {name}" + "{experienceYears} años de experiencia" |
| `HighlightsList` | `components/room/HighlightsList.tsx` | ❌ | 3 filas icono+título+descripción separadas por `border-b` |
| `DescriptionBlock` | `components/room/DescriptionBlock.tsx` | ✅ | Párrafo con `line-clamp-3` por defecto; `useState<boolean>` para expandir con botón gris "Mostrar más" |
| `AmenitiesList` | `components/room/AmenitiesList.tsx` | ✅ | Primeros 6 elementos visibles (no disponibles con `line-through text-gray-400`), `useState<boolean>` para expandir con botón "Mostrar las {totalAmenitiesCount} comodidades" |
| `LocationMap` | `components/room/LocationMap.tsx` | ✅ | `react-leaflet` (mismo patrón que `MapView`), un único marcador central tipo "casa" en negro, barra de búsqueda decorativa superpuesta ("Prueba una cafetería local") |
| `BookingCard` | `components/room/BookingCard.tsx` | ✅ | **Desktop, fija (`sticky top-24`)**: precio total, banner de descuento si aplica, campos LLEGADA/SALIDA con `react-datepicker`, selector de viajeros (`ViajerosDropdown` reutilizado), recalcula precio con `useEffect`/derivado, botón Reservar |
| `BookingCalendarMobile` | `components/room/BookingCalendarMobile.tsx` | ✅ | Calendario inline (no popup) con cabecera L M X J V S D, marca fecha inicio/fin en negro y el rango intermedio en gris; título dinámico "{noches} noches en {ciudad}" |
| `StickyFooterMobile` | `components/room/StickyFooterMobile.tsx` | ✅ | Fijo abajo: precio total + rango de fechas + botón "Reservar" (navega a `/booking` — no disponible, `disabled` o alerta) |
| `ReviewsSummary` | `components/room/ReviewsSummary.tsx` | ❌ | Último bloque: "★ {rating} · {reviewsCount} evaluaciones" en bold |

### 8.2 Prompts de componente

**`BookingCard` — cálculo del precio**
- *Rol*: tarjeta de reserva funcional, fija durante el scroll en desktop.
- *Stack*: `react-datepicker` (`selectsRange` o dos inputs enlazados `startDate`/`endDate`), estado levantado en `RoomView` o local con `useState<DateRange>`.
- *Restricciones*: lógica de cálculo:
  ```ts
  const nights = checkIn && checkOut
    ? Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
    : 2; // valor por defecto = availableDatesLabel
  const total = nights * room.pricePerNight;
  ```
  Si no hay fechas seleccionadas, se muestra el precio/intervalo por defecto del mock (`availableDatesLabel`).
- *Contenido*: banner verde de descuento (si `discountBadge`) → `{total} € en total` en grande → dos inputs LLEGADA/SALIDA lado a lado (`grid grid-cols-2 border rounded-lg`) → selector de viajeros → botón "Reservar" ancho completo, `bg-[#FF385C]`.

**`BookingCalendarMobile`**
- *Rol*: equivalente mobile de `BookingCard`, integrado en el flujo de scroll (no flotante).
- *Stack*: mismo estado de `DateRange` que `StickyFooterMobile` (compartido vía props/contexto del `RoomView`), `react-datepicker` en modo `inline`.
- *Contenido*: título "{nights} noches en {ciudad}" + rango en texto + calendario inline con días fuera de mes atenuados (`text-gray-300`).

**`AmenitiesList`**
- *Rol*: lista de comodidades con expansión.
- *Stack*: `useState<boolean>(expanded)`; `const visible = expanded ? amenities : amenities.slice(0, 6)`.
- *Contenido*: cada fila `flex items-center gap-3`, icono + texto; si `available === false` → `line-through text-gray-400` y el icono también atenuado.

**`LocationMap`**
- *Rol*: mapa de ubicación del alojamiento.
- *Stack*: idéntico patrón que `MapView` (dynamic import, `ssr: false`), un solo `Marker` con icono personalizado (círculo negro + icono casa blanco).
- *Contenido*: `h-80 md:h-96 rounded-xl overflow-hidden relative`, barra de búsqueda decorativa `absolute top-4 left-4 right-4 bg-white rounded-full shadow px-4 py-2`.

---

## 9. Interactividad transversal

### 9.1 Búsqueda en tiempo real
- `DestinoDropdown` (Inicio/Catálogo): `useState<string>` sobre el texto → `.filter()` en cada render sobre el array de `City`.
- `RoomGrid` (Catálogo): el texto introducido en `CatalogHeader` filtra `Room[]` visibles por `title`/`citySlug` en tiempo real, sin botón de confirmación.

### 9.2 Carga simulada (obligatoria en las 3 vistas)

Crear un hook reutilizable:

```ts
// /hooks/useMockData.ts
'use client';
import { useEffect, useState } from 'react';

export function useMockData<T>(fetchFn: () => T, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData(null);
    const timer = setTimeout(() => {
      setData(fetchFn());
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading };
}
```

Cada vista (`HomeView`, `CatalogView`, `RoomView`) lo usa así: arranca con lista vacía / `null`, `loading = true`, tras 500ms asigna los datos mock y `loading = false`. Como `deps` cambia al cambiar de ciudad o de id de habitación, la carga se repite **cada vez que cambia la vista**. Mostrar un estado de carga simple (esqueletos grises `animate-pulse`) mientras `loading === true`.

### 9.3 Navegación
- Todos los enlaces internos usan `<Link href="...">`.
- `RoomCardMini` / `RoomCardCatalog` → `<Link href={`/rooms/${room.id}`} target="_blank">` (nueva pestaña, como en las capturas).
- Flecha "volver" (Catálogo mobile, Room mobile) → componente cliente con `const router = useRouter(); <button onClick={() => router.back()}>`.
- Flecha "ver ciudad" en `CitySection` → `<Link href={`/catalog?city=${city.id}`}>`.

### 9.4 Mapa (react-leaflet)
- Instalar: `leaflet`, `react-leaflet`, `@types/leaflet`.
- Importar siempre con `next/dynamic` y `{ ssr: false }` porque Leaflet accede a `window`.
- Tiles: OpenStreetMap (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`), atribución obligatoria en el `TileLayer`.

### 9.5 Date picker
- Instalar: `react-datepicker`, `@types/react-datepicker`.
- Importar su CSS y sobrescribir clases básicas con Tailwind (`.react-datepicker` wrapper) para que el look coincida con el estilo de la sección 5 (día seleccionado negro/blanco).

---

## 10. Checklist de entrega

- [ ] `create-next-app` con TypeScript + Tailwind + App Router
- [ ] 3 rutas: `/`, `/catalog`, `/rooms/[id]`
- [ ] Ningún componente supera ~80 líneas; los bloques complejos están subdivididos
- [ ] `useState` para el texto de búsqueda con filtrado en tiempo real (Destino y Catálogo)
- [ ] `useEffect` + `setTimeout(500)` en las 3 vistas, repetido en cada cambio de vista/parámetro
- [ ] Mapa real e interactivo con `react-leaflet` en Catálogo y en Room
- [ ] `BookingCard`/`BookingCalendarMobile` funcionales con date picker y cálculo de precio por noches
- [ ] Navegación 100% con `<Link>`, flechas de volver funcionales con `router.back()`
- [ ] Mobile-first: base 375px, breakpoint intermedio 745px (`md:` reconfigurado en `tailwind.config.ts`)
- [ ] 10 ciudades exactas, coherentes entre Inicio y Catálogo
