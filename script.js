const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value !!")
    }, 5000);
    
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value !!")
    }, 10000);
    
})


// always returns a promise
// async function getData() {
//     // return "Namaste";  
//     return p;  
// }

// await can only be used inside an async function
async function handlePromise() {

    //JS engine was waiting for promise to be resolved
    const val = await p1;
    console.log("Namaste JavaScript");
    console.log('val', val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log('val2', val2);
}
handlePromise();

// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

// function getData(){

//     //JS engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));
//     console.log("Namaste Javascript");
// }

// getData();