const mynum = [1,2,3]

// const sum = mynum.reduce((accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`)
//     return accumulator + currentValue
// }, 0)

const sum = mynum.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum)


const shoppingcart = [
    {
        itemName : 'js course',
        price : 5999
    },
    {
        itemName : 'java course',
        price : 1079,
    },
    {
        itemName : 'js course',
        price : 1999
    },
    {
        itemName : 'java course',
        price : 5799,
    },
    {
        itemName : 'js course',
        price : 3099
    },
    {
        itemName : 'python course',
        price : 2399,
    },
    {
        itemName : 'ruby course',
        price : 2299
    },
    {
        itemName : 'c++ course',
        price : 12099,
    },
]

const totalPrice = shoppingcart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0)

console.log(totalPrice)

