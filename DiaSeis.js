// Creación de listas
let listas = {
    frutas: [],
    verduras: [],
    snacks: [],
    legumbres: [],
    variedad: []
};

let opcion = "";

while (opcion !== "no") {
    opcion = prompt('¿Quieres "agregar" o "eliminar" un elemento de la lista? (Escribe "no" para salir)').toLowerCase();

    if (opcion === "agregar") {
        let alimento = prompt("¿Qué elemento agregas a la lista?");
        let categoria = prompt("¿A qué categoría pertenece? (frutas, verduras, snacks, legumbres, variedad)").toLowerCase();

        if (listas[categoria]) {
            listas[categoria].push(alimento);
            alert(`"${alimento}" agregado a la categoría ${categoria}.`);
        } else {
            alert("Categoría no encontrada.");
        }
    } 
    
    else if (opcion === "eliminar") {
        let categoriasDisponibles = Object.keys(listas).filter(cat => listas[cat].length > 0);

        if (categoriasDisponibles.length === 0) {
            alert("No hay elementos en la lista para eliminar.");
            continue;
        }

        let categoria = prompt(`¿De qué categoría deseas eliminar un elemento? (${categoriasDisponibles.join(", ")})`).toLowerCase();

        if (listas[categoria] && listas[categoria].length > 0) {
            let elemento = prompt(`Lista actual en ${categoria}: ${listas[categoria].join(", ")}\n¿Qué elemento deseas eliminar?`);
            let index = listas[categoria].indexOf(elemento);

            if (index !== -1) {
                listas[categoria].splice(index, 1);
                alert(`"${elemento}" eliminado de la categoría ${categoria}.`);
            } else {
                alert("¡No fue posible encontrar el elemento en la lista!");
            }
        } else {
            alert("Categoría vacía o inexistente.");
        }
    } 
}

alert("Lista de compras final:");
for (let categoria in listas) {
    if (listas[categoria].length > 0) {
        alert(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listas[categoria].join(", ")}`);
    } else {
        alert(`No hay ${categoria} que comprar.`);
    }
}
