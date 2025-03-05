"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number")
        console.log(a + b);
    else
        console.log("Por favor, confira os dados inseridos");
}
sum("1", "1");
sum(1, 1);
sum("1", 1);
// 2 - checando se o valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Ola ${user.name} deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name; // esse eh o nome do cachorro para usar no molde
        if (breed) { //caso o cachorro tenha raca
            this.breed = breed; //essa eh a raca do cachorro para usar no molde
        }
    }
}
const tuca = new Dog("Tuca"); //dando informacoes sobre o cachorro, soh o nome
const bob = new Dog("Bob", "Pastor Alemão"); // dando informacoes sobre o cachorro, nome e raca
function ShowDogDetails(dog) {
    if ('breed' in dog) { // se tive raca registrada no cachorro
        console.log(`O cachorro é da raça ${dog.breed}`); //exiba a mensagem e a raca
    }
    else { //se nao tiver raca
        console.log("O cachorro é vira-lata"); //exiba essa mensagem para todos
    }
}
ShowDogDetails(tuca); // chamando a funcao para dizer a raca enquanto a mesma puxa as informacoes
ShowDogDetails(bob); // chamando a funcao para dizer a raca enquanto a mesma puxa as informacoes
// - Desafio 3 - meu código
function review(avaliacao) {
    if (avaliacao === 1) {
        console.log("agradeco a avaliacao, mesmo sendo 1");
    }
    else if (avaliacao === 2) {
        console.log("agradeco a avaliacao, mesmo sendo 2");
    }
    else if (avaliacao === 3) {
        console.log("agradeco a avaliacao, mesmo sendo 3");
    }
    else if (avaliacao === 4) {
        console.log("agradeco a avaliacao, mesmo sendo 4");
    }
    else if (avaliacao === 5) {
        console.log("agradeco a avaliacao, mesmo sendo 5");
    }
    else if (avaliacao === true) {
        console.log("agradeco a avaliacao");
    }
    else if (avaliacao === false) {
        console.log("Por favor, deixe sua avaliação");
    }
}
function showUserReview(review) {
    if (!review) {
        console.log("Voce nao avaliou o produto");
        return;
    }
    console.log(`A nota que você deu foi ${review} obrigado`);
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
