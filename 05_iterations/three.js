// for or

// ["", "", "", "", "", "", "", ""]

// [{}, {}, {}, {}, {}, {}, {}]


const arr = [1,2,3,4,5,6,7,9]

for(const i of arr){
    console.log(i)  // prints the values of array
}

const str = "Heera Lal"
for(const i of str){
    console.log(` Hello, ${i} how are you`)  // prints the index of string
}

const map = new Map();      //map is known as unique values
map.set('IN', 'INDIA')
map.set('USA', 'UNITED OF AMERICA')
map.set('FR', 'FRANCE')

// console.log(map) // prints

for(const [key, value] of map){
    console.log(`${key} :- ${value}`)  // prints the key-value pairs
}

// const myobject = {
//     'game1' : 'nfs',
//     'game2' : 'bat1'
// }

// for(const [key, value] of myobject){
//     console.log(`${key} :- ${value}`)  // prints the key-value pairs
// }


