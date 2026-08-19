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


#### Tarjeta precio total, fechas y viajeros

#### Descripción e info