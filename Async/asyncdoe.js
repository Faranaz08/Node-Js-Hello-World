// const fecthData =() =>{
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("DOne")
//         },1500)
//     });
//     return promise
    
// }

// setTimeout(()=>{
//     console.log('Timer is done!');
//     fecthData()
//         .then(text =>{
//         console.log(text);
//         return fecthData();
        
//     });
// },2000);
// console.log("Hello!");
// console.log("hi");


function Print(value, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(value);
        resolve();
      }, delay);
    });
  }
  
  async function printOrder() {
    console.log('a');
    await Print('b', 0);
    await Print('c', 3000);
    await Print('d', 0);
    console.log('e');
  }
  
  printOrder();
  