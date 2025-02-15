const nombre = prompt('¿Como es tu nombre?');
const edad = prompt('¿Cuantos años tienes?');
const lenguaje = prompt('¿Que lenguaje de programacion estas estudiando?');

alert(`Hola ${nombre}, tenes ${edad} y estas estudiando ${lenguaje} `);

const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`)

if (respuesta == 1){
    alert(`Genial ${nombre}, que tengas suerte en ${lenguaje}`);
} 
if (respues == 2){
    alert(`Lo siento ${nombre}, espero que encuentres un lenguaje que te guste mas`);
}