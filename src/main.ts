console.log("Hello, world! from Robin");

let name: string  ;

name = "Robin";

console.log(name)


let names: (string| number|boolean) []= ["Robin", "John", "Doe",12,true];

console.log(names)

let random : string | number | boolean;

random = "Robin";
random = 123;
random = true;
console.log(random)

function sayMyName(name: string){
    console.log("Hello, world! from " + name);
}

sayMyName("Maruf");

function add({a,b}: {a: number, b: number}) {
    return a + b;
}

let result= add({a: 12, b: 14});
console.log(result);