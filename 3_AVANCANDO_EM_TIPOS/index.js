"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers[3]);
// numbers = "teste"
const names = ["Gustavo", "Maia", "Oliveira"];
// names.push(2)
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[2]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Matheus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma("a", "b")
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
// 6 - funções anonia
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// passCoordinates({nome: 1. sobrenome: 2})
const pessoaObj = { nome: "Natheus", surname: "Battisti" };
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Maiao", "da Silva Sauro"));
console.log(advancedGreeting("Dias"));
//10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// shwoBalance(true)
const arr2 = [1, "teste", true];
//11 - Avançando em Union Types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(Id) {
    console.log(`Seu id é ${Id}`);
}
showId(1);
showId("200");
//function showCoords(obj: {x: number, y:number, z:number}) {
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Maiao", age: 30 };
console.log(somePerson);
//stype personType = {
//    age: number
//}
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("left");
// showDirection("top")
//16 - non null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
//17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
//18 - symbol
let symbolA = Symbol("a"); //annotation
let symbolB = Symbol("a"); //inference
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
