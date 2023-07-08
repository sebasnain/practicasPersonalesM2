function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

//con la funcion flecha seria de esta forma

let sumarConFlecha = (a, b) => {
  let resultado = a + b;
  return resultado;
};

console.log(sumar(2, 3));
console.log(sumarConFlecha(2, 3));

const sumarConFlechaAlternativa = (a, b) => a + b; // el return esta de forma inplicita

console.log(sumarConFlechaAlternativa(2, 4));

const arr = [2, 4, 5, 6, 7, 8];

const pares = arr.filter(function (num) {
  return num % 2 === 0;
});

console.log(pares);

// #############version fleha ###########

const paresConFlecha = arr.filter((num)=> num % 2 === 0);
console.log(paresConFlecha)

//################################

// la funciones flechas generar auto bind

