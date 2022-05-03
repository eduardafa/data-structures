let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aValues = numbers.values();

// console.log(aValues.next());

for (const n of aValues) {
    console.log(n);
}
