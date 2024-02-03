const array=['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

let newarray=array.map(item =>{
    return item.replace(' ','empty string');
});
console.log(newarray);