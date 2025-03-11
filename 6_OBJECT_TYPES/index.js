"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvaliable) {
        console.log("O produto esta disponivel");
    }
}
const shirt = {
    name: "Camiseta",
    price: 19.99,
    isAvaliable: true
};
showProductDetails(shirt);
showProductDetails({ name: "tenis", price: 129.99, isAvaliable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail:${user.email}`);
    if (user.role) {
        console.log(`E seu papel é: ${user.role}`);
    }
}
const u1 = { email: "maiaozinho@gmail.com", role: "admin" };
const u2 = { email: "adriannetto@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const maiao = {
    name: "Maiao",
    age: 20
};
const goku = {
    name: "Goku",
    age: 30,
    superPowers: ["Kameha", "Genki-Dama"]
};
console.log(maiao);
console.log(goku);
const Arnold = {
    name: "Arnold",
    type: "pystol",
    caliber: 12
};
console.log(Arnold);
console.log(Arnold.caliber);
// 7 - readonly array
let myArray = ["Maça", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray: fiveNumbers = [1,  2,3,4,5,6]
//const myNumberArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Matheus", 30];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    //numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
