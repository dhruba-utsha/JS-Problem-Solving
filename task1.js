let oddNumbers = [];
for (let number = 0; number <= 100; number++) {
    if (number % 2 != 0) {
        oddNumbers.push(number);
    }
}
console.log(oddNumbers.join(' '));