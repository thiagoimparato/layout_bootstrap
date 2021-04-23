




var valor = 89;


let notaCem = 0;

let notaCinquenta = 0;

let notaVinte = 0;

let notaDez = 0;

let notaCinco = 0;

let notaDois = 0;

let notaUm = 0;

while (valor != 0) {

  if (valor >= 100) {

    valor -= 100;

    notaCem++;

  }

  else if (valor >= 50) {

    valor -= 50;

    notaCinquenta++;

  }

  else if (valor >= 20) {

    valor -= 20;

    notaVinte++;

  }

  else if (valor >= 10) {

    valor -= 10;

    notaDez++;

  }

  else if (valor >= 5) {

    valor -= 5;

    notaCinco++;

  }

  else if (valor >= 2) {

    valor -= 2;

    notaDois++;

  }

  else if (valor >= 1) {

    valor -= 1;

    notaUm++;

  }

}

console.log(valor);
console.log(notaCem + " nota(s) de R$ 100,00");
console.log(notaCinquenta + " nota(s) de R$ 50,00");
console.log(notaVinte + " nota(s) de R$ 20,00");
console.log(notaDez + " nota(s) de R$ 10,00");
console.log(notaCinco + " nota(s) de R$ 5,00");
console.log(notaDois + " nota(s) de R$ 2,00");
console.log(notaUm + " nota(s) de R$ 1,00");






/*let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];

let quantia = 253;

let resto = quantia;

while (resto >= 1) {
  
  nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];

}

console.log(quantia);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");

*/