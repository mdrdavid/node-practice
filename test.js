const name = "david";
console.log(global);

const greet = (name) => {
console.log(`Hello ${name}`);
};

greet("matovu");
greet("david");


global.setTimeout(() => {
    console.log("Time out")
}, 3000);

const int = setInterval(()=>{
console.log("My name")
}, 1000)