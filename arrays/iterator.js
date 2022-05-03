let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let iterator = numbers[Symbol.iterator]();

// console.log(iterator.next().value);

for (const n of iterator) {
    console.log(n);
}
