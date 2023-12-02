import * as fs from "fs";

const puzzleInput = fs.readFileSync("./src/day-1/puzzleInput.txt", "utf8"); // read txt file
const spelledDigit = [[1, "one"], [2, "two"], [3, "three"], [4, "four"], [5, "five"], [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"]]

export function firstStar(): number {
    const lines = puzzleInput.split("\n").filter(Boolean); // split all lines except empty lines and put them in a array
    let sum = 0;

    for (const line of lines) {
        const firstDigit = line.match(/(\d)/)[0]; // get first number
        const secondDigit = line.match(/(\d(?=\D*$))/)[0]; // get last number
        const twoDigitNumber = parseInt(firstDigit + secondDigit); // convert string to integer and put the two digit number in it.
        
        sum += twoDigitNumber;
    }
    return sum
}

export function secondStar(): number {
    const lines = puzzleInput.split("\n").filter(Boolean); // split all lines except empty lines and put them in a array

    const modifiedLines = [], twoDigitNumber = [];
    let sum = 0
    for (let x = 0; lines.length > x; x++) {    
        for (let i = 0; spelledDigit.length > i; i++) {
            const firstChar = spelledDigit[i][1][0]; // get first char
            const lastChar = spelledDigit[i][1][(<string>spelledDigit[i][1]).length - 1]; // get second char
            lines[x] = lines[x].replaceAll(<string>spelledDigit[i][1], firstChar + spelledDigit[i][0] + lastChar); // replace spelled number with integer and first/last char
        }
    
        modifiedLines.push(lines[x]); //push new line
    }

    for (const line of lines) {
        const firstDigit = line.match(/(\d)/)[0]; // get first number
        const secondDigit = line.match(/(\d(?=\D*$))/)[0]; // get last number
        const twoDigitNumber = parseInt(firstDigit + secondDigit); // convert string to integer and put the two digit number in it.
        sum += twoDigitNumber;
    }

    return sum
}