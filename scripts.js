const header = document.querySelector('h1');
//header.innerText = 'my new text!' 

function changeText() {
    header.innerText = 'my new text';
}
//exercise 1
console.log("Hello, World.")

//exercie 2
const firstName = "christian"

console.log(firstName)

//exercise 3
const side1 = 10,
side3 = 10,
side2 = 30,
side4 = 30;

console.log ((side1 + side3) * (side2 + side4))

//exercise 4
let numberLog = 1

if (numberLog % 2 == 0) {
    console.log('even')
} else {
    console.log("odd")
}


//exercise 5

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//exercise 6

let person = prompt("please enter your name")

if(person != null) {
    alert("hello " + person + "! you look quite swell today.")
}
