let minimo = 1;
let maximo = 10;
let num = Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)
let intento = 0;
let acertado = false;

while (intento < 3) { 
    let resp = prompt('Ingrese el número que cree es correcto');

    if (resp == num) { // Comparación flexible para permitir números ingresados como strings
        alert('¡Correcto!');
        acertado = true;
        break; // Sale del bucle si la respuesta es correcta
    } else {
        alert('Incorrecto, intente de nuevo');
    }
    
    intento++; // Incrementa el contador después de cada intento
}

// Si no acertó en los 3 intentos, mostramos el mensaje final
if (!acertado) {
    alert(`Lo siento, no acertaste en 3 intentos. El número era: ${num}.`);
}
