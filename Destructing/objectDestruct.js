// const person={
//     name:"Max",
//     age:28,
//     greet(){
//         console.log('Hi'+this.name)
//     }
// };


// const printName=({name})=>{
//     console.log(name);

// }
// printName(person);
// const {name,age}=person;
// console.log(name,age);


const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

const { key1, key3} = { ...obj1}



console.log(key1, key3)