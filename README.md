# Sistema-de-Transporte-Universitario-con-Pagos-Digitales
El proyecto propone una plataforma web que digitaliza el pago del transporte universitario mediante códigos QR validados con Interledger y Open Payments. Los estudiantes generan su QR y los choferes lo escanean, eliminando el uso de efectivo, mejorando la seguridad, rapidez y control en cada transacción.

¿Cuál es el problema?

*El transporte público depende en gran medida del efectivo, lo que genera retrasos, inseguridad y poca eficiencia en los pagos y control de usuarios.

¿Qué tecnología usarán?

Frontend: HTML, CSS, JavaScript (interfaz web).
*APIs: Open Payments e Interledger para pagos digitales.
*Backend: Node.js (manejo de sesiones, lógica de pagos).
*Infraestructura: GitHub (código)

¿Cuál es la solución?

*Una plataforma que genera un código QR único para cada usuario al registrarse/iniciar sesión. Ese QR se escanea al abordar el transporte y el pago se procesa automáticamente con las APIs de pago.

¿Cuáles son los beneficios?

*Sin necesidad de efectivo.
*Pagos más rápidos y seguros.
*Control y trazabilidad para los operadores.
*Mejor experiencia para los pasajeros.
*Solución escalable y fácil de implementar.

¿Cuál es su arquitectura/stack simple?

*Usuario → Interfaz Web (HTML/CSS/JS) → API Backend (Node.js) → Open Payments / Interledger → Validación de pago → Transporte.

¿Qué funciones son indispensables?

*Registro e inicio de sesión.
*Generación de QR único por usuario.
*Escaneo y validación de QR.
*Procesamiento de pagos digitales.
*Confirmación en tiempo real al pasajero y operador.

¿Quién será responsable de construir qué parte?

*Frontend (interfaz web y diseño): Nuria  Amellalli Rojas Miranda  y Juan Carlos Martinez Meraz 
*Backend (lógica, APIs de pago, sesiones): Fermamdo Soto Ibarra y Á´ngel Jonatan Rojo Pérez  
*Integración QR + APIs: Compartida (frontend muestra el QR, backend valida).
*Documentación y pitch: Todo el equipo en conjunto.
