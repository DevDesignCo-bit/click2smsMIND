# Mind+ Click2SMS
Esta carpeta es autónoma: se puede copiar o publicar entera sin la carpeta padre.

## Abrir
- index.html: landing de suscripción SMS (MIND al 72300).
- home.html: pantalla previa con los entrenamientos; las tarjetas abren index.html.
- subscribe.html: copia compatible de la landing SMS para conservar enlaces anteriores.
- index.html?lang=en y home.html?lang=en: versiones inglesas.
- terms.html, privacy.html y cookies.html: páginas legales en sueco, con vuelta al paso de origen.

## Archivos
CSS, scripts, logo, imagen del hombre y páginas legales están dentro de esta misma carpeta.
No hace falta copiar recursos desde la carpeta padre.
Los iconos de entrenamientos son SVG editables incluidos en home.html.

## Comportamiento
Precio: 200 SEK al mes.
Tarjeta de Mind+: blanca #FFFFFF, azul #4199E2 y texto del botón blanco.
En móvil, Skicka SMS / Send SMS abre el compositor con MIND al 72300. El visitante revisa y envía el mensaje.
En desktop aparecen instrucciones para continuar desde el móvil y un control para copiar MIND.
No se envían SMS automáticamente y no se simula una suscripción confirmada.
La banda informativa del entrenamiento puede cerrarse. El resto de pestañas lleva al acceso SMS.
Se conserva el selector SE/EN y el parpadeo suave del botón.

## Comprobaciones
82 comprobaciones de lógica, idiomas y navegación superadas entre ambos servicios con un DOM simulado.
Todos los recursos locales resuelven dentro de cada carpeta Click2SMS; no hay dependencias ../.
No hay una prueba visual de navegador ni de dispositivo real disponible.
