const array=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

let newarray=array.map(item =>{
    return item.replace(' ','empty string');
});
console.log(newarray);

const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}

 const objj1 = {'key1': 1 , 'key2' : 2}

const objj2 = { ...objj1, 'key1': 1000}



console.log(objj1)

console.log(objj2)
