const prompt = require('prompt-sync')();

let a = Number(prompt("Enter your first Number :- "));
let b = Number(prompt("Enter your second Number :- "));
let op = prompt("Enter your Operator (+,-,*,/) :- ");

let ra = Math.random();

const faulty = (a, b, op) => {
    if (op == '+') {
        return a * b
    }
    else if (op == '-') {
        if (b==0){
            return "Infinite"
        }

        else{
            return a/b
        }
    }
    else if (op == '*') {
        return a - b
    }
    else if (op == '/') {
        return a + b
    }
}

const correcty = (a, b, op) => {
    if (op == '+') {
        return a + b
    }
    else if (op == '-') {
        return a - b
    }
    else if (op == '*') {
        return a * b
    }
    else if (op == '/') {

        if (b==0){
            return "Infinite"
        }

        else{
            return a/b
        }
    }
}

if (ra > 0.1) {
    console.log(correcty(a, b, op))
}

if (ra < 0.1) {
    console.log(faulty(a, b, op))
}

let yn = prompt("Run Again ? y/n :- ");
while (yn == 'y') {
    a = Number(prompt("Enter your first Number :- "));
    b = Number(prompt("Enter your second Number :- "));
    op = prompt("Enter your Operator (+,-,*,/) :- ");
    ra = Math.random();

    if (ra > 0.1) {
        console.log(correcty(a, b, op))
    }

    if (ra < 0.1) {
        console.log(faulty(a, b, op))
    }

    yn=prompt("Run Again ? y/n :- ")
} 

while (yn != 'y') {
    console.log("We hope Faulty Calculator got you wrong somewhere, Have a bad day ahead !")
    break;
} 
