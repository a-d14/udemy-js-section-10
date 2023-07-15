'use strict';

/***** Calculator Using Higher Order functions *****/
const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

const calculator = function(x, y, operation) {
    console.log(operation(x, y));
}

calculator(2, 3, add);
calculator(2, 3, subtract);
calculator(2, 3, multiply);
calculator(2, 3, divide);

/***** Functions returning functions *****/

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeter = greet('Hello')
greeter('Aakash');
greeter('Dhruv');

greet('Hello')('Aakash');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('Asmi');

/***** Call and Apply methods *****/

const flightManagementWebsite = {
    bookFlight(flightNum, name) {
        this.bookings.push({flight: `${this.iatacode} ${flightNum}`, customerName: name});
    },
    buyPlane() {
        this.planes++;
        console.log(this.planes);
    }
}

const emirates = {
    iatacode: 'EK',
    bookings: []
}

const qatar = {
    iatacode: 'QTR',
    bookings: []
}

flightManagementWebsite.bookFlight.call(emirates, 532, 'Aakash');

const flightDetails = [523, 'Asmi'];
flightManagementWebsite.bookFlight.apply(qatar, flightDetails);

console.log(emirates);
console.log(qatar);

/***** Bind Function *****/
emirates.planes = 300;
qatar.planes = 200;

document.querySelector('.buy').addEventListener('click', 
                            flightManagementWebsite.buyPlane.bind(emirates));

/***** CODING CHALLENGE #1 *****/
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        let isValidAnswer = false;
        while(!isValidAnswer) {
            let answer = Number(prompt(`What is your favourite programming language?
            0: JavaScript
            1: Python
            2: Rust
            3: C++`));
            
            if(typeof answer === 'number' &&
                answer >= 0 && 
                answer < this.options.length) {
                this.answers[answer]++;
                isValidAnswer = true;
            } else {
                alert("Please enter a valid number");
            }
        }
        this.displayResults();
    },
    displayResults(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if(type === 'string') {
            console.log(this.answers.join(", "));
        }
    }
}

document.querySelector('.poll').addEventListener('click', 
                            poll.registerNewAnswer.bind(poll));

/***** CODING CHALLENGE #2 *****/
