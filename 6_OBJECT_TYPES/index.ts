// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvaliable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvaliable) {
        console.log("O produto esta disponivel")
    }
}

const shirt:Product = {
    name: "Camiseta",
    price: 19.99,
    isAvaliable: true
}

showProductDetails(shirt)
showProductDetails({name: "tenis", price:129.99, isAvaliable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: string
}
    function showUserDetails(user: User) {
        console.log(`O usuario tem o e-mail:${user.email}`)

        if(user.role){
            console.log(`E seu papel é: ${user.role}`)
        }
    }

const u1:User = {email: "maiaozinho@gmail.com", role: "admin"}
const u2:User = {email: "adriannetto@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car{
    brand: string
    readonly wheels: number
}
const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

// 5 - extending interface
interface Human {
    name: string
    age: number
}
interface SuperHuman extends Human {
    superPowers:string[]
}

const maiao:Human = {
    name:"Maiao",
    age: 20
}
const goku:SuperHuman = {
    name: "Goku",
    age: 30,
    superPowers:["Kameha", "Genki-Dama"]
}

console.log(maiao)
console.log(goku)

// 6 - intersection types

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const Arnold:HumanWithGun = {
    name: "Arnold",
    type: "pystol",
    caliber: 12
}

console.log(Arnold)

console.log(Arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

// myArray[0] = "teste"

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
//const myNumberArray: fiveNumbers = [1,  2,3,4,5,6]
//const myNumberArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Matheus", 30]

console.log(anotherUser[0])

anotherUser[0] = "João"

console.log(anotherUser[0])

// 9 - tuplas com readonly

function showNumbers(numbers: readonly[number, number]) {
    //numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])