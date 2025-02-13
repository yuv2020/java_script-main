const coding = ['js', 'css', 'python', 'ruby', 'css']

/*
const values = coding.forEach((item) => {
    console.log(item)
    // return item;
})

console.log(values)
*/

const mynums = [1,2,3,4,5,6,7,8,9,10,11,12]

// const newnums = mynums.filter((num) => {
//     return num >=4
//     })

const newnums = [];

mynums.forEach((num) => {
    if(num>=4){
        newnums.push(num)
    }
});

console.log(newnums);


const books = [
    {title: 'Book 1', genre:'fiction', author: 'james', publisher:'1876'},
    {title: 'Book 2', genre:'Science', author: 'jane', publisher:'1895'},
    {title: 'Book 3', genre:'fiction', author: 'john', publisher:'1920'},
    {title: 'Book 4', genre:'History', author: 'jack', publisher:'1935'},
    {title: 'Book 5', genre:'non-fiction', author: 'Albe', publisher:'2021'},
    {title: 'Book 6', genre:'Hindi', author: 'jony', publisher:'2010'},
    {title: 'Book 7', genre:'English', author: 'jacky', publisher:'2002'}
]

    //For database purposes if we want to search any of the categories
let userbooks = books.filter((bk) => bk.genre === 'English')

userbooks = books.filter((bk) => {
    return bk.publisher>=2000 && bk.genre === 'English'
})

console.log(userbooks) 