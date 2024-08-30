const header = document.querySelector('h1');
//header.innerText = 'my new text!' 

function changeText() {
    header.innerText = 'my new text';
}
console.group('exercise 1')
//exercise 1
console.log("Hello, World.")

console.group('exercise 2')
//exercie 2
const firstName = "christian"

console.log(firstName)

console.group('exercise 3')
//exercise 3
const side1 = 10,
side3 = 10,
side2 = 30,
side4 = 30;

console.log ((side1 + side3) * (side2 + side4))

console.group('exercise 4')
//exercise 4
let numberLog = 1

if (numberLog % 2 == 0) {
    console.log('even')
} else {
    console.log("odd")
}

console.group('exercise 5')
//exercise 5

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

console.group('exercise 6')
//exercise 6

let person = prompt("please enter your name")

if(person != null) {
    alert("hello " + person + "! you look quite swell today.")
}
