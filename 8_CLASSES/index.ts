// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const matheus = new User()

console.log(matheus)

matheus.name = "Matheus"
// matheus.job = "Programmer"

console.log(matheus)

// 2 - constructor
class NewUser{
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("Joao", 20)

console.log(joao)

// 3 - campo readonly

class Car{
    name
    readonly wheels = 4

    constructor(name: string){
        this.name = name
    }
}

const fusca = new Car("fusca")

console.log(fusca)

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

console.log(fusca)

//fusca.wheels = 3

// 4 - herança e super
class Machine {
    name

    constructor(name: string){
        this.name = name
    }
}

const trator = new Machine("Trator")
class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - métodos

class Dwarf {
    name

    constructor(name: string ){
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)

// 6 - this
class Truck {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails() {
//        console.log(`Caminhao do modelo: ${model}, que tem ${hp} de potência`)
        console.log(`Caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters
class Person{
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name +  " "  + this.surname
    }
}

const gustavoMaiaOliveira = new Person("Gustavo", "Maia Oliveira")

console.log(gustavoMaiaOliveira.fullName)

// 8 - setters

class Coords {

    x!: number
    y!: number

    set fillx(x: number) {
        if(x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso")
    }
    set filly(y: number) {
        if(y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso")
    }
    get getCoords(){
    return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 10

console.log(myCoords)

console.log(myCoords.getCoords)

// 9 - implements
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return`O título do post é: ${this.title}`
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return`O título é: ${this.title}`
    }
}
//10 - override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa")
    }
    showName() {

    }
}

class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa")
    }
}

const myObject = new Nova()

myObject.someMethod()

//11 - public
class C {
    public x = 10
}

class D extends C {

}

const cInstance =  new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

//12 - protected
class E {
    protected x = 10

    protected protectedMethod() {
        console.log("este metodo eh protegido")
    }
}

class F extends E {
    showX(){
    console.log("X: " + this.x)
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const fInstance = new F()

//console.log(fInstance.x)
fInstance.showX()
fInstance.showProtectedMethod()

// 13 - private
class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Método privado")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new PrivateClass()

//console.log(pObj.name)

console.log(pObj.showName())

//console.log(pObj.privateMethod())

pObj.showPrivateMethod()

//class TestingProvate extends PrivateClass {
//    myMethod() {
//        this.privateMethod()
//    }
//}

// 14 - static members
class StaticMembers{
    static prop = "Teste static"

    static staticMethod() {
        console.log("Este é um método estático")
    }
}

console.log(StaticMembers.prop)

StaticMembers.staticMethod()

class Volkswagen {
    static fabricaCuritiba = 11
    static fabricaSaoPaulo = 1
    static fabricaMaranhao = 2

    static mostrarFabrica() {
        console.log("fabrica MM")
    }
}


// 15 - generic class
/* class Item<T, U>{
    first
    second
    
    constructor(fisrt: T, second: U)
} */