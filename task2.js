let numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10];
let size = numbers.length;
for (let i = 0; i < size-1; i++){
    for (let j = 0; j < size-i-1 ; j++){
        if (numbers[j] > numbers[j+1]){
            temp = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
        }
    }
}

console.log(numbers);
