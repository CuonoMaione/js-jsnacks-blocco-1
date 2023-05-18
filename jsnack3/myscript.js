const OddNumbers = [];

for (let i = 0; i < 6; i++) {
    
    const Number = parseInt(prompt("insert a number"));

    if(Number % 2 != 0) {
        OddNumbers.push(Number)
    }
    
}

console.log(OddNumbers)