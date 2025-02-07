const coding = ['js', 'css', 'python', 'ruby', 'css']
// coding.forEach(function (item) {
//     console.log(item)
// })


// coding.forEach((item) => {
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     // console.log(`Index: ${index}, Item: ${item}, Array: ${arr}`)
//     console.log(item, index, arr)
// })

const mycoding = [
    {
        languagename : 'english',
        location : 'India'

    },

    {
        languagename : 'java',
        location : 'france'

    },

    {
        languagename : 'python',
        location : 'us'

    }
]

mycoding.forEach((item) => {
    console.log(`Language: ${item.languagename}, Location: ${item.location}`)
})