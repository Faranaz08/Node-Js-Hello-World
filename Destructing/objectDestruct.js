const person={
    name:"Max",
    age:28,
    greet(){
        console.log('Hi'+this.name)
    }
};


const printName=({name})=>{
    console.log(name);

}
printName(person);
const {name,age}=person;
console.log(name,age);