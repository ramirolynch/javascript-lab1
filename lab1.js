const prompt = require('prompt-sync')();


// Loops Exercise 1

for (let i=0; i <= 10; i++) {
	console.log(`this is number ${i}.`)
}

for (let i=10; i > 0; i--) {

	console.log(`this is number ${i}`)
}

let i = 0;
while (i<10) {
console.log(`this is a number ${i}`)
i++;
}

let i = 10;
while (i>0) {
console.log(`this is a number ${i}`)
i--;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (number of numbers) {
    console.log(number)
}

// Loops Exercise Extended Challenge

let word = prompt(`please enter your word of less than 10 characters:`);


if (word.length < 10) 
{

for (let i=word.length; i <= 10; i++) {
    word = ' ' + word;
}

}

console.log(word);


// Lab 1

// Mitch Cuckovitch

let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24"
let pineapplePizza = '';
let lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College", "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I'm a graduate of a Grand Circus bootcamp."];



if (name.toLowerCase().includes("mitch")) {

    console.log(`Hello, my mame is ${name}, I am ${age} years old and my birthday is on ${birthday}.`)

} 

else {
    
    let questionName = prompt(`what is your name? `);
    name = questionName;
}


let questionPizza = prompt(`Hi ${name} do you like Pineapple on pizza? `)

if (questionPizza.toLowerCase().includes("yes")) {

    pineapplePizza = true;

    console.log(`My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
    

}
else {

    pineapplePizza = false;
    console.log(`My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
    
}


for (let i=0; i < lifeEvents.length; i++) {

    console.log(`${lifeEvents[i]}`)
}


// randomNumber

let min = 1;
let max = 10;


let counter = 0;

while (true) {

    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    counter++;

    if (randomNumber !== 5) {

        console.log(`randomNumber !== 5`);
    }

    else {      

        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);

        break;

    }

}


// version 1

let hours = parseInt(prompt(`Please enter number of hours worked: `));

let wage = parseInt(prompt(`Please enter wage: `))

    
    if(hours > 40) {

        console.log((wage * 1.5 * (hours - 40) + (wage * (40))));
    }

    else {

        console.log(wage * hours);

    }

// version 2 

let salary = function(hours, wage) {
    
    if (hours > 40) {
        
        return wage * 1.5 * (hours - 40) + (wage * 40);
    }

    else {
        return wage * hours;
    }

}

console.log(salary(60,12));




