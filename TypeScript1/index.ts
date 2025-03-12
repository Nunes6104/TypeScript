type Pizza = {
    name: string,
    price: number
}
type Order = {
    pizza: Pizza
    status: string
    id: number

}

const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "veggie", price: 9},
]

let cashInRegister = 100
let IdOrder = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

function placeOrder(name: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === name)
    if(!selectedPizza){
        console.error('This' + name + ' does not existe')
        return
    }
    cashInRegister += selectedPizza.price

    const newOrder = {pizza: selectedPizza, status: "Ordered", idOrder: IdOrder}
    orderQueue.push(newOrder)
    IdOrder++
    return newOrder;
}

function completeOrder(orderId: number){
    const selecetedOrder = orderQueue.find(orderObj => orderObj.idOrder === orderId)
    if(!selecetedOrder){
        console.error('Id order does not exist')
        return
    }

    selecetedOrder.status = "Completed"
    return selecetedOrder;
}


addNewPizza({name: "BBQ", price: 11})
addNewPizza({name: "Chicken", price: 13})
addNewPizza({name: "Spice", price: 6})

placeOrder("BBQ")
completeOrder(1)

console.log("menu: ", menu)
console.log("Cash: ", cashInRegister)
console.log("orderQueue: ", orderQueue)

/*type Address = {
    street: string,
    city: string,
    county: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address
}
let person1: Person = {
    name: "Joe",
    age: 18,
    isStudent: true,
    address: {
        street: "1234",
        city: "abc",
        county: "Portugal"
    }
}

let people = [person1];
let people: Array<Person> = [person1];

let ages: number[] = [100, 101]
let age = [100, 101]*/