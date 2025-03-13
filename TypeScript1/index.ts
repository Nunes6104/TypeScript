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

let cashInRegister = 100
let nextId = 1
let pizzaid = 1
const orderQueue: Order[] = []

const menu: Pizza[] = [
    {idPizza: pizzaid++, name: "Margherita", price: 8},
    {idPizza: pizzaid++, name: "Pepperoni", price: 10},
    {idPizza: pizzaid++, name: "Hawaiian", price: 10},
    {idPizza: pizzaid++, name: "veggie", price: 9},
]

function addNewPizza(pizzaObj: Omit<Pizza, "idPizza">): Pizza {
    const newPizza: Pizza = {
        idPizza:  pizzaid++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
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

function addToArray<T> (array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray(menu, {idPizza: pizzaid++, name: "BBQ", price: 11})
addToArray<Order>(orderQueue, {idOrder: nextId, pizza: menu[2], status: "Completed"})

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


addNewPizza({name: "BBQ", price: 11})
addNewPizza({name: "Chicken", price: 13})
addNewPizza({name: "Spice", price: 6})

placeOrder("BBQ")
completeOrder(1)

console.log("menu: ", menu)
console.log("Cash: ", cashInRegister)
console.log("orderQueue: ", orderQueue)


/*
type User = {
    id: number
    username: string
    role: "member" | "admin" | "contributor"
}

type UpdatedUser = Partial<User>

let nextUserId = 1
const users: User[] =[
{ id: nextUserId++, username: "john_doe", role: "member" },
{ id: nextUserId++, username: "jane_smith", role: "contributor" }
];

function updateUser (id: number, updates: UpdatedUser) {
const foundUser = users. find (user => user.id === id)
if (!foundUser) {
console.error("User not found!")
return
}

Object.assign(foundUser, updates)
}
// updateUser(1, { username: "new_john_doe" }); 
// updateUser (4, { role: "contributor" });


function addNewUser (newUser: Omit<User, "id">): User {
const user: User = {
    id: nextUserId++,
    ...newUser,
}

users.push(user)
return user
 
}

addNewUser({username: "joe_schmoe", role: "member" })
console.log(users)

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];

const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<Type> (array: Type[]): Type | undefined {
return array[array.length-1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))
*/
