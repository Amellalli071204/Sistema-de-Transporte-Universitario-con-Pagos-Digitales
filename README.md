# Sistema-de-Transporte-Universitario-con-Pagos-Digitales (ESPAÑOL)
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

-------------------------------------------------------------------------------------------------------------------------------------------

University Transportation System with Digital Payments (ENGLISH)
The project proposes a web platform that digitizes university transportation payments using QR codes validated with Interledger and Open Payments. Students generate their QR code, and drivers scan it, eliminating the use of cash and improving security, speed, and control in each transaction.

What is the problem?
*Public transportation relies heavily on cash, which leads to delays, insecurity, and inefficiency in payments and user management.

What technology will be used?
*Frontend: HTML, CSS, JavaScript (web interface).
*APIs: Open Payments and Interledger for digital payments.
*Backend: Node.js (session management, payment logic).
*Infrastructure: GitHub (code repository).

What is the solution?
*A platform that generates a unique QR code for each user upon registration/login. This QR code is scanned when boarding the transport, and the payment is processed automatically using the payment APIs.

What are the benefits?
*No need for cash.
*Faster and more secure payments.
*Control and traceability for operators.
*Improved passenger experience.
*A scalable and easy-to-implement solution.

What is its simple architecture/stack?
*User → Web Interface (HTML/CSS/JS) → Backend API (Node.js) → Open Payments / Interledger → Payment Validation → Transportation.
*What are the indispensable functions?
*User registration and login.
*Generation of a unique QR code per user.
*QR code scanning and validation.
*Digital payment processing.
*Real-time confirmation for the passenger and operator.

Who will be responsible for building which part?

*Frontend (web interface and design): Nuria Amellalli Rojas Miranda and Juan Carlos Martinez Meraz.
*Backend (logic, payment APIs, sessions): Fernando Soto Ibarra and Ángel Jonatan Rojo Pérez.
*QR + API Integration: Shared responsibility (frontend displays the QR, backend validates it).
*Documentation and Pitch: The entire team collaboratively.
