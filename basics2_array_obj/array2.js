const marvel_heroes = ["Thor", "Ironman", "Spiderman"]
const dc_heroes = ["Baalveer", "Shakti"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)  // output: ["Thor", "Ironman", "Spiderman", ["Baalveer", "Shakti"]]

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

const another_array = [1,2,3,4,5,[6,7],8,[9,10,32,[34,78],12,90]]
const other_array = another_array.flat(Infinity)

console.log(other_array)  // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32, 34, 78, 12, 90]

console.log(Array.isArray(another_array))
console.table([Array.isArray(another_array), Array.isArray('other'), Array.from('other')])

// console.log(Array.isArray('other'))
// console.log(Array.from('other'))

console.log(Array.from({place: 'other'}))   //Interesting case for interviews

let score1 = 100
let score2 = 200;

console.log(Array.of(score1, score2))
