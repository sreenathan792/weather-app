var promise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("Success");
    },2000);
})

promise.then((res) => {
    console.log(res);
})

var asyncAdd = (a,b) => {
    return new Promise ((resolve,reject) => {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        } else {
            reject("Both values must be of type number")
        }
    })
}

asyncAdd(10,"20").then((res) => {
    console.log(res);
}, (rej) => {
    console.log(rej);
})