const name = "david";
console.log(global);

const greet = (name) => {
console.log(`Hello ${name}`);
};

greet("matovu");
greet("david");


global.setTimeout(() => {
    console.log("Time out")
    clearInterval(int) // after 3 seconds clear the interval
}, 3000);

const int = setInterval(()=>{
console.log("My name")
}, 1000)

// file name and directory name
console.log(__dirname) // gets the absolute pass of the current folder file is in
console.log(__filename)// gets the absolute pass of the current folder with the file name