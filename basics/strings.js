const str = "yuv2020";
const repo = 30;
// console.log(str + repo + " author ");

//String Interpolation 
console.log(`Hello my name is ${str} and my repos are 30`);        //use the backtics(``) method

const str1 = new String("Publisher")
console.log(str1);
console.log(str1[5]);
console.log(str1.__proto__);
console.log(str1.toUpperCase());
console.log(str1.charAt(5));
console.log(str1.indexOf('e'));

const newstr = str1.substring(0,5);

console.log(newstr);

const str2 = str1.slice(-8,5);
console.log("reversed string is : " + str2);

const new_string = "    reversed    ";
console.log(new_string);
console.log(new_string.trim());

const url = "https://youtube.com/tyve56"
console.log(url.replace( '56' - '-'));
console.log(url.includes('sundar'));


console.log(url.startsWith("https://"));

console.log(str1.split('-'))


