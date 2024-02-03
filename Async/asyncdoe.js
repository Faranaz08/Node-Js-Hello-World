const fecthData =() =>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("DOne")
        },1500)
    });
    return promise
    
}

setTimeout(()=>{
    console.log('Timer is done!');
    fecthData()
        .then(text =>{
        console.log(text);
        return fecthData();
        
    });
},2000);
console.log("Hello!");
console.log("hi");