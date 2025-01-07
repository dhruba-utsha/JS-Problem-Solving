let numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0];
let negative = [];
for (let item of numbers2) {
    if (item<0) {
        negative.push(item);
    }
}
console.log(negative.join(' '));