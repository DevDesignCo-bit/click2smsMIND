# Mind+ Click2SMS — variante adicional
Abrir index.html, o ../click2sms.html desde la carpeta principal.

Flujo:
1. index.html: selección de entrenamiento en sueco o inglés.
2. Cualquier tarjeta lleva a subscribe.html.
3. Skicka SMS / Send SMS prepara MIND al 72300 en la app de mensajes.
No se envían SMS automáticamente y no se simula una suscripción activada.

Se reproduce la disposición móvil del diseño y se adapta el escritorio a tres columnas para los entrenamientos.
La banda informativa se puede cerrar. El menú inferior usa traducciones suecas en la versión sueca. Las demás secciones llevan al acceso por SMS.
Los iconos son SVG locales editables; los dos títulos de las categorías cuyos textos no se ven en la captura se han nombrado Koncentrationsträning / Concentration training y Logikträning / Logic training, según los iconos.
Se comparte el precio vigente: 200 SEK al mes. La palabra de baja sigue siendo STOP Mind+ al 72300.
Se reutilizan los términos, privacidad, logo y visual del hombre con tarjetas de la carpeta principal.
En desktop se muestra el número y palabra clave para continuar desde el móvil y un control para copiar MIND.
La confirmación del mensaje y de la suscripción corresponde al móvil y al servicio real; esta versión no conecta a un backend.

Los documentos legales aceptan from=train y from=c2s para regresar al paso correcto. El idioma se conserva durante el flujo.
La landing MSISDN/PIN principal conserva sus pantallas y el modo de prueba.
Los archivos se han preparado localmente; no se ha creado ni actualizado un repositorio remoto.

## Verificación
82 comprobaciones de lógica, idiomas, navegación legal y destino SMS superadas entre ambos servicios con un DOM simulado. Enlaces, recursos e identificadores verificados. Sin prueba visual en navegador ni prueba en dispositivo real disponible.

## Tarjeta SMS actualizada
Estilos aislados en sms-card.css, cargados al final: fondo sólido, colores, espaciados y botón según Frame 1.png. Se mantiene 200 SEK al mes.
