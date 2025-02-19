//Creacion de listas
let frutas = [];
let verduras = [];
let snacks = [];
let legumbres = [];
let variedad = [];
//Creacion de variables
let alimento = "";
let categotia = "";
//Creacion de opcion salir
let op = ""
while (op != "no") {
alimento = prompt('¿Que elemento agregas a la lista?');
categoria = prompt('¿A que categoria pertenece? (frutas, verduras, snack, legumbres, variedad')
if (categoria == "frutas") {
    frutas.push(alimento);
    } else if (categoria == "verduras") {
        verduras.push(alimento);
        } else if (categoria == "snack") {
            snacks.push(alimento);
            } else if (categoria == "legumbres") {
                legumbres.push(alimento);
                } else if (categoria == "variedad") {
                    variedad.push(alimento);
                    } else {
                        alert("Categoria no encontrada");
                        }
op = prompt('¿Quieres agregar otro elemento a la lista?')
}

alert('Lista de compras');
if (frutas.length != 0){
    alert('Frutas: ' + frutas);
}else{
    alert('No hay frutas que comprar')
}
if (verduras.length != 0){
    alert('Verduras: ' + verduras);
} else {
    alert('No hay verduras que comprar')
}
if (snacks.length != 0){
    alert('Snacks: ' + snacks);
} else {
    alert('No hay snacks que comprar')
}
if (legumbres.length != 0){
    alert('Legumbres: ' + legumbres);
} else {
    alert('No hay legumbres que comprar')
}
if (veriedad.length != 0){
    alert('Variedad: ' + variedad);
} else {
    alert('No hay variedad que comprar')
}
