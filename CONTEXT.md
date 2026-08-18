# Clonar la página de Airbnb

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

#### Carrusel

##### Prompt para sacar código del carrusel

#### Footer

##### Prompt para sacar código del footer





### Catálogo

#### Header Catálogo

#### Mapa

#### Grid de habitaciones



### Rooms

#### Header rooms

#### Grid de fotos

#### Tarjeta precio total, fechas y viajeros

#### Descripción e info