let numeroUno = 1;
let stringUno = '1';
let numeroTres = 3;
let stringTres = '3';
let numeroCinco = 5;
let stringCinco = '5';

if (numeroUno == stringUno && typeof numeroUno !== typeof stringUno) {
    console.log('Las variables, numeroUno y stringUno tienen el mismo valor pero son de difrentes tipos');
} else {
    console.log('Las variables, numeroUno y stringUno tienen diferentes valores');
}

if (numeroTres === stringTres){
    console.log('Las variables, numeroTres y stringTres tienen el mismo valor y el mismo tipo');
} else {
    console.log('Las variables, numeroTres y stringTres son de diferentes tipos');
}

if (numeroCinco == stringCinco && typeof numeroCinco !== typeof stringCinco) {
    console.log('Las variables, numeroCinco y stringCinco, tienen el mismo valor pero diferentes tipos');
} else {
    console.log('Las variables, numeroCinco y stringCinco, son de distintos tipo');
}


