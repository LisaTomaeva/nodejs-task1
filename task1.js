const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function reverseStr(inputStr) {
    return inputStr.split("").reverse().join("");
}

export function ask() {
    rl.question('', (answer) => {
        console.log(`${reverseStr(answer)}`);
        ask();
      });
}

ask();
