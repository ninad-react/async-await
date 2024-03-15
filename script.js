// // always retruns a promise
// async function getData() {
//     // return "Namaste";
//     return p;
// }

// const dataPromise = getData();
// dataPromise.then((resp) => console.log(resp));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value !!")
    }, 5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value !!")
    }, 10000)
})

//handling promises using async await

// await can only be used inside async function
async function handlePromise() {

    console.log("Hello world");

    const val = await p1;
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

handlePromise();


//handling promises using normal function
function getData() {
    p.then((res) => console.log('res', res));
    console.log("Namaste JavaScript");
}

// getData();

