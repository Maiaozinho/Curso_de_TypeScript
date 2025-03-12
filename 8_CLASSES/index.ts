// 15 - Generic class
class Item<T, U>{
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second

    }
    get showFirst(){
        return `O first é: ${this.first}`
    }
}

const newItem = new Item("caixa", "surpresa")

console.log(newItem)

console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.first)

//16 - parameter properties
class ParameterProperties {
    constructor(
        public name: string,
        private qty: number,
        private price: number ){
    this.name = name
    this.qty = qty
    this.price = price
}
get showQty(){
    return `Qtd total: ${this.qty}`
}

get showPrice(){
    return `Qtd total: ${this.price}`
}

}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name)

// console.log(newShirt.price)

console.log(newShirt.showPrice)

console.log(newShirt.showQty)

// 17 - class expressions
const myClass = class<T>{
    name

    constructor(name: T) {
        this.name = name
    }
};

const pessoa = new myClass("Jones");

console.log(pessoa);

console.log(pessoa.name);

// 18 - abstract class

abstract class AbstractClass {
    abstract showName(): void;
}

//const newObj = new AbstractClass();

class AbstractExample extends AbstractClass {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    showName() {
    console.log(`O nome é: ${this.name}`);
    }
}

const newAbstractObject = new AbstractExample("Josias")

newAbstractObject.showName();

// 19 - relações entre classes
class Dog{
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat();

console.log(doguinho);