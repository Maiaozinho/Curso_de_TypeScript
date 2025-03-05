// 1 - Numbers
let x: number = 11

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.584848

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// - 2 Strings

const firstName: string = "Maiao"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Da Silva Sauro"

fullName = firstName + " " + lastName

function nomeCompleto(nome1: string, nome2: string){
   return nome1 + nome2
} 

console.log(nomeCompleto, firstName, lastName)

console.log(fullName)
console.log(typeof fullName)

// 3 - boolean

let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

4 // - inference e annotation
let ann: string = "Teste"

let inf = "Teste"

// ann = 1
// inf = 1

console.log("Testando")

//5 - desafio 2
const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu vou impprimir o ${numberToString}`

console.log(printMyNumber)