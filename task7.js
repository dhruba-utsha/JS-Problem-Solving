let string = 'How are You'
let vowels=['A','E','I','O','U','a','e','i','o','u']
let total=0

for (let item of string) {
    if (vowels.includes(item)) {
        total+=1;
    }
}

console.log(total);
