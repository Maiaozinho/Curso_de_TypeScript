// 1 - void
function withoutReturn():void{
    console.log("Esta função não tem retorno")
//    return 1
}

withoutReturn()

//2 - callback como argumento
function greeting(name: string):string {
    return `Olá ${name}`

}

function preGreeting(f: (name: string) => string, userName:string) {
    
    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)

}

preGreeting(greeting, "Matheus")
preGreeting(greeting, "João")

// 3 - generic function
function firstElement<T>(arr: T[]) {
    return arr[0]

}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))
//console.log(firstElement("Teste"))

function mergeObjects<U , T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}
const newObject = mergeObjects({name: "Matheus"}, {age:30, job:"Programmer"})

console.log(newObject)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T
    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("12", "5"))
// console.log(biggestNumber("12", 5)) 

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

//console.log(mergeArrays([1, 2, 3],["teste", "testando"]))
console.log(mergeArrays<number | string>([1, 2, 3],["teste", "testando"]))

// 5 - parametros opcionais
function modernGreeting(name: string, greet?: string) {
     if(greet){
        return(`Ola ${greet} ${name}, tudo bem?`)
     }
     
     return`Olá ${name}, tudo bem?`
}
console.log(modernGreeting("Maiao"))
console.log(modernGreeting("Maiao", "Senhor"))

// 7 - parametro default
function someDefault(n: number, m = 10):number{
    return n + m
}
console.log(someDefault(10))
console.log(someDefault(14, 15))

// 8 - unknown
function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("X é um número")
    }
}

doSomething([1, 2, 3])
doSomething(5)

// 9 - never
function showerrorMessage(msg: string):never {
    throw new Error(msg)
}

//showerrorMessage("Algum erro!")

// 10 - Rest operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(4, 5, 6, 7, 8))
//console.log(sumAll("dez"))

// 11 - destructuring como parametro
function showProductDetails({name, price}: {name: string, price: number}): string{
        return `O nome do produto é ${name}, e o preço é ${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))
//console.log(showProductDetails(name: "teste, agr: 30"))
//console.log(showProductDetails([1, 2])) 