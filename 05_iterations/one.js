// for loop

for(let index = 0; index <= 10; index++) {
    const element = index
    // console.log(element)
}

/*

for(let i =1; i <= 10; i++) {
    console.log(`Outer loop ${i}`)
    for(let j = 1; j <= 10; j++) {
        // console.log(`Inner loop ${j} and innerloop ${i}`)
        console.log(i + '*' + j + '=' + i*j )
    }
}

let myarr = ['bat', 'sdee', 'lkju', 'jhy', 'hys']

for(let i = 0; i<myarr.length; i++) {
    console.log(myarr[i]);
}

*/

//Break and continue

for(let index = 0; index<=20; index++){
    if(index==7){
        console.log(`found ${index}`)
        // break;
        continue;  // continue the loop and move to next iteration without executing the remaining code block in this iteration.
    }

    console.log(`continue loop upto 20 ${index}`)
}