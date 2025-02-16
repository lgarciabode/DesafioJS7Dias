let respuesta = prompt('¿Quires seguir en el area de backend o en el area de frontend?').toLowerCase();
if(respuesta = 'frontend'){
    prompt('¿Quieres aprender React o aprender Vue?');
} else {
    if (respuesta = 'backend'){
        prompt('¿Quieres aprender C# o aprender Java?');
    }
}

let respuesta2 = prompt('¿Quieres especializarte en el area elegida o ser desarrollador FullStack?').toLowerCase();
if(respuesta2 = 'area elegida'){
    prompt('Excelente! Vas por buen camino');
} else {
    if (respuesta = 'fullstack'){
        prompt('Aun falta un largo trayecto, pero lo conseguiras');
    }
}
 
let op = ""; // Inicializamos la variable para evitar "undefined"

do { 
    let respuesta3 = prompt("¿Qué tecnología te interesa aprender?");
    
    // Si el usuario cancela, evitamos errores
    if (respuesta3) {
        respuesta3 = respuesta3.toLowerCase();

        if (respuesta3 === "html") {
            alert("HTML: Estructura base de las páginas web.");
        } else if (respuesta3 === "css") {
            alert("CSS: Estilos y diseño visual de las páginas.");
        } else if (respuesta3 === "javascript") {
            alert("JavaScript: Lenguaje de programación para interactividad.");
        } else if (respuesta3 === "react") {
            alert("React: Librería para construir interfaces dinámicas.");
        } else if (respuesta3 === "vue") {
            alert("Vue.js: Framework progresivo para interfaces interactivas.");
        } else if (respuesta3 === "angular") {
            alert("Angular: Framework robusto de Google para aplicaciones web.");
        } else if (respuesta3 === "node.js") {
            alert("Node.js: Entorno para ejecutar JavaScript en el servidor.");
        } else if (respuesta3 === "express.js") {
            alert("Express.js: Framework minimalista para backend en Node.js.");
        } else if (respuesta3 === "django") {
            alert("Django: Framework rápido y seguro para Python.");
        } else if (respuesta3 === "mysql") {
            alert("MySQL: Base de datos relacional popular.");
        } else if (respuesta3 === "mongodb") {
            alert("MongoDB: Base de datos NoSQL basada en documentos.");
        } else if (respuesta3 === "redis") {
            alert("Redis: Almacenamiento en memoria para caché y sesiones.");
        } else if (respuesta3 === "jwt") {
            alert("JWT: Autenticación segura con tokens.");
        } else if (respuesta3 === "oauth") {
            alert("OAuth: Protocolo de autenticación para APIs.");
        } else if (respuesta3 === "docker") {
            alert("Docker: Contenedores para entornos de desarrollo.");
        } else if (respuesta3 === "aws") {
            alert("AWS: Plataforma de servicios en la nube.");
        } else {
            alert("No conozco esa tecnología, pero sigue aprendiendo. 🚀");
        }
    }

    op = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' para continuar o deja en blanco para salir.");

    // Si el usuario cancela o no escribe nada, rompemos el bucle
    if (op === null || op.trim() === "") {
        break;
    }

    op = op.toLowerCase();

} while (op === "ok");

