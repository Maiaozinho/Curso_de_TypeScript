"use strict";
// 1 - Numbers
let x = 11;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// - 2 Strings
const firstName = "Maiao";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Da Silva Sauro";
fullName = firstName + " " + lastName;
function nomeCompleto(nome1, nome2) {
    return nome1 + nome2;
}
console.log(nomeCompleto, firstName, lastName);
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
4; // - inference e annotation
let ann = "Teste";
let inf = "Teste";
// ann = 1
// inf = 1
console.log("Testando");
//5 - desafio 2
const n1 = 10;
const numberToString = n1.toString();
const printMyNumber = `Eu vou impprimir o ${numberToString}`;
console.log(printMyNumber);
