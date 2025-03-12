const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Hawaiian", price: 10},
    {name: "veggie", price: 9}
]

const cashInRegister = 100
const orderQueue = []
const IdOrder = 1;

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(name) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === name)
    cashInRegister += selectedPizza.price

    const newOrder = {pizza: selectedPizza, Status: "Ordered", IDOrder: IdOrder}
    orderQueue.push(newOrder)
    IdOrder++
    return newOrder;
}

function completeOrder(orderId){
    const selecetedOrder = orderQueue.find(orderObj => orderObj.Id === orderId)

    selecetedOrder.Status = "Completed"
    return selecetedOrder;
}


addNewPizza({name: "BBQ", Price: 11})
addNewPizza({name: "Chicken", Price: 13})
addNewPizza({name: "Spice", Price: 6})

placeOrder("BBQ")
completeOrder("1")

console.log("menu: ", menu)
console.log("Cash: ", cashInRegister)
console.log("orderQueue: ", orderQueue)
