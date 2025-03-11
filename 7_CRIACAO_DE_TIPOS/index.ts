// 1 - generics
function showData<T>(arg: T): string {
    return `o dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(showData(["teste"]))

// 2 - constraint em generic
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObject = {price: 19.99, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
//console.log(showProductName(thirdObject))

// 3 - generics com interface
interface MyObject<T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar = {name: "fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));

// 5 - keyof type operator
 type Character = {name: string, age: number, driverLicence: boolean}

 type C = keyof Character

 function showCharName(obj: Character, name: C ):string {
 return `${obj[name]}`
 }

 const myChar: Character = {
    name: "maiao",
    age: 30,
    driverLicence: true

 }
console.log(showCharName, 'name')

// 6 - typeof type operator
const userName: string = "Matheus"

const useName2: typeof userName = "João"

//const useName3: typeof userName = 14

type x = typeof userName

const userName4: x = "Joaquim"


// 7 - indexed acess types
type Truck = {km: number, kg: number, description: string}

type Km = Truck ['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km){
    console.log(`O veiculos tem a km de ${km}`)
}

showKm(newTruck.km)

// 8 - condicional types
interface A{}

interface B extends A{}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar:myType = 5
//const someVar:myType = "teste"

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

// 9 - template literal types

type testA = "text"

type CustomType = `some ${testA}`

//onst testing: CustomType = "some text 2"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}`| `${a2}`