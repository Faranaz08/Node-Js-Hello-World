const fecthData =callback =>{
    setTimeout(()=>{
        callback('Done');
    },1500)
}

setTimeout(()=>{
    console.log('Timer is done!');
    fecthData(text =>{
        console.log(text);
    })
},2000);
console.log("Hello!");
console.log("hi");