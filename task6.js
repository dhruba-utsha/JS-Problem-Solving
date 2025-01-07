let numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
let divisible = [];
for (let item of numbers2) {
    if (item % 10 == 0) {
        divisible.push(item);
    }
}
console.log(divisible.join(' '));