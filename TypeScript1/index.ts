type Pizza = {
    idPizza: number,
    name: string,
    price: number
}
type Order = {
    pizza: Pizza
    status: "Ordered" | "Completed"
    idOrder: number

}

const menu: Pizza[] = [
    {idPizza: 1, name: "Margherita", price: 8},
    {idPizza: 2, name: "Pepperoni", price: 10},
    {idPizza: 3, name: "Hawaiian", price: 10},
    {idPizza: 4, name: "veggie", price: 9},
]

let cashInRegister = 100
let nextId = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj);
}

function placeOrder(name: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === name)
    if(!selectedPizza){
        console.error('This' + name + ' does not existe')
        return
    }
    cashInRegister += selectedPizza.price

    const newOrder: Order = {pizza: selectedPizza, status: "Ordered", idOrder: nextId}
    orderQueue.push(newOrder)
    nextId++
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined{
    const selecetedOrder = orderQueue.find(orderObj => orderObj.idOrder === orderId)
    if(!selecetedOrder){
        console.error('Id order does not exist')
        return
    }

    selecetedOrder.status = "Completed"
    return selecetedOrder;
}

function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if(typeof identifier === "string"){
        return menu.find(ident => ident.name.toLowerCase() === identifier.toLowerCase())
    }
    if (typeof identifier === "number") {
        return menu.find(ident => ident.idPizza === identifier)
    } else {
        throw new TypeError('Id or pizza name does not exist')
    }
}


addNewPizza({idPizza: 5, name: "BBQ", price: 11})
addNewPizza({idPizza: 6, name: "Chicken", price: 13})
addNewPizza({idPizza: 7, name: "Spice", price: 6})

placeOrder("BBQ")
completeOrder(1)

console.log("menu: ", menu)
console.log("Cash: ", cashInRegister)
console.log("orderQueue: ", orderQueue)



