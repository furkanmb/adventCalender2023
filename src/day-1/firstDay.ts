const fs = require('fs')

export function firstStar(){
    const puzzleInput = fs.readFileSync('./src/day-1/puzzleInput.txt', 'utf8'); // read txt file

    let twoDigitNumber = [];
    let firstDigit, secondDigit;
    let sum = 0;

    const lines = puzzleInput.split("\n"); // split all lines and put them in a array
    const filteredLines = lines.filter(Boolean); // remove all empty lines

    for (let i = 0; filteredLines.length > i; i++ ) {
        firstDigit = filteredLines[i].match(/(\d)/)[0]; // get first number
        secondDigit = filteredLines[i].match(/(\d(?=\D*$))/)[0]; // get last number
        twoDigitNumber[i] = parseInt(firstDigit + secondDigit); // convert string to integer and put the two digit number in it.
    }
    twoDigitNumber.forEach(item => {
        sum += item;
    });

    return sum
}