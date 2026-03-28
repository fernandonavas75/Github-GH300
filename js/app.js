// =====================================================
// QUESTION BANK — 50 NEW questions
// =====================================================
const allQuestions = [
// === DOMINIO 1: IA Responsable (4 preguntas) ===
{
  domain: "responsible", domainLabel: "IA Responsable", tagClass: "tag-responsible",
  question: "Un equipo de desarrollo nota que Copilot sugiere nombres de variables con estereotipos culturales en ciertos idiomas. ¿Con cuál principio de IA Responsable se relaciona este problema?",
  options: ["Fiabilidad y Seguridad", "Equidad (Fairness)", "Transparencia", "Responsabilidad"],
  correct: 1,
  explanation: "El principio de <strong>Equidad (Fairness)</strong> aborda el riesgo de que los sistemas de IA perpetúen o amplifiquen sesgos sociales existentes. Los modelos entrenados con código público pueden replicar sesgos presentes en los datos históricos, incluyendo nombres de variables culturalmente insensibles.",
  trap: "No confundas con Fiabilidad — eso trata de que el sistema funcione dentro de parámetros de riesgo aceptables, no de sesgos sociales."
},
{
  domain: "responsible", domainLabel: "IA Responsable", tagClass: "tag-responsible",
  question: "¿Cuál de los siguientes mnemónicos representa correctamente los 6 principios de IA Responsable de Microsoft?",
  options: ["FASTEST: Fairness, Accountability, Security, Testing, Ethics, Speed, Transparency", "FR-PITA: Fairness, Reliability, Privacy, Inclusiveness, Transparency, Accountability", "SAFE-AI: Security, Automation, Fairness, Ethics, Accuracy, Integrity", "TRUST: Transparency, Reliability, Usability, Security, Testing"],
  correct: 1,
  explanation: "<strong>FR-PITA</strong> es el mnemónico correcto: <strong>F</strong>airness (Equidad), <strong>R</strong>eliability (Fiabilidad), <strong>P</strong>rivacy (Privacidad), <strong>I</strong>nclusiveness (Inclusividad), <strong>T</strong>ransparency (Transparencia), <strong>A</strong>ccountability (Responsabilidad).",
  trap: "Opciones que incluyan 'Automation', 'Speed' o 'Testing' como principios son siempre incorrectas. Microsoft nunca promueve la automatización sin supervisión."
},
{
  domain: "responsible", domainLabel: "IA Responsable", tagClass: "tag-responsible",
  question: "El sistema de prevención de vulnerabilidades de Copilot detecta que una sugerencia contiene lo que parece ser un token de AWS hardcodeado. ¿Qué acción toma?",
  options: ["Muestra la sugerencia con una advertencia en amarillo", "Bloquea la sugerencia o la sustituye por un placeholder genérico como <API_KEY>", "Envía una notificación al administrador de la organización", "Elimina automáticamente cualquier archivo que contenga secretos"],
  correct: 1,
  explanation: "El sistema identifica patrones de entropía y estructuras de claves (API keys, tokens AWS, connection strings). Si detecta un secreto real o un patrón de secreto, <strong>bloquea la sugerencia o la sustituye por un placeholder genérico</strong> como &lt;API_KEY&gt;.",
  trap: "Copilot NO elimina archivos ni envía notificaciones a admins. Solo actúa sobre las sugerencias que genera."
},
{
  domain: "responsible", domainLabel: "IA Responsable", tagClass: "tag-responsible",
  question: "¿Cuál principio de IA Responsable se demuestra cuando Copilot muestra notificaciones de Public Code Match al usuario?",
  options: ["Inclusividad", "Responsabilidad", "Transparencia", "Privacidad"],
  correct: 2,
  explanation: "Las notificaciones de <strong>Public Code Match</strong> son el ejemplo más directo de <strong>Transparencia</strong>: informan al usuario sobre el origen potencial de una sugerencia cuando coincide con código público existente.",
  trap: "No confundas con Responsabilidad — eso se refiere a la cadena de supervisión y gobernanza. Transparencia es sobre informar capacidades y limitaciones."
},

// === DOMINIO 2: Planes y Funcionalidades (15 preguntas) ===
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "Una startup con 5 desarrolladores que usa una cuenta de GitHub Organization (Team) quiere protección legal por posibles demandas de derechos de autor derivadas del código sugerido por Copilot. ¿Qué plan necesitan como MÍNIMO?",
  options: ["Individual con filtro de código público activado", "Business", "Enterprise", "Cualquier plan incluye IP Indemnity por defecto"],
  correct: 1,
  explanation: "<strong>Business</strong> es el mínimo necesario para obtener <strong>IP Indemnity</strong> (indemnización de propiedad intelectual). El plan Individual NO ofrece esta protección. Enterprise también la incluye pero sería excesivo para una startup de 5 personas.",
  trap: "IP Indemnity = Business o Enterprise. NUNCA Individual. Además, requiere tener el filtro de Suggestions matching public code en modo Block."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Cuál es el requisito base para poder adquirir GitHub Copilot Enterprise?",
  options: ["Cuenta de GitHub Organization (Free)", "Cuenta de GitHub Organization (Team)", "Suscripción a GitHub Enterprise Cloud", "Cualquier cuenta de GitHub con verificación de empresa"],
  correct: 2,
  explanation: "Copilot Enterprise requiere una <strong>suscripción a GitHub Enterprise Cloud</strong>. No basta con Organization Free ni Team. Es el plan más completo y exigente en requisitos.",
  trap: "Business solo requiere una cuenta de GitHub Organization (Free, Team o Enterprise). Enterprise EXIGE Enterprise Cloud."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "Un administrador Enterprise configura la política de Copilot Chat en IDE como 'Enforced: Disabled'. Un propietario de una organización dentro de la empresa quiere habilitarla para su equipo. ¿Qué sucede?",
  options: ["Puede habilitarla usando la API REST de GitHub", "Puede habilitarla si tiene rol de Owner en su organización", "NO puede habilitarla; las políticas Enforced a nivel Enterprise no se pueden anular", "Puede solicitar una excepción temporal a través de Support"],
  correct: 2,
  explanation: "Si una política está <strong>'Enforced'</strong> a nivel Enterprise, los administradores de Organización <strong>NO pueden anularla</strong> bajo ninguna circunstancia. Solo si la Enterprise delega ('No Policy' o 'Allow Override') pueden configurarla.",
  trap: "No existe mecanismo de excepción ni por API ni por Support para políticas forzadas."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Cuál de las siguientes funcionalidades requiere OBLIGATORIAMENTE el plan Enterprise?",
  options: ["Resúmenes automáticos de Pull Requests", "Gestión centralizada de asientos de licencia", "Knowledge Bases que indexan documentación Markdown interna", "Indemnización de Propiedad Intelectual (IP Indemnity)"],
  correct: 2,
  explanation: "<strong>Knowledge Bases</strong> son exclusivas de Enterprise. Permiten indexar documentación específica (archivos Markdown en repositorios seleccionados) para que Copilot responda basándose en documentación interna.",
  trap: "PR Summaries, gestión de asientos e IP Indemnity están disponibles desde Business. Knowledge Bases = SOLO Enterprise."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿En qué plan de Copilot se puede usar Chat directamente en la interfaz web de GitHub.com para interactuar con repositorios, issues y PRs?",
  options: ["Individual", "Business", "Enterprise", "Todos los planes"],
  correct: 2,
  explanation: "<strong>Copilot en GitHub.com</strong> (Chat en la web) es una funcionalidad exclusiva de <strong>Enterprise</strong>. Los planes Individual y Business solo tienen Chat en el IDE.",
  trap: "Chat en IDE = todos los planes. Chat en GitHub.com = solo Enterprise."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "En el plan Individual, ¿cuál es el comportamiento por defecto respecto al uso de fragmentos de código para entrenamiento del modelo?",
  options: ["No se retiene ningún dato, igual que Business", "Por defecto puede utilizar fragmentos para entrenamiento, pero es configurable en ajustes personales", "Solo retiene código de archivos públicos", "Requiere consentimiento explícito antes de cada sesión"],
  correct: 1,
  explanation: "En el plan Individual, por defecto <strong>puede utilizar fragmentos de código del usuario para entrenar el modelo</strong>, aunque esto es <strong>configurable en los ajustes personales</strong>. En Business/Enterprise la no retención es obligatoria.",
  trap: "Retención de datos: Individual = posible y configurable. Business/Enterprise = NO retención garantizada contractualmente."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿En cuáles IDEs tiene extensión OFICIAL GitHub Copilot?",
  options: ["VS Code, Visual Studio, Eclipse, IntelliJ", "VS Code, Visual Studio, Neovim, JetBrains", "VS Code, Sublime Text, Atom, JetBrains", "VS Code, Visual Studio, Android Studio, NetBeans"],
  correct: 1,
  explanation: "Las extensiones oficiales son para <strong>VS Code, Visual Studio, Neovim y la familia JetBrains</strong>. Xcode también tiene soporte pero no aparece en estas opciones.",
  trap: "Eclipse, NetBeans, Sublime Text y Atom NO tienen extensión oficial de Copilot."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Qué son los archivos de instrucciones (instruction files) como .github/copilot-instructions.md?",
  options: ["Scripts que automatizan despliegues de Copilot en CI/CD", "Archivos que definen reglas y contexto personalizados (estándares de codificación, convenciones) para las respuestas de Copilot", "Documentación generada automáticamente por Copilot sobre el proyecto", "Archivos de configuración que controlan el tema visual del IDE"],
  correct: 1,
  explanation: "Los archivos de instrucciones como <strong>.github/copilot-instructions.md</strong> permiten definir estándares de codificación y convenciones del proyecto para que Copilot genere respuestas coherentes y alineadas con las prácticas del equipo.",
  trap: "Recuerda: .copilotignore NO existe. .github/copilot-instructions.md SÍ existe."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Cuál de los siguientes comandos NO es un slash command real de Copilot?",
  options: ["/explain", "/fix", "/review", "/tests"],
  correct: 2,
  explanation: "<strong>/review</strong> NO es un slash command real. Los comandos reales incluyen: /explain, /fix, /doc, /tests, /simplify, /optimize, /help, /generate.",
  trap: "Slash commands FALSOS frecuentes en el examen: /redo, /develop, /review, /format, /delete, /logout."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Cuál es el propósito del modo de agente (Agent Mode) en GitHub Copilot?",
  options: ["Monitorear el rendimiento del equipo y generar reportes", "Realizar tareas complejas multi-paso, delegando subtareas a subagentes y administrando sesiones", "Compilar y ejecutar código automáticamente en sandbox", "Reemplazar al desarrollador en tareas repetitivas sin necesidad de revisión"],
  correct: 1,
  explanation: "El <strong>Agent Mode</strong> permite que Copilot maneje tareas complejas de varios pasos, administre sesiones y delegue subtareas a subagentes para optimizar el uso del contexto.",
  trap: "'Reemplazar al desarrollador' y 'sin revisión' son SIEMPRE incorrectas."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Qué es MCP (Model Context Protocol) en el contexto de GitHub Copilot?",
  options: ["Un protocolo de cifrado para datos en tránsito", "Un estándar que permite a Copilot conectarse con herramientas y servicios externos", "Un método de compresión de código antes de enviarlo al LLM", "Un protocolo de comunicación entre diferentes IDEs"],
  correct: 1,
  explanation: "<strong>MCP (Model Context Protocol)</strong> permite que el modo agente de Copilot se integre con herramientas y servicios externos, ampliando sus capacidades.",
  trap: "MCP no es cifrado (eso es TLS), no es compresión, y no comunica IDEs entre sí."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Cuál es la diferencia clave entre el modo de edición (Edit Mode) y el modo de agente (Agent Mode)?",
  options: ["No hay diferencia; son lo mismo", "Edit Mode hace cambios puntuales; Agent Mode puede realizar tareas complejas multi-paso con subagentes", "Edit Mode es para terminal y Agent Mode es para el editor", "Edit Mode solo refactoriza y Agent Mode solo crea código nuevo"],
  correct: 1,
  explanation: "El <strong>Edit Mode</strong> se centra en modificaciones directas y puntuales. El <strong>Agent Mode</strong> maneja flujos más complejos con múltiples pasos, sesiones y subagentes.",
  trap: "Ambos funcionan en el IDE. Ambos pueden crear y modificar código."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Qué son los archivos .prompt.md en GitHub Copilot?",
  options: ["Plantillas HTML para interfaces generadas por IA", "Archivos con prompts predefinidos reutilizables para obtener respuestas coherentes en tareas repetitivas", "Scripts bash para automatizar llamadas a Copilot", "Archivos de configuración del modelo LLM"],
  correct: 1,
  explanation: "Los archivos <strong>.prompt.md</strong> permiten definir prompts reutilizables que todo el equipo puede usar, garantizando coherencia en tareas repetitivas.",
  trap: "No confundas .prompt.md (prompts reutilizables) con copilot-instructions.md (estándares/convenciones del proyecto)."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "¿Cuál de los siguientes NO es un uso válido de los Audit Log Events de Copilot?",
  options: ["Rastrear qué usuarios utilizan Copilot", "Verificar activaciones de licencias", "Medir cuántas sugerencias acepta o rechaza cada desarrollador", "Auditar cambios en políticas de Copilot"],
  correct: 2,
  explanation: "Los Audit Logs <strong>NO registran accept/reject individual de sugerencias</strong>. Registran: uso de Copilot por usuario, cambios de políticas, asignación/revocación de licencias. La retención es de 180 días.",
  trap: "Audit Logs NO incluyen métricas de productividad individual ni calidad de código."
},
{
  domain: "planes", domainLabel: "Planes y Funcionalidades", tagClass: "tag-planes",
  question: "Una empresa quiere que Copilot ayude en la revisión automática de Pull Requests. ¿Dónde se configura?",
  options: ["En la extensión del IDE de cada desarrollador", "En las políticas de la organización, habilitando las directivas de revisión de código de Copilot", "En el archivo package.json del repositorio", "No es posible; Copilot no puede revisar Pull Requests"],
  correct: 1,
  explanation: "La revisión automática de PRs se configura <strong>a nivel de organización</strong> habilitando las políticas de revisión de código de Copilot. No es una configuración individual del IDE.",
  trap: "Copilot SÍ puede revisar PRs. Se configura en políticas de organización, no en archivos del proyecto."
},

// === DOMINIO 3: Arquitectura y Datos (8 preguntas) ===
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "En el flujo de datos de Copilot, ¿qué componente aplica el filtro de toxicidad al prompt ANTES de enviarlo al LLM?",
  options: ["La extensión del IDE (cliente)", "El modelo LLM en Azure", "El Copilot Proxy (servidor intermediario)", "El repositorio de GitHub"],
  correct: 2,
  explanation: "El <strong>Copilot Proxy</strong> es responsable de: autenticación, filtros de toxicidad en el prompt INBOUND, enrutamiento al LLM, y post-procesamiento OUTBOUND (filtro código público + vulnerabilidades).",
  trap: "Proxy INBOUND: toxicidad, relevancia, anti-hacking. Proxy OUTBOUND: calidad de código, XSS/SQLi, IDs únicos."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "¿Qué algoritmo utiliza Copilot localmente en el IDE para seleccionar los fragmentos más relevantes de las pestañas vecinas?",
  options: ["TF-IDF (Term Frequency-Inverse Document Frequency)", "Jaccard Similarity", "Cosine Similarity con embeddings", "K-Nearest Neighbors"],
  correct: 1,
  explanation: "Copilot usa <strong>Jaccard Similarity</strong> localmente en el IDE para medir similitud entre archivos abiertos y seleccionar los fragmentos más relevantes para inyectar en el prompt.",
  trap: "Jaccard Similarity es un algoritmo LOCAL en el IDE, NO se ejecuta en el servidor ni en el LLM."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "¿Qué es Fill-in-the-Middle (FIM) en GitHub Copilot?",
  options: ["Un filtro que bloquea sugerencias en mitad del archivo", "Una técnica que permite completar código considerando el contexto antes Y después de la posición del cursor", "Un método de compresión para enviar más contexto al LLM", "Una función exclusiva del plan Enterprise"],
  correct: 1,
  explanation: "<strong>FIM (Fill-in-the-Middle)</strong> permite a Copilot completar código en el medio de un archivo, no solo al final. Considera el código que rodea la posición del cursor (antes y después) para generar sugerencias más precisas.",
  trap: "FIM no es un filtro ni es exclusivo de Enterprise. Es la técnica de completado bidireccional disponible en todos los planes."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "¿Cuál es la diferencia entre datos de telemetría y fragmentos de código (code snippets) en la política de datos de Copilot?",
  options: ["Son lo mismo; ambos se retienen por 30 días", "La telemetría son eventos IDE (latencia, errores) que se retienen según políticas estándar; los snippets en Business/Enterprise NO se retienen", "Los snippets se retienen 7 días y la telemetría nunca se retiene", "Ambos se descartan inmediatamente en todos los planes"],
  correct: 1,
  explanation: "<strong>Telemetría</strong> = eventos IDE, latencia, errores → se retiene según políticas estándar de Microsoft/GitHub. <strong>Code snippets</strong> = código fuente real → en Business/Enterprise NO se retienen, se procesan en memoria y se descartan inmediatamente.",
  trap: "Telemetría ≠ código. La telemetría SÍ se retiene (son métricas de uso), los snippets NO (en Business/Enterprise)."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "¿Existe una conexión directa entre el IDE del desarrollador y el modelo LLM cuando se usa GitHub Copilot?",
  options: ["Sí, para minimizar la latencia", "No; SIEMPRE pasa por el Copilot Proxy que autentica, filtra y enruta", "Solo en el plan Enterprise hay conexión directa", "Sí, pero solo para las sugerencias de Ghost Text, no para Chat"],
  correct: 1,
  explanation: "<strong>NUNCA hay conexión directa</strong> entre el IDE y el LLM. Todo el tráfico pasa por el Copilot Proxy, que actúa como intermediario para autenticación, filtrado de toxicidad, enrutamiento y post-procesamiento.",
  trap: "La arquitectura SIEMPRE incluye el Proxy. Cualquier opción que diga 'conexión directa' es incorrecta."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "Cuando la política de 'Suggestions matching public code' está en modo 'Block' y Copilot genera una sugerencia que coincide con ~150 caracteres de código público, ¿qué ocurre?",
  options: ["La sugerencia se muestra con una etiqueta de advertencia indicando la coincidencia", "La sugerencia se suprime silenciosamente y no se muestra al usuario", "Se envía una notificación al administrador de la organización", "La sugerencia se muestra pero con colores diferentes"],
  correct: 1,
  explanation: "Cuando la política está en <strong>Block</strong> y hay coincidencia de ~150 caracteres con código público, la sugerencia se <strong>suprime silenciosamente</strong>. El usuario no ve nada — simplemente no aparece la sugerencia.",
  trap: "No hay advertencias ni notificaciones; la supresión es silenciosa."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "¿Qué protocolo de cifrado se usa para transmitir datos entre el IDE y los servidores de Copilot?",
  options: ["SSH", "TLS (HTTPS)", "PGP", "AES-256 punto a punto"],
  correct: 1,
  explanation: "Todos los datos se transmiten mediante <strong>TLS cifrado (HTTPS)</strong>. Es cifrado en tránsito estándar, el mismo que usa la web segura.",
  trap: "SSH es para conexiones remotas a servidores, no para la comunicación IDE-Proxy de Copilot."
},
{
  domain: "arquitectura", domainLabel: "Arquitectura y Datos", tagClass: "tag-arquitectura",
  question: "¿Cuál de las siguientes NO es una limitación real de los LLMs que usa Copilot?",
  options: ["Ventana de tokens limitada", "Son probabilísticos (no deterministas)", "Solo funcionan con lenguajes de programación compilados", "Pueden generar código sintácticamente correcto pero con errores lógicos"],
  correct: 2,
  explanation: "Los LLMs funcionan con <strong>lenguajes compilados e interpretados</strong>. Las limitaciones reales son: ventana de tokens limitada, naturaleza probabilística, y posibilidad de generar código correcto en sintaxis pero erróneo en lógica.",
  trap: "Copilot soporta una amplia gama de lenguajes: Python, JavaScript, Java, C#, Go, Ruby, etc."
},

// === DOMINIO 4: Ingeniería de Prompts (5 preguntas) ===
{
  domain: "prompts", domainLabel: "Ingeniería de Prompts", tagClass: "tag-prompts",
  question: "Un desarrollador proporciona 3 ejemplos de pares input-output antes de pedir a Copilot que genere una función similar. ¿Qué estrategia de prompting está usando?",
  options: ["Zero-Shot", "Chain of Thought", "Few-Shot", "Iteración"],
  correct: 2,
  explanation: "<strong>Few-Shot</strong> proporciona ejemplos de pares input-output antes de la tarea real. Esto establece un patrón que el modelo tiende a seguir, mejorando la consistencia.",
  trap: "Zero-Shot = sin ejemplos. Few-Shot = con ejemplos (2-5 típicamente). One-Shot = un solo ejemplo."
},
{
  domain: "prompts", domainLabel: "Ingeniería de Prompts", tagClass: "tag-prompts",
  question: "¿Cuál es la función del participante @vscode en Copilot Chat?",
  options: ["Acceder al índice del proyecto completo", "Agente experto en la configuración y ajustes del editor VS Code", "Ejecutar comandos en la terminal integrada", "Referenciar un archivo específico como contexto"],
  correct: 1,
  explanation: "<strong>@vscode</strong> es un agente experto en la configuración del editor. Se usa para preguntas como '@vscode cómo cambio el tema a oscuro' o '@vscode cómo configuro el autoguardado'.",
  trap: "@workspace = índice del proyecto. @vscode = configuración del editor. @terminal = contexto del shell. #file = archivo específico."
},
{
  domain: "prompts", domainLabel: "Ingeniería de Prompts", tagClass: "tag-prompts",
  question: "Un desarrollador escribe: 'Usa Pandas para leer data.csv, elimina filas nulas en la columna id y devuelve un DataFrame'. ¿Cuál principio de las 4 'S' está aplicando MEJOR?",
  options: ["Single", "Surround", "Short", "Specific"],
  correct: 3,
  explanation: "Este prompt aplica el principio <strong>Specific</strong>: da instrucciones detalladas y explícitas (librería, archivo, columna, acción, tipo de retorno). No deja ambigüedades.",
  trap: "Short = ser conciso. Specific = ser detallado y explícito. No son opuestos; un buen prompt puede ser corto Y específico."
},
{
  domain: "prompts", domainLabel: "Ingeniería de Prompts", tagClass: "tag-prompts",
  question: "¿Qué hace la variable #codebase en Copilot Chat?",
  options: ["Elimina todo el contexto existente para empezar desde cero", "Fuerza la recuperación de contexto del repositorio completo", "Selecciona solo el código actualmente visible en pantalla", "Exporta el codebase como archivo descargable"],
  correct: 1,
  explanation: "<strong>#codebase</strong> fuerza la recuperación de contexto del repositorio, permitiendo a Copilot buscar información más allá de los archivos abiertos.",
  trap: "#selection = código seleccionado. #file = archivo específico. #codebase = repositorio."
},
{
  domain: "prompts", domainLabel: "Ingeniería de Prompts", tagClass: "tag-prompts",
  question: "Un desarrollador quiere que Copilot resuelva un algoritmo complejo. Escribe comentarios secuenciales: '// Paso 1: Validar input', '// Paso 2: Conectar a DB', '// Paso 3: Ejecutar query'. ¿Qué estrategia está usando?",
  options: ["Few-Shot", "Zero-Shot", "Chain of Thought (Cadena de Pensamiento)", "Iteración"],
  correct: 2,
  explanation: "<strong>Chain of Thought</strong> desglosa problemas complejos en pasos secuenciales. Los comentarios paso a paso guían al modelo a 'pensar' secuencialmente, mejorando la precisión en tareas complejas.",
  trap: "Chain of Thought ≠ Few-Shot. CoT usa pasos lógicos, Few-Shot usa ejemplos de entrada/salida."
},

// === DOMINIO 5: Casos de Uso (7 preguntas) ===
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "Un desarrollador nuevo en el equipo necesita entender una expresión regular compleja en código legacy. ¿Cuál slash command es el MÁS apropiado?",
  options: ["/fix", "/simplify", "/explain", "/doc"],
  correct: 2,
  explanation: "<strong>/explain</strong> genera una explicación en lenguaje natural del código seleccionado. Es ideal para onboarding y entender código legacy complejo, incluyendo expresiones regulares.",
  trap: "/simplify refactoriza para legibilidad (cambia el código). /explain solo explica sin modificar nada."
},
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "Un DevOps necesita generar un comando complejo de find para listar archivos mayores a 100MB. ¿Qué herramienta de Copilot debe usar?",
  options: ["gh copilot explain", "gh copilot suggest", "/fix en Copilot Chat", "@terminal en Copilot Chat"],
  correct: 1,
  explanation: "<strong>gh copilot suggest</strong> se usa cuando sabes QUÉ quieres hacer pero no CÓMO. Genera el comando correspondiente basándose en tu descripción en lenguaje natural.",
  trap: "suggest = generar comando. explain = explicar un comando existente. No confundas los dos."
},
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "¿Qué hace el slash command /optimize?",
  options: ["Optimiza la velocidad de conexión con el servidor de Copilot", "Analiza la complejidad temporal/espacial del código y sugiere mejoras de rendimiento", "Optimiza el tamaño de los archivos del proyecto", "Mejora la legibilidad del código sin cambiar su rendimiento"],
  correct: 1,
  explanation: "<strong>/optimize</strong> analiza la complejidad temporal/espacial y sugiere mejoras de rendimiento algorítmico. Es diferente de /simplify que mejora legibilidad.",
  trap: "/optimize = rendimiento (Big O). /simplify = legibilidad (complejidad ciclomática)."
},
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "¿Cuáles son las dos formas de generar completaciones de código (Ghost Text) en el editor?",
  options: ["Desde un prompt en Chat y desde la terminal", "A partir de un comentario descriptivo y desde una línea de código parcialmente escrita", "Desde un archivo de configuración y desde un slash command", "Solo se puede generar desde comentarios de código"],
  correct: 1,
  explanation: "Ghost Text se genera de dos formas en el editor: (1) un <strong>comentario</strong> que describe la intención, y (2) una <strong>línea de código parcialmente escrita</strong>. Ambas producen texto fantasma gris.",
  trap: "TRAMPA CLÁSICA: No confundas editor (Ghost Text via comentarios/código) con Chat (prompts conversacionales). Son mecanismos diferentes."
},
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "Para aceptar una sugerencia de Ghost Text en el editor, ¿qué tecla se usa?",
  options: ["Enter", "Tab", "Ctrl+Enter", "Espacio"],
  correct: 1,
  explanation: "Se usa <strong>Tab</strong> para aceptar Ghost Text. Escape para rechazar. Las flechas izquierda/derecha para navegar entre sugerencias alternativas.",
  trap: "Tab = aceptar. Ctrl+I / Cmd+I = abrir Inline Chat (que es diferente)."
},
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "¿Cómo se instala GitHub Copilot en la línea de comandos (CLI)?",
  options: ["npm install -g gh-copilot", "pip install github-copilot-cli", "gh extension install github/gh-copilot", "brew install copilot-cli"],
  correct: 2,
  explanation: "El comando correcto es <strong>gh extension install github/gh-copilot</strong>. Es una extensión de GitHub CLI, no un paquete npm ni pip.",
  trap: "Memoriza: gh extension install github/gh-copilot. Es pregunta tipo 'flash answer' en el examen."
},
{
  domain: "casos", domainLabel: "Casos de Uso", tagClass: "tag-casos",
  question: "Un desarrollador quiere portar una función de Java a Python usando Copilot. ¿Qué debería usar para asegurar que la traducción respete los patrones del proyecto destino?",
  options: ["El comando /fix para corregir errores de sintaxis Python", "@workspace para que Copilot considere los patrones existentes del proyecto Python", "gh copilot suggest para generar la función equivalente", "Copiar la función Java en un archivo .py y esperar Ghost Text"],
  correct: 1,
  explanation: "<strong>@workspace</strong> tiene acceso al índice del proyecto. Al usarlo, Copilot puede considerar los patrones, convenciones y estructura del proyecto Python destino al traducir el código.",
  trap: "La traducción de código es un caso de uso avanzado donde el contexto del proyecto destino es crucial."
},

// === DOMINIO 6: Testing (4 preguntas) ===
{
  domain: "testing", domainLabel: "Testing", tagClass: "tag-testing",
  question: "Copilot genera pruebas unitarias usando /tests. ¿Cómo detecta qué framework de testing usar (Jest, Pytest, JUnit)?",
  options: ["El desarrollador debe especificarlo siempre manualmente en el prompt", "Detecta automáticamente basándose en archivos del proyecto (package.json, pom.xml) y archivos de prueba existentes via Neighboring Tabs", "Siempre usa Jest por defecto independientemente del proyecto", "Pregunta al usuario mediante un diálogo interactivo"],
  correct: 1,
  explanation: "Copilot <strong>detecta automáticamente</strong> el framework basándose en archivos de configuración (package.json, pom.xml) y archivos de prueba existentes gracias a <strong>Neighboring Tabs</strong>.",
  trap: "Mantener archivos de test existentes abiertos mejora la detección del framework y el estilo de las pruebas generadas."
},
{
  domain: "testing", domainLabel: "Testing", tagClass: "tag-testing",
  question: "En el flujo TDD asistido por Copilot, ¿cuál es el orden correcto?",
  options: ["Implementar → Generar tests → Ejecutar → Desplegar", "Escribir/generar test (Red) → Implementar con Ghost Text → Si falla, usar /fixTestFailure", "Generar tests → Si pasan, hacer commit → Desplegar", "Implementar → Ejecutar → Corregir manualmente → Repetir"],
  correct: 1,
  explanation: "El flujo TDD asistido es: (1) <strong>Escribir/generar test</strong> y verlo fallar (Red), (2) <strong>Implementar</strong> la función con Ghost Text, (3) Si falla, usar <strong>/fixTestFailure</strong> para que Copilot analice tanto el test como la implementación.",
  trap: "Red-Green-Refactor es el patrón TDD clásico. Copilot asiste en cada paso pero NO reemplaza la validación humana."
},
{
  domain: "testing", domainLabel: "Testing", tagClass: "tag-testing",
  question: "¿Qué es un 'falso positivo' en el contexto de pruebas generadas por Copilot?",
  options: ["Una prueba que falla cuando no debería", "Una prueba que siempre pasa pero no valida realmente la lógica de negocio", "Una prueba que genera errores de compilación", "Una prueba que tarda demasiado en ejecutarse"],
  correct: 1,
  explanation: "Un <strong>falso positivo</strong> es una prueba que siempre pasa pero <strong>no prueba nada significativo</strong>. Copilot puede generar aserciones triviales que no validan la lógica real. Por eso la validación humana es OBLIGATORIA.",
  trap: "Si todas las pruebas generadas pasan al primer intento → sospecha. Revisa las aserciones para verificar que realmente prueban algo útil."
},
{
  domain: "testing", domainLabel: "Testing", tagClass: "tag-testing",
  question: "¿Cuál es el patrón estándar de estructura para pruebas unitarias que Copilot sigue?",
  options: ["Setup-Execute-Teardown", "Arrange-Act-Assert", "Given-When-Then", "Input-Process-Output"],
  correct: 1,
  explanation: "<strong>Arrange-Act-Assert (AAA)</strong>: Arrange (preparar datos y condiciones), Act (ejecutar la función bajo prueba), Assert (verificar el resultado esperado). Es el patrón estándar que Copilot genera.",
  trap: "Given-When-Then es BDD (Behavior Driven Development), no el patrón estándar de pruebas unitarias que usa Copilot."
},

// === DOMINIO 7: Privacidad y Exclusiones (7 preguntas) ===
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "Un desarrollador abre un archivo marcado como excluido en Content Exclusion. ¿Qué sucede con las sugerencias de Copilot en OTROS archivos abiertos?",
  options: ["Copilot funciona normalmente en otros archivos pero usa el archivo excluido como contexto", "El archivo excluido NO se usa como contexto para completar código en otros archivos (queda fuera de Neighboring Tabs)", "Copilot se desactiva completamente en todos los archivos hasta cerrar el archivo excluido", "Copilot muestra una advertencia en todos los archivos pero sigue funcionando"],
  correct: 1,
  explanation: "Un archivo excluido queda <strong>fuera del alcance de Neighboring Tabs</strong>. No se usa como contexto para generar sugerencias en otros archivos. Copilot sigue funcionando normalmente en los demás archivos, pero ignora el contenido excluido.",
  trap: "Copilot NO se desactiva globalmente. Solo ignora el archivo excluido como fuente de contexto."
},
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "¿Cuánto tiempo puede tardar una exclusión de contenido en propagarse y surtir efecto?",
  options: ["Instantáneamente", "Hasta 30 minutos", "24 horas", "Requiere reiniciar el IDE"],
  correct: 1,
  explanation: "Las exclusiones de contenido pueden tardar <strong>hasta 30 minutos</strong> en propagarse y surtir efecto. Es un dato que el examen puede preguntar directamente.",
  trap: "No es instantáneo ni requiere reinicio. 30 minutos es el tiempo máximo de propagación."
},
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "¿Cuál es la forma correcta y auditable de excluir archivos sensibles de Copilot en un entorno empresarial?",
  options: ["Crear un archivo .copilotignore en la raíz del repositorio", "Usar comentarios // no-copilot en los archivos sensibles", "Configurar Content Exclusion en Settings UI de GitHub.com (Organization/Repository Settings)", "Agregar rutas al archivo .gitignore del repositorio"],
  correct: 2,
  explanation: "La <strong>Exclusión de Contenido Centralizada vía UI de GitHub</strong> (Settings → Copilot → Content Exclusion) es la única forma auditable y forzosa en entornos empresariales.",
  trap: "TRAMPAS: .copilotignore NO existe. // no-copilot NO funciona. .gitignore controla Git, no Copilot."
},
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "¿Cuál es la diferencia entre el filtro de contenido (Content Filtering) y el filtro de toxicidad (Toxicity Filter)?",
  options: ["Son el mismo filtro con diferentes nombres", "Content Filtering evita código malicioso/inseguro; Toxicity Filter elimina lenguaje ofensivo o inapropiado", "Content Filtering es más estricto", "Content Filtering funciona en el IDE y Toxicity Filter en el servidor"],
  correct: 1,
  explanation: "<strong>Content Filtering</strong> = evita código malicioso, patrones inseguros (SQL injection, XSS). <strong>Toxicity Filter</strong> = elimina lenguaje ofensivo, discriminatorio, de odio. Son filtros con dominios diferentes.",
  trap: "Ambos operan a nivel del Proxy/servidor. Los filtros SIEMPRE están relacionados con seguridad/protección, NUNCA con rendimiento."
},
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "Si una organización excluye la carpeta /secrets/ y un administrador de repositorio quiere 'des-excluir' el archivo /secrets/config.yml, ¿qué pasa?",
  options: ["Puede des-excluirlo porque tiene permisos de admin en el repositorio", "NO puede des-excluirlo; las exclusiones de organización tienen prioridad sobre las de repositorio", "Se genera un conflicto que debe resolver el administrador Enterprise", "La última configuración aplicada tiene precedencia"],
  correct: 1,
  explanation: "Las exclusiones de <strong>Organización tienen prioridad</strong>. Las de repositorio se SUMAN pero NUNCA anulan las de organización. Un admin de repo no puede 'des-excluir' algo bloqueado por la organización.",
  trap: "Jerarquía fija: Organización > Repositorio. No existe mecanismo de excepción."
},
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "¿Por qué es necesario tener el filtro de Suggestions matching public code en modo Block para que la IP Indemnity sea válida?",
  options: ["Porque es un requisito técnico del modelo LLM", "Porque demuestra diligencia debida de la organización para evitar infracciones de derechos de autor", "Porque reduce la latencia de las sugerencias", "Porque es obligatorio por ley en todos los países"],
  correct: 1,
  explanation: "Tener el filtro en modo Block demuestra la <strong>diligencia debida</strong> de la organización para evitar infracciones de derechos de autor. Es una condición para que la protección legal de Microsoft aplique.",
  trap: "IP Indemnity = Business/Enterprise + filtro Block habilitado. Sin ambas condiciones, la indemnización puede no aplicar."
},
{
  domain: "privacidad", domainLabel: "Privacidad y Exclusiones", tagClass: "tag-privacidad",
  question: "En el contexto de seguridad de Copilot, ¿cuál afirmación sobre los filtros es CORRECTA?",
  options: ["Los filtros están diseñados para mejorar la productividad del desarrollador", "Los filtros siempre están relacionados con seguridad, prevención y protección, NUNCA con rendimiento", "Los filtros se pueden desactivar individualmente por cada desarrollador", "Los filtros garantizan que nunca se generará código con vulnerabilidades"],
  correct: 1,
  explanation: "Los filtros de Copilot <strong>SIEMPRE</strong> están relacionados con: seguridad, prevención, protección. <strong>NUNCA</strong> con: rendimiento, productividad o métricas. No son infalibles y no garantizan código libre de vulnerabilidades.",
  trap: "Si una pregunta del examen asocia filtros con 'rendimiento' o 'productividad', esa opción es incorrecta."
}
];

// =====================================================
// STUDY CONTENT
// =====================================================
const studyContent = [
{
  title: "Dominio 1: IA Responsable y Ética (7%)",
  content: `
    <strong>6 Principios de Microsoft (FR-PITA):</strong>
    <ul>
      <li><strong>Fairness (Equidad):</strong> Minimizar sesgos, trato equitativo</li>
      <li><strong>Reliability (Fiabilidad y Seguridad):</strong> Sistema probabilístico con parámetros de riesgo aceptables</li>
      <li><strong>Privacy (Privacidad y Seguridad):</strong> Protección de PI, cifrado en tránsito/reposo</li>
      <li><strong>Inclusiveness (Inclusividad):</strong> Accesible para todos, amplio soporte de lenguajes</li>
      <li><strong>Transparency (Transparencia):</strong> Usuarios entienden capacidades y limitaciones (ej: Public Code Match)</li>
      <li><strong>Accountability (Responsabilidad):</strong> Cadena clara de supervisión, gobernanza humana</li>
    </ul>
    <div class="highlight-box">
      <strong>Regla de Oro:</strong> El humano es el PILOTO, Copilot es el COPILOTO. La responsabilidad final del código recae SIEMPRE en el desarrollador y la organización.
    </div>
    <strong>Sistema de Prevención de Vulnerabilidades:</strong>
    <ul>
      <li><strong>Credenciales Hardcodeadas:</strong> Detecta patrones de API keys, tokens → sustituye con placeholders</li>
      <li><strong>SQL Injection:</strong> Favorece consultas parametrizadas y ORMs</li>
      <li><strong>Path Injection:</strong> Filtra inputs no sanitizados en operaciones de archivos</li>
    </ul>
    <div class="warn-box">⚠️ NO es infalible. Siempre requiere revisión humana + herramientas SAST (GitHub Advanced Security).</div>
  `
},
{
  title: "Dominio 2: Planes y Funcionalidades (31%)",
  content: `
    <strong>Matriz Comparativa de Planes:</strong>
    <table>
      <tr><th>Feature</th><th>Individual</th><th>Business</th><th>Enterprise</th></tr>
      <tr><td>Ghost Text + Chat IDE + CLI</td><td>✅</td><td>✅</td><td>✅</td></tr>
      <tr><td>Retención de código para entrenamiento</td><td>Posible*</td><td>❌ No</td><td>❌ No</td></tr>
      <tr><td>IP Indemnity</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>Gestión de políticas</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>PR Summaries</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>Copilot en GitHub.com</td><td>❌</td><td>❌</td><td>✅</td></tr>
      <tr><td>Knowledge Bases</td><td>❌</td><td>❌</td><td>✅</td></tr>
      <tr><td>Modelos personalizados</td><td>❌</td><td>❌</td><td>✅</td></tr>
    </table>
    <div class="highlight-box">
      <strong>Reglas rápidas:</strong> Freelancer/Estudiante → Individual | Organización/IP → Business | Código interno/Knowledge Bases → Enterprise
    </div>
    <strong>Jerarquía de Políticas:</strong> Enterprise (más alto) → Organización. Si Enterprise = "Enforced", Organization NO puede anular.
    <br><br>
    <strong>Caso Especial Non-GHE:</strong> Empresas con código en GitLab/Bitbucket/Azure DevOps pueden usar Copilot Business sin migrar repositorios.
    <br><br>
    <strong>Slash Commands Reales:</strong> /explain, /fix, /doc, /tests, /simplify, /optimize, /help, /generate
    <br><strong>Slash Commands FALSOS:</strong> /redo, /develop, /review, /format, /delete, /logout
    <br><br>
    <strong>Archivos importantes:</strong>
    <ul>
      <li><strong>.github/copilot-instructions.md</strong> → SÍ existe (estándares y convenciones)</li>
      <li><strong>.prompt.md</strong> → SÍ existe (prompts reutilizables)</li>
      <li><strong>.copilotignore</strong> → NO existe (trampa frecuente)</li>
    </ul>
  `
},
{
  title: "Dominio 3: Arquitectura y Datos (15%)",
  content: `
    <strong>Flujo de Datos (Cliente-Proxy-LLM):</strong>
    <ol>
      <li><strong>Cliente (IDE):</strong> Monitorea contexto, ejecuta Jaccard Similarity para Neighboring Tabs, ensambla prompt</li>
      <li><strong>Copilot Proxy (INBOUND):</strong> Autenticación, filtros de toxicidad, enrutamiento a Azure</li>
      <li><strong>LLM (Azure):</strong> Procesa prompt, genera probabilidades de tokens</li>
      <li><strong>Copilot Proxy (OUTBOUND):</strong> Filtro código público, análisis vulnerabilidades</li>
      <li><strong>Cliente (IDE):</strong> Recibe y muestra como Ghost Text</li>
    </ol>
    <div class="warn-box">⚠️ NUNCA hay conexión directa IDE → LLM. Siempre pasa por el Proxy.</div>
    <strong>Neighboring Tabs:</strong> Copilot escanea TODOS los archivos abiertos, usa Jaccard Similarity para encontrar código relevante. Archivos relevantes abiertos = mejores sugerencias. Archivos irrelevantes = contaminación.
    <br><br>
    <strong>Fill-in-the-Middle (FIM):</strong> Completa código en el medio del archivo, considerando contexto antes Y después del cursor.
    <br><br>
    <strong>Privacidad:</strong>
    <ul>
      <li><strong>Telemetría:</strong> Eventos IDE, latencia, errores → se retiene según políticas estándar</li>
      <li><strong>Code Snippets (Business/Enterprise):</strong> NO retención, procesados en memoria, descartados inmediatamente</li>
      <li><strong>Cifrado:</strong> TLS en tránsito</li>
    </ul>
  `
},
{
  title: "Dominio 4: Ingeniería de Prompts (9%)",
  content: `
    <strong>Las 4 "S":</strong>
    <ul>
      <li><strong>Single (Único):</strong> Una tarea a la vez. ❌ "Crea API completa" → ✅ "Crea ruta GET para usuarios"</li>
      <li><strong>Specific (Específico):</strong> Instrucciones detalladas y explícitas</li>
      <li><strong>Short (Corto):</strong> Conciso, sin ruido lingüístico. Más texto ≠ mejores resultados</li>
      <li><strong>Surround (Rodear):</strong> Contexto circundante: archivos abiertos, cursor correcto, nombres descriptivos</li>
    </ul>
    <strong>Estrategias:</strong>
    <ul>
      <li><strong>Zero-Shot:</strong> Sin ejemplos previos</li>
      <li><strong>Few-Shot:</strong> Con ejemplos input-output (2-5 típicamente)</li>
      <li><strong>Chain of Thought:</strong> Pasos secuenciales (// Paso 1, // Paso 2...)</li>
      <li><strong>Iteración:</strong> Refinar si la primera sugerencia no es perfecta</li>
    </ul>
    <strong>Participantes (@):</strong> @workspace (índice proyecto), @vscode (config editor), @terminal (shell)
    <br><strong>Variables (#):</strong> #file (archivo específico), #selection (código seleccionado), #codebase (repositorio)
  `
},
{
  title: "Dominio 5: Casos de Uso para Desarrolladores (14%)",
  content: `
    <strong>Slash Commands:</strong>
    <table>
      <tr><th>Comando</th><th>Función</th></tr>
      <tr><td>/explain</td><td>Explicación en lenguaje natural del código</td></tr>
      <tr><td>/fix</td><td>Analiza errores y propone correcciones</td></tr>
      <tr><td>/doc</td><td>Genera documentación (Javadoc, Docstrings)</td></tr>
      <tr><td>/tests</td><td>Genera pruebas unitarias</td></tr>
      <tr><td>/simplify</td><td>Refactorización para legibilidad</td></tr>
      <tr><td>/optimize</td><td>Mejora complejidad temporal/espacial</td></tr>
    </table>
    <strong>CLI:</strong>
    <ul>
      <li><strong>gh copilot suggest:</strong> Genera comando (sabes QUÉ pero no CÓMO)</li>
      <li><strong>gh copilot explain:</strong> Explica un comando existente antes de ejecutar</li>
      <li><strong>Instalación:</strong> gh extension install github/gh-copilot</li>
    </ul>
    <div class="highlight-box">
      <strong>Editor vs Chat:</strong> Editor = Ghost Text, Tab para aceptar, comentarios. Chat = Conversación, Ctrl+I/Cmd+I, slash commands, variables # y @.
    </div>
  `
},
{
  title: "Dominio 6: Testing con Copilot (9%)",
  content: `
    <strong>Generación de pruebas:</strong>
    <ul>
      <li>/tests detecta automáticamente framework (Jest, Pytest, JUnit) via archivos del proyecto</li>
      <li>Solicitar explícitamente casos de borde: negativas, cero, flotantes extremos</li>
      <li>Genera fixtures y datos sintéticos complejos</li>
    </ul>
    <strong>Flujo TDD Asistido:</strong>
    <ol>
      <li>Escribir/generar test → verlo fallar (Red)</li>
      <li>Implementar función con Ghost Text (Green)</li>
      <li>Si falla → /fixTestFailure</li>
    </ol>
    <strong>Patrón AAA:</strong> Arrange (preparar) → Act (ejecutar) → Assert (verificar)
    <div class="warn-box">⚠️ VALIDACIÓN HUMANA OBLIGATORIA: Copilot puede generar pruebas que siempre pasan (falsos positivos). Leer y entender cada aserción.</div>
  `
},
{
  title: "Dominio 7: Privacidad y Exclusiones (15%)",
  content: `
    <strong>Content Exclusion:</strong>
    <ul>
      <li><strong>Configuración:</strong> Organization/Repo Settings → Copilot → Content Exclusion</li>
      <li><strong>Formato:</strong> Rutas de archivos o patrones glob (como .gitignore)</li>
      <li><strong>Efecto:</strong> Icono deshabilitado, NO envía prompts, NO usa como contexto en Neighboring Tabs</li>
      <li><strong>Propagación:</strong> Puede tardar hasta 30 minutos</li>
    </ul>
    <strong>Precedencia:</strong> Organización (prioridad) > Repositorio (se suma). Admin de repo NO puede des-excluir archivo bloqueado por organización.
    <br><br>
    <strong>IP Indemnity:</strong> Requiere plan Business/Enterprise + Filtro de Suggestions matching public code en modo Block.
    <br><br>
    <strong>Filtros:</strong>
    <ul>
      <li><strong>Content Filtering:</strong> Evita código malicioso/inseguro</li>
      <li><strong>Toxicity Filter:</strong> Elimina contenido ofensivo/inapropiado</li>
    </ul>
    <div class="highlight-box">Los filtros SIEMPRE están relacionados con: Seguridad, Prevención, Protección. NUNCA con: Rendimiento o Productividad.</div>
  `
}
];

// =====================================================
// CHEAT SHEET CONTENT
// =====================================================
const cheatCards = [
{
  title: "🎯 Respuestas Flash",
  html: `<div class="flash-grid">
    <div class="flash-key">Matching Filter</div><div class="flash-val">~150 chars, admin activa</div>
    <div class="flash-key">Context Window</div><div class="flash-val">Límite tokens del LLM</div>
    <div class="flash-key">Zero-shot</div><div class="flash-val">Sin ejemplos, solo descripción</div>
    <div class="flash-key">Few-shot</div><div class="flash-val">2-5 ejemplos previos</div>
    <div class="flash-key">Knowledge Base</div><div class="flash-val">Solo .md, solo Enterprise</div>
    <div class="flash-key">Audit Log</div><div class="flash-val">Org Owner, 180 días</div>
    <div class="flash-key">CLI Install</div><div class="flash-val"><code>gh extension install github/gh-copilot</code></div>
    <div class="flash-key">Inline Chat</div><div class="flash-val">Ctrl+I (Win) / Cmd+I (Mac)</div>
    <div class="flash-key">Content Exclusion</div><div class="flash-val">Org Settings → Copilot</div>
    <div class="flash-key">Propagación</div><div class="flash-val">Hasta 30 minutos</div>
  </div>`
},
{
  title: "⚡ Reglas Mentales Rápidas",
  html: `<ul>
    <li>Organización / Estándares internos → <strong>Enterprise</strong></li>
    <li>Editor → <strong>Ghost Text</strong> | Conversación → <strong>Chat</strong></li>
    <li>Propósito → <strong>Calidad / Productividad</strong></li>
    <li>Seguridad → <strong>Filtrado</strong></li>
    <li>Código base interno → <strong>Enterprise</strong></li>
    <li>IP Indemnity → <strong>Business/Enterprise + Block</strong></li>
    <li>Freelancer / Estudiante → <strong>Individual</strong></li>
    <li>Proxy IN → filtra request | Proxy OUT → filtra response</li>
  </ul>`
},
{
  title: "🚫 Archivos: Reales vs Falsos",
  html: `<ul>
    <li>✅ <code>.github/copilot-instructions.md</code> — SÍ existe</li>
    <li>✅ <code>.prompt.md</code> — SÍ existe (prompts reutilizables)</li>
    <li>❌ <code>.copilotignore</code> — NO existe</li>
    <li>❌ <code>// no-copilot</code> — NO funciona</li>
    <li>❌ <code>.gitignore</code> no controla Copilot</li>
  </ul>`
},
{
  title: "🔀 Slash Commands: Reales vs Falsos",
  html: `<p><strong>REALES:</strong> <code>/explain</code> <code>/doc</code> <code>/fix</code> <code>/tests</code> <code>/simplify</code> <code>/optimize</code> <code>/help</code> <code>/generate</code></p>
  <p style="margin-top:8px;"><strong>FALSOS:</strong> <code>/redo</code> <code>/develop</code> <code>/review</code> <code>/format</code> <code>/delete</code> <code>/logout</code></p>`
},
{
  title: "🧠 Mnemónicos",
  html: `<ul>
    <li><strong>FR-PITA</strong> = 6 Principios: Fairness, Reliability, Privacy, Inclusiveness, Transparency, Accountability</li>
    <li><strong>4 S's</strong> = Single, Specific, Short, Surround</li>
    <li><strong>AAA</strong> = Arrange, Act, Assert (testing)</li>
    <li><strong>TDD</strong> = Red → Green → Refactor</li>
  </ul>`
},
{
  title: "⚠️ Trampas del Examen",
  html: `<ul>
    <li>"La IA puede hacer todo sin supervisión" → <strong>SIEMPRE incorrecta</strong></li>
    <li>"Garantiza 100%" → <strong>SIEMPRE incorrecta</strong></li>
    <li>"Reemplaza al desarrollador" → <strong>SIEMPRE incorrecta</strong></li>
    <li>"Se implementa automáticamente" → <strong>SIEMPRE incorrecta</strong></li>
    <li>"Nunca genera errores" → <strong>SIEMPRE incorrecta</strong></li>
    <li>Filtros = Seguridad, <strong>NUNCA</strong> rendimiento</li>
    <li>Preguntas con "NO" → Lee DOS veces</li>
  </ul>`
},
{
  title: "📊 Distribución del Examen",
  html: `<ul>
    <li><strong>31%</strong> — Planes y Funcionalidades (prioridad máxima)</li>
    <li><strong>15%</strong> — Arquitectura y Datos</li>
    <li><strong>15%</strong> — Privacidad y Exclusiones</li>
    <li><strong>14%</strong> — Casos de Uso</li>
    <li><strong>9%</strong> — Ingeniería de Prompts</li>
    <li><strong>9%</strong> — Testing</li>
    <li><strong>7%</strong> — IA Responsable</li>
  </ul>
  <p style="margin-top:10px;">Necesitas <strong>700/1000</strong> → ~35/50 correctas</p>`
},
{
  title: "🔒 Limitaciones de Copilot",
  html: `<p>Copilot <strong>NO puede:</strong></p>
  <ul>
    <li>Hacer cálculos matemáticos precisos</li>
    <li>Ejecutar código para verificar</li>
    <li>Acceder internet en tiempo real</li>
    <li>Garantizar código sin bugs</li>
    <li>Reemplazar code reviews humanos</li>
    <li>Entrenar en tiempo real con tu código</li>
  </ul>`
}
];

// =====================================================
// APP STATE & LOGIC
// =====================================================
let currentScreen = 'home';
let quizQuestions = [];
let currentQ = 0;
let score = 0;
let selectedOption = -1;
let answered = false;
let domainScores = {};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const labels = { home: 'Inicio', study: 'Estudiar', cheat: 'Cheat Sheet', quiz: 'Quiz' };
  document.querySelectorAll('.nav-tab').forEach(t => {
    if (t.textContent.trim() === labels[id]) t.classList.add('active');
  });
  currentScreen = id;
  window.scrollTo(0, 0);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(domain) {
  if (domain) {
    quizQuestions = shuffle(allQuestions.filter(q => q.domain === domain));
  } else {
    quizQuestions = shuffle([...allQuestions]);
  }
  currentQ = 0;
  score = 0;
  selectedOption = -1;
  answered = false;
  domainScores = {};
  updateNavScore();
  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = quizQuestions[currentQ];
  const total = quizQuestions.length;
  document.getElementById('progressBar').style.width = ((currentQ / total) * 100) + '%';
  document.getElementById('progressText').textContent = `${currentQ + 1}/${total}`;
  document.getElementById('quizDomainTag').className = 'quiz-domain-tag ' + q.tagClass;
  document.getElementById('quizDomainTag').textContent = q.domainLabel;
  document.getElementById('quizQuestion').textContent = q.question;
  
  const letters = ['A', 'B', 'C', 'D'];
  let optHtml = '';
  q.options.forEach((opt, i) => {
    optHtml += `<div class="quiz-option" onclick="selectOption(${i})" id="opt-${i}">
      <div class="letter">${letters[i]}</div>
      <div>${opt}</div>
    </div>`;
  });
  document.getElementById('quizOptions').innerHTML = optHtml;
  document.getElementById('quizFeedback').style.display = 'none';
  document.getElementById('btnSubmit').style.display = 'inline-flex';
  document.getElementById('btnSubmit').disabled = true;
  document.getElementById('btnNext').style.display = 'none';
  selectedOption = -1;
  answered = false;
}

function selectOption(i) {
  if (answered) return;
  selectedOption = i;
  document.querySelectorAll('.quiz-option').forEach((el, idx) => {
    el.classList.remove('selected');
    if (idx === i) el.classList.add('selected');
  });
  document.getElementById('btnSubmit').disabled = false;
}

function submitAnswer() {
  if (selectedOption < 0 || answered) return;
  answered = true;
  const q = quizQuestions[currentQ];
  const isCorrect = selectedOption === q.correct;
  
  if (isCorrect) score++;
  if (!domainScores[q.domain]) domainScores[q.domain] = { correct: 0, total: 0 };
  domainScores[q.domain].total++;
  if (isCorrect) domainScores[q.domain].correct++;
  
  updateNavScore();
  
  document.querySelectorAll('.quiz-option').forEach((el, idx) => {
    el.classList.add('disabled');
    el.classList.remove('selected');
    if (idx === q.correct) el.classList.add('correct');
    if (idx === selectedOption && !isCorrect) el.classList.add('incorrect');
  });
  
  const fb = document.getElementById('quizFeedback');
  fb.style.display = 'block';
  fb.className = 'quiz-feedback ' + (isCorrect ? 'correct-feedback' : 'incorrect-feedback');
  fb.innerHTML = `
    <h4>${isCorrect ? '✅ ¡Correcta!' : '❌ Incorrecta'}</h4>
    <div>${q.explanation}</div>
    ${q.trap ? `<div class="trap">🪤 <strong>Trampa:</strong> ${q.trap}</div>` : ''}
  `;
  
  document.getElementById('btnSubmit').style.display = 'none';
  document.getElementById('btnNext').style.display = 'inline-flex';
  document.getElementById('btnNext').textContent = currentQ < quizQuestions.length - 1 ? 'Siguiente →' : 'Ver Resultados';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= quizQuestions.length) {
    showResults();
  } else {
    renderQuestion();
    window.scrollTo(0, 0);
  }
}

function updateNavScore() {
  const total = quizQuestions.length;
  const answered = Object.values(domainScores).reduce((s, d) => s + d.total, 0);
  if (answered > 0) {
    document.getElementById('navScore').innerHTML = `<span class="score-value">${score}/${answered}</span> ✅`;
  } else {
    document.getElementById('navScore').innerHTML = '';
  }
}

function showResults() {
  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 70;
  
  document.getElementById('resultPct').textContent = pct + '%';
  document.getElementById('resultStatus').textContent = passed ? '¡APROBADO!' : 'No aprobado';
  document.getElementById('resultStatus').className = 'results-status ' + (passed ? 'pass' : 'fail');
  document.getElementById('resultSubtitle').textContent = `${score} de ${total} correctas (necesitas 70% = ${Math.ceil(total * 0.7)})`;
  
  const domainLabels = {
    responsible: { label: 'IA Responsable', color: 'var(--purple)' },
    planes: { label: 'Planes y Funcionalidades', color: 'var(--accent)' },
    arquitectura: { label: 'Arquitectura y Datos', color: 'var(--orange)' },
    prompts: { label: 'Ingeniería de Prompts', color: 'var(--green)' },
    casos: { label: 'Casos de Uso', color: '#f778ba' },
    testing: { label: 'Testing', color: '#79c0ff' },
    privacidad: { label: 'Privacidad y Exclusiones', color: 'var(--red)' },
  };
  
  let domHtml = '';
  for (const [key, info] of Object.entries(domainLabels)) {
    const ds = domainScores[key] || { correct: 0, total: 0 };
    const dpct = ds.total > 0 ? Math.round((ds.correct / ds.total) * 100) : 0;
    domHtml += `<div class="results-domain-row">
      <div class="domain-name">${info.label}</div>
      <div class="domain-score" style="color:${dpct >= 70 ? 'var(--green)' : 'var(--red)'}">${ds.correct}/${ds.total}</div>
      <div class="domain-bar-wrap">
        <div class="domain-bar" style="width:${dpct}%;background:${info.color}"></div>
      </div>
    </div>`;
  }
  document.getElementById('resultDomains').innerHTML = domHtml;
  
  showScreen('results');
}

// Build study accordion
function buildStudy() {
  const acc = document.getElementById('studyAccordion');
  let html = '';
  studyContent.forEach((item, i) => {
    html += `<div class="accordion-item" id="acc-${i}">
      <button class="accordion-header" onclick="toggleAccordion(${i})">
        <span>${item.title}</span>
        <span class="arrow">▼</span>
      </button>
      <div class="accordion-body" id="accBody-${i}">
        <div class="accordion-body-inner">${item.content}</div>
      </div>
    </div>`;
  });
  acc.innerHTML = html;
}

function toggleAccordion(i) {
  const item = document.getElementById('acc-' + i);
  const body = document.getElementById('accBody-' + i);
  if (item.classList.contains('open')) {
    item.classList.remove('open');
    body.style.maxHeight = '0px';
  } else {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

// Build cheat sheet
function buildCheat() {
  const grid = document.getElementById('cheatGrid');
  let html = '';
  cheatCards.forEach(card => {
    html += `<div class="cheat-card">
      <h3>${card.title}</h3>
      ${card.html}
    </div>`;
  });
  grid.innerHTML = html;
}

// Init
buildStudy();
buildCheat();
