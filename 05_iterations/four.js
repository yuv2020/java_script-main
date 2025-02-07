const myobj = {
    js : 'javascript',
    rb : 'ruby',
    php : 'php',
    py : 'python',
    c : 'c++'
}

for(key in myobj){
    // console.log(key + " : " + myobj[key]);
 
}

const programming =['js', 'python', 'php', 'py', 'c']
for(const key in programming){
    // console.log(programming[key]);
}


const map = new Map();      //map is known as unique values
map.set('IN', 'INDIA')
map.set('USA', 'UNITED OF AMERICA')
map.set('FR', 'FRANCE')

for(const key in map){
    console.log(key + " : " + map.get(key));
}